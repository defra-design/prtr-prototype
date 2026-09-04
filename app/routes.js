//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Logging session data  
  
  router.use((req, res, next) => {    
      const log = {  
        method: req.method,  
        url: req.originalUrl,  
        data: req.session.data  
      }  
      console.log(JSON.stringify(log, null, 2))  
     
    next()  
  }) 

// Add your routes here

// PUBLIC search type redirect - initial design
router.post('/search-type', function(request, response) {

	var searchselection = request.session.data['searchFacility']
	if (searchselection == "location"){
		response.redirect("public/iteration-2/location-search.html")
	} else if (searchselection == "facility"){
		response.redirect("public/iteration-2/facility-search.html")
	} else if (searchselection == "region"){
		response.redirect("public/iteration-2/county-search.html")
	} else if (searchselection == "river"){
		response.redirect("public/iteration-2/river-basin-search.html")
	}
})

