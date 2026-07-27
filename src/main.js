/* =========================================================
   IMPORTS
   ========================================================= */
import './style.css'

// Flatpickr: JavaScript datepicker + its default theme CSS
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.min.css'

// Luxon: used for all date/age math
import { DateTime } from 'luxon'

/* =========================================================
   DOM REFERENCES
   ========================================================= */
const form = document.querySelector('#age-form')
const birthdateInput = document.querySelector('#birthdate')
const errorMessage = document.querySelector('#error-message')

const resultSection = document.querySelector('#result')
const yearsEl = document.querySelector('#years')
const monthsEl = document.querySelector('#months')
const daysEl = document.querySelector('#days')

/* =========================================================
   DATEPICKER SETUP (Flatpickr)
   ========================================================= */
// Restrict selection to today or earlier, since a birthdate can't be
// in the future. This blocks future dates directly in the calendar UI.
flatpickr(birthdateInput, {
  dateFormat: 'Y-m-d',       // format stored in the input value
  altInput: true,            // show a friendlier format to the user
  altFormat: 'F j, Y',       // e.g. "March 3, 2001"
  maxDate: 'today',
  allowInput: true,
})

/* =========================================================
   HELPER FUNCTIONS
   ========================================================= */

/**
 * Shows a validation message and highlights the input as invalid.
 * @param {string} message
 */
function showError(message) {
  errorMessage.textContent = message
  birthdateInput.classList.add('invalid')
  resultSection.hidden = true
}

/**
 * Clears any previously shown validation message.
 */
function clearError() {
  errorMessage.textContent = ''
  birthdateInput.classList.remove('invalid')
}

/**
 * Calculates the difference between the birthdate and now
 * in whole years, months, and days using Luxon.
 * @param {DateTime} birthDate
 * @returns {{years: number, months: number, days: number}}
 */
function calculateAge(birthDate) {
  const now = DateTime.now()

  // Luxon's diff() breaks the interval into the given units,
  // "cascading" the remainder down (years -> months -> days).
  const diff = now.diff(birthDate, ['years', 'months', 'days']).toObject()

  return {
    years: Math.floor(diff.years ?? 0),
    months: Math.floor(diff.months ?? 0),
    days: Math.floor(diff.days ?? 0),
  }
}

/**
 * Renders the calculated age into the result section.
 */
function displayAge({ years, months, days }) {
  yearsEl.textContent = years
  monthsEl.textContent = months
  daysEl.textContent = days
  resultSection.hidden = false
}

/* =========================================================
   FORM SUBMISSION HANDLER
   ========================================================= */
form.addEventListener('submit', (event) => {
  event.preventDefault()
  clearError()

  const rawValue = birthdateInput.value.trim()

  // 1. Required field check
  if (!rawValue) {
    showError('Please select your birthdate.')
    return
  }

  // 2. Parse with Luxon and check the date is actually valid
  const birthDate = DateTime.fromFormat(rawValue, 'yyyy-MM-dd')

  if (!birthDate.isValid) {
    showError('That date does not look valid. Please pick a date from the calendar.')
    return
  }

  // 3. Reject future dates
  const now = DateTime.now()
  if (birthDate > now) {
    showError('Your birthdate cannot be in the future.')
    return
  }

  // 4. All good — calculate and display the age
  const age = calculateAge(birthDate)
  displayAge(age)
})