var bio = {
	"name": "Jim Parr",
	"role": "Data Scientist",
	"contacts": {
		"mobile": "(+44) 07843123402",
		"email": "jimparr19@gmail.com",
		"github": "www.github.com/jimparr19",
		"location": "Dorking, UK"
	},
	"welcomeMessage": " ",
	"skills": [
		"Bayesian statistics", "Optimisation", "Python", "Matlab", "R"
	],
	"bioPic": "images/fry.jpg",

	//Dispay bio json object in resume page
	display: function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts").append(formattedMobile);
		$("#footerContacts").append(formattedMobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedEmail);
		$("#footerContacts").append(formattedEmail);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formattedGithub);
		$("#footerContacts").append(formattedGithub);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedLocation);
		$("#footerContacts").append(formattedLocation);
		var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWelcome);
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
		$("#header").append(formattedBioPic);
		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			for (var i = 0; i < bio.skills.length; i++) {
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
				$("#skills").append(formattedSkill);
			}
		}
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);

	}
}

//////////////////////////////////////////////////WORK/////////////////////////////////////////////////////////////////

var work = {
	"jobs": [{
		"employer": "McLaren Applied Technologies",
		"title": "Senior Data Scientist (Optimisation Squad Lead)",
		"location": "London, UK",
		"dates": "April 2017 - Present",
		"description": "Optimisation Squad Lead withing the Modelling and Decision Sciences group responsible for internal IP development."
	}, {
		"employer": "McLaren Applied Technologies",
		"title": "Data Scientist",
		"location": "Woking, UK",
		"dates": "April 2016 - April 2017",
		"description": "Data Scientist withing the Software and Analytics Team applying data science and machine learning."

	}, {
		"employer": "McLaren Applied Technologies",
		"title": "Statistical Modelling and Data Analyst",
		"location": "Woking, UK",
		"dates": "January 2014 - April 2016",
		"description": "Analytics team member focusinging on statistical modelling (machine learning) and optimisation."
	}, {
		"employer": "DSTL",
		"title": "Bayesian Statistician",
		"location": "Sailisbury, UK",
		"dates": "October 2012 - January 2014",
		"description": "Bayesian Statistician within the Physical Sciences group, specialising in chemical and biological hazard assesment, simulation and prediction."

	}],
	//Display work json object in resume object
	display: function() {
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formettedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formettedEmployerTitle);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
}


//////////////////////////////////////////////////PROJET/////////////////////////////////////////////////////////////////
var projects = {
	"projects": [{
		"title": "Platform Development - Biotelemetry",
		"dates": "April 2014 - July 2017",
		"description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
		"images": ['']

	},
	{
		"title": "Data Mining - Data Center Efficiency",
		"dates": "April 2014 - April 2015",
		"description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
		"images": ['']

	},
	{
		"title": "Web Application - Gearbox Efficiency Analysis",
		"dates": "January 2016 - December 2016",
		"description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
		"images": ['']

	},
	{
		"title": "Anomaly Detection - Bioserveilance",
		"dates": "October 2012 - January 2014",
		"description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
		"images": ['']

	},
	{
		"title": "Bayesian Inference - Source Term Estmation",
		"dates": "October 2012 - January 2014",
		"description": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
		"images": ['']

	}],

	//Display projects in resume page
	display: function() {
		for (project in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);
			if (projects.projects[project].images.length > 0) {
				for (image in projects.projects[project].images) {
					var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImages);
				}
			}
		}
	}
}

//////////////////////////////////////////////////EDUCATION/////////////////////////////////////////////////////////////////
var education = {
	"schools": [{
		"name": "Computational Engineering Design",
		"location": "Southampton, UK",
		"degree": "PhD",
		"majors": [""],
		"dates": "September 2009 - October 2012"
	},
	{
		"name": "Aerospace Engineering",
		"location": "Southampton, UK",
		"degree": "MEng",
		"majors": [""],
		"dates": "September 2005 - July 2009"
	}],

	//Display education in my resume page
	display: function() {
		for (edu in education.schools) {
			$('#education').append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%", education.schools[edu].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
			var formattedNameAndDegree = formattedName + formattedDegree;
			$(".education-entry:last").append(formattedNameAndDegree);
			var formattedDate = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
			$(".education-entry:last").append(formattedDate);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
			$(".education-entry:last").append(formattedLocation);
		}
	}
}

projects.display();
work.display();
education.display();
