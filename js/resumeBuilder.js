var bio = {
	"name": "Jim Parr",
	"role": "Senior Data Scientist",
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
		"description": "Optimisation Squad Lead withing the Modelling and Decision Sciences group responsible for capability development in optimisation, parameter inference and uncertainty quantification."
	}, {
		"employer": "McLaren Applied Technologies",
		"title": "Data Scientist",
		"location": "Woking, UK",
		"dates": "April 2016 - April 2017",
		"description": "Data Scientist withing the Software and Analytics Team applying data science and machine learning across the health business unit and strategic partnerships."

	}, {
		"employer": "McLaren Applied Technologies",
		"title": "Statistical Modelling and Data Analyst",
		"location": "Woking, UK",
		"dates": "January 2014 - April 2016",
		"description": "Analytics team member focusing on statistical modelling (machine learning) and optimisation across  projects in health care, energy, consumer brands and strategic partnerships including KPMG and GSK."
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
		"title": "Exploratory study of biotelemetry in Amyotrophic Lateral Sclerosis (platform development)",
		"dates": "April 2014 - July 2017",
		"description": "Investigating new methods for objective measurement of clinical function and disease progression. Implementation and deployment of physical activity classification from body worn accelerometers and electrocardiogram.",
		"images": ['']
	},
	{
		"title": "Gearbox efficiency analysis tool (web application)",
		"dates": "January 2016 - December 2016",
		"description": "Proof of concept development for an international oil and gas company to support experimental testing of gearbox efficiency using different lubricants. Implementation of signal processing and statistical analysis workflow using python and django web framework. ",
		"images": ['']
	},
	{
		"title": "Decision support in oil and gas drilling applications",
		"dates": "January 2016 - April 2018",
		"description": "Development of decision support tools using historic data and real-time telemetry to support drilling engineers during adverse events.",
		"images": ['']
	},
	{
		"title": "Biosurveillance",
		"dates": "October 2012 - January 2014",
		"description": "Time series modelling and anomaly detection for disease outbreak detection based on multivariate hospital count data.",
		"images": ['']
	},
	{
		"title": "Data center energy efficiency prediction (data mining)",
		"dates": "April 2014 - April 2015",
		"description": "Data mining of energy and utilisation data leading to the identification of inefficiencies in humidifier and air conditioning control regimes. Development of predictive models for customer consumption using unsupervised and supervised learning methods.",
		"images": ['']
	},
	{
		"title": "Source Term Estimation",
		"dates": "October 2012 - January 2014",
		"description": "Real-time Bayesian inference and uncertainty quantification using sequential Monte-Carlo methods with applications in hazard assesment and decision making during disease outbreaks.",
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
