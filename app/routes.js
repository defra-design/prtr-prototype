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

// DATA ENTRY
// Are you responsible for this facility?
router.post('/facilityConfirm', function(request, response) {

	var confirmYourFacility = request.session.data['confirmReporting']
	if (confirmYourFacility == "yes"){
		response.redirect("data-entry/iteration-1/zero-return.html")
	} else if (confirmYourFacility == "no"){
		response.redirect("data-entry/iteration-1/not-responsible.html")
	}
})

// Zero return?
router.post('/zeroConfirm', function(request, response) {

	var confirmZero = request.session.data['zeroReturn']
	if (confirmZero == "yes"){
		response.redirect("data-entry/iteration-1/facilities.html?CSSY=zero")
	} else if (confirmZero == "no"){
		response.redirect("data-entry/iteration-1/report.html")
	}
})

// Below threshold redirect in pollutant releases journey
router.post('/below-threshold', function(request, response) {

	var belowCorrect = request.session.data['belowThreshold']
	if (belowCorrect == "correct"){
		response.redirect("data-entry/iteration-1/releases/amount-lower.html")
	} else if (belowCorrect == "incorrect"){
		response.redirect("data-entry/iteration-1/releases/amount.html")
	}
})

// Significantly lower redirect in pollutant releases journey
router.post('/lower-amount', function(request, response) {

	var lower = request.session.data['lowerAmount']
	if (lower == "correct"){
		response.redirect("data-entry/iteration-1/releases/accidental.html")
	} else if (lower == "incorrect"){
		response.redirect("data-entry/iteration-1/releases/amount.html")
	}
})

// Data method in pollutant releases journey
router.post('/select-method-release', function(request, response) {

	var dataRelease = request.session.data['pollutantData']
	if (dataRelease == "measurement"){
		response.redirect("data-entry/iteration-1/releases/select-method-measurement.html")
	} else if (dataRelease == "calculation"){
		response.redirect("data-entry/iteration-1/releases/select-method-calculation.html")
	} else if (dataRelease == "estimated"){
		response.redirect("data-entry/iteration-1/releases/check-answers.html")
	}
})

// Significantly higher redirect in pollutant transfers journey
router.post('/higher-amount', function(request, response) {

	var higher = request.session.data['higherAmount']
	if (higher == "correct"){
		response.redirect("data-entry/iteration-1/transfers/accidental.html")
	} else if (higher == "incorrect"){
		response.redirect("data-entry/iteration-1/transfers/amount.html")
	}
})

// Data method in pollutant transfers journey
router.post('/select-method-transfer', function(request, response) {

	var dataTransfer = request.session.data['pollutantTransferData']
	if (dataTransfer == "measurement"){
		response.redirect("data-entry/iteration-1/transfers/select-method-measurement.html")
	} else if (dataTransfer == "calculation"){
		response.redirect("data-entry/iteration-1/transfers/select-method-calculation.html")
	} else if (dataTransfer == "estimated"){
		response.redirect("data-entry/iteration-1/transfers/check-answers.html")
	}
})


// PUBLIC WEBSITE
// Search type redirect - initial design
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

