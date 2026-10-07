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

// Waste type haz/nonhaz in waste transfer journey
router.post('/waste-type', function(request, response) {

	var dataWasteType = request.session.data['wasteType']
	if (dataWasteType == "hazardous"){
		response.redirect("data-entry/iteration-1/waste/movement.html")
	} else if (dataWasteType == "nonhazardous"){
		response.redirect("data-entry/iteration-1/waste/treatment.html")
	}
})

// Hazardous within or outside UK in waste transfer journey
router.post('/waste-movement', function(request, response) {

	var dataWasteMove = request.session.data['wasteMovement']
	if (dataWasteMove == "inUK"){
		response.redirect("data-entry/iteration-1/waste/treatment.html")
	} else if (dataWasteMove == "overseas"){
		response.redirect("data-entry/iteration-1/waste/transport-company-confirm.html")
	}
})

// Confirm transport company (1 option) in overseas hazardous waste transfer journey
router.post('/confirm-transport-company', function(request, response) {

	var confirmTransport = request.session.data['confimTransportCompany']
	if (confirmTransport == "confirm"){
		response.redirect("data-entry/iteration-1/waste/overseas-site-confirm.html")
	} else if (confirmTransport == "no"){
		response.redirect("data-entry/iteration-1/waste/transport-company-enter.html")
	}
})

// Confirm dump site (linked to transport selected) in overseas hazardous waste transfer journey
router.post('/confirm-dump-site', function(request, response) {

	var confirmDumpSite = request.session.data['confimSite']
	if (confirmDumpSite == "confirm"){
		response.redirect("data-entry/iteration-1/waste/treatment.html")
	} else if (confirmDumpSite == "no"){
		response.redirect("data-entry/iteration-1/waste/overseas-site-enter.html")
	}
})

// Select treatment in waste transfer journey
router.post('/treatment-redirect', function(request, response) {

	var treatmentWaste = request.session.data['wasteTreatment']
	if (treatmentWaste == "disposal"){
		response.redirect("data-entry/iteration-1/waste/amount-disposal.html")
	} else if (treatmentWaste == "recovery"){
		response.redirect("data-entry/iteration-1/waste/amount-recovery.html")
	}
})

// Data method in waste transfer journey
router.post('/select-method-waste', function(request, response) {

	var dataWasteTransfer = request.session.data['wasteData']
	if (dataWasteTransfer == "measurement"){
		response.redirect("data-entry/iteration-1/waste/select-method-measurement.html")
	} else if (dataWasteTransfer == "calculation"){
		response.redirect("data-entry/iteration-1/waste/select-method-calculation.html")
	} else if (dataWasteTransfer == "estimated"){
		response.redirect("data-entry/iteration-1/waste/check-answers.html")
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

