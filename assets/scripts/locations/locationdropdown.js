const api = require('./api')
const locationsDropdownTemplate = require('../templates/location-dropdown.handlebars')

const getLocationDropdown = function () {
  api.locationIndex()
    .then(function (response) {
      console.log('response is', response)
      const locationsDropdownHtml = locationsDropdownTemplate({ locations: response.locations })
      $('.location-dropdown').html('')
      console.log(typeof locationsDropdownHtml)
      console.log(locationsDropdownHtml)
      $('.location-dropdown').html(locationsDropdownHtml)
    }
    )
}

module.exports = getLocationDropdown
