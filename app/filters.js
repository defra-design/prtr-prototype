//
// For guidance on how to create filters see:
// https://prototype-kit.service.gov.uk/docs/filters
//

const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

// Add your filters here
addFilter('formatNumber', function(number) {
  if (!number) return ''
  
  // Convert string to a number if necessary
  const parsedNumber = Number(number)
  
  if (isNaN(parsedNumber)) return number

  // Formats to UK standard (e.g., 1000000 becomes 1,000,000)
  return parsedNumber.toLocaleString('en-GB')
})
