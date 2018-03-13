const api = require('./api')
const locationsDropdownTemplate = require('../templates/location-dropdown.handlebars')

const getLocationDropdown = function () {
  api.locationIndex()
    .then(function (response) {
      const locationsDropdownHtml = locationsDropdownTemplate({ locations: response.locations })
      $('.location-dropdown').html('')
      $('.location-dropdown').html(locationsDropdownHtml)
    }
    )
}

module.exports = getLocationDropdown
