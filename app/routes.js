//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// Search type redirect - initial design
router.post('/search-type', function(request, response) {

	var searchselection = request.session.data['searchFacility']
	if (searchselection == "location"){
		response.redirect("public/location-search.html")
	} else if (searchselection == "facility"){
		response.redirect("public/facility-search.html")
	} else if (searchselection == "region"){
		response.redirect("public/region-search.html")
	} else if (searchselection == "river"){
		response.redirect("public/river-basin-search.html")
	}
})
