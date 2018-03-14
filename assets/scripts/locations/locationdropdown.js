const api = require('./api')
const locationsDropdownTemplate = require('../templates/location-dropdown.handlebars')
const compare = require('../customsorter.js')

const getLocationDropdown = function (id) {
  api.locationIndex()
    .then(function (response) {
      response.locations.sort(compare)
      const locationsDropdownHtml = locationsDropdownTemplate({ locations: response.locations })
      $('.location-dropdown').html(locationsDropdownHtml)
    }
    ).then(() => {
      if (id) {
        $('#locationdropdown').val(id)
      }
    }
    ).then(() => { $('#newcontent').show() })
}

module.exports = getLocationDropdown
