var bio = {
    "name" : "Graham Murphy, PhD",
    "role" : "Data Scientist",
    "contacts": {
        "github": "https://github.com/gpmurphy7/",
        "linkedIn":"https://www.linkedin.com/in/grahampatrickmurphy/",
    },
    "welcomeMSG": "Placeholder welcome message",
    "skills" : [
        "Physics", "Data Analysis", "Python", "SQL", "Hadoop", "Bash"//, "LaTeX", "Research", "Qlikview"
    ],
    "bioPic" : "images/fry.jpg"
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var formattedGitHub = addHyperLink(HTMLgithub,bio.contacts.github,"gpmurphy");
    $("#footerContacts").append(formattedGitHub);

    var formattedLinkedIn = addHyperLink(HTMLlinkedIn,bio.contacts.linkedin, "Graham Murphy, PhD");
    $("#footerContacts").append(formattedLinkedIn);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBioPic);

    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMSG);
    $("#header").append(formattedWelcomeMessage);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for (skill in bio.skills) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }
    }
}
bio.display();

var work = {
    "jobs":[
        {
            "employer": "AIB",
            "title": "Data Scientist",
            "location": "Dublin",
            "dates":"October 2016 - Current",
            "description":"Working on a wide ranging variety of projects, such as analytics (detailing Mortgage process efficiency) to data engineering and delivery (consolodating Call Center Data in Hadoop). "
        }
    ]
}

work.display = function() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
        
    }
}
work.display();

var education = {
    "schools": [
        {
            "name": "Trinity College Dublin",
            "location": "Dublin",
            "degree": "PhD",
            "course": ["Physics"],
            "dates": "2011-2016"
        },
        {
            "name": "Trinity College Dublin",
            "location": "Dublin",
            "degree": "BA (mod)",
            "course": ["Physics"],
            "dates": "2007-2011"
        }
    ],
    "onlineCourses": [
        {
        "title":"Javascript Basics",
        "school": "Udacity",
        "dates": "2017",
        "url":"https://www.udacity.com/course/javascript-basics--ud804"
        },
        {
        "title":"Machine Learning",
        "school": "Coursera",
        "dates": "2017",
        "url":"https://www.coursera.org/learn/machine-learning"
        }

    ]
};

education.display = function() {
    $("#education").append(HTMLschoolStart);

    for (school in education.schools) {
        var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);              

        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedNameDegree = formattedName+formattedDegree;
        $(".education-entry:last").append(formattedNameDegree);

        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedLocation);

        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);
        
        var formattedCourse = HTMLschoolCourse.replace("%data%", education.schools[school].course);
        $(".education-entry:last").append(formattedCourse);

    }
    $('#education').append(HTMLonlineClasses)

    for (onlineCourse in education.onlineCourses) {
        $('#education').append(HTMLschoolStart);    

        var onlineTitleLinkText = education.onlineCourses[onlineCourse].title +" "+ education.onlineCourses[onlineCourse].school

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
        $('.education-entry:last').append(formattedOnlineTitle);

        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school)

        var formattedonlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[onlineCourse].dates);
        $('.education-entry:last').append(formattedonlineDates);

        var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
        $('.education-entry:last').append(formattedonlineURL);

    }
}

education.display();

var projects = {
    "projects":[
        {
            "title":"Rugby Data Analysis",
            "dates": "2017",
            "description": "Analysis on Rugby Union Autumn Internationals",
            "images":["http://i.imgur.com/E5yc5wF.png", "http://i.imgur.com/kZYXc1n.png"],
            "url":""
        },
        {
            "title": "Ag colloids and arrays for plasmonic non-radiative energy transfer from quantum dots to a quantum well",
            "dates": "16 February 2017",
            "description" : "Ag nanoparticles in the form of colloids and ordered arrays are used to demonstrate plasmon-mediated non-radiative energy transfer from quantum dots to quantum wells with varying top barrier thicknesses. Plasmon-mediated energy transfer efficiencies of up to ~25% are observed with the Ag colloids. The distance dependence of the plasmon-mediated energy transfer is found to follow the same d-4 dependence as the direct quantum dot to quantum well energy transfer. There is also evidence for an increase in the characteristic distance of the interaction, thus indicating that it follows a Förster-like model with the Ag nanoparticle-quantum dot acting as an enhanced donor dipole. Ordered Ag nanoparticle arrays display plasmon-mediated energy transfer efficiencies up to ~21%. To explore the tunability of the array system, two arrays with different geometries are presented. It is demonstrated that changing the geometry of the array allows a transition from overall quenching of the acceptor quantum well emission to enhancement, as well as control of the competition between the quantum dot donor quenching and energy transfer rates.",
            "images":"",
            "url": "http://iopscience.iop.org/article/10.1088/1361-6528/aa5b67?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BorycaVsxQI%2BzLhLOCPHibQ%3D%3D"
        },
        {
            "title":"Temperature Dependent Luminescent Decay Properties of CdTe Quantum Dot Monolayers: Impact of Concentration on Carrier Trapping",
            "dates": "26 October 2016",
            "description": "We have investigated the temperature dependence of the photoluminescence spectra and average photoluminescence decay rate of CdTe quantum dot monolayers of different sizes as a function of concentration in the range 77 K to 296 K. It is shown that a simple three level analytic model involving bright and dark exciton states can only describe the lower temperature data but is unable to satisfactorily fit the data over the full temperature range. An extended model which includes external trap states is necessary to fit the data above approximately 150 K. Parameters for the model are obtained using both temporal and spectral data. The model indicates that the efficiency of interaction with trap states increases as the QD monolayer concentration increases, which is likely due to an increase in the density of available traps.",
            "images": "",
            "url": "http://pubs.acs.org/doi/abs/10.1021/acs.jpcc.6b04734?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BorycaVsxQI%2BzLhLOCPHibQ%3D%3D&"
        }
    ]
}

projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        if (projects.projects[project].url.length >0) {
            var formattedTitle = addHyperLink(HTMLprojectTitle, projects.projects[project].url, projects.projects[project].title);
            $(".project-entry:last").append(formattedTitle);

        } else {
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title)
            $(".project-entry:last").append(formattedTitle);
        }

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}
projects.display();

// function locationizer(work_obj) {
//     var loc_array = [];
//     for (var item in work_obj.jobs) {
//         loc_array.push(work_obj.jobs[item].location);
//     }
//     return loc_array;
// }

// function inName(name) {
//     name = name.trim().split(" ");
//     name[1] = name[1].toUpperCase();
//     name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

//     return name[0] +" "+ name[1];
// }
// $("#main").append(internationalizeButton);

// //function for formating hyperlinks

function addHyperLink(html,url,text){
    if (!text) { 
      text = url; 
    }
    
    var formattedURL = html.replace("#", url);
    formattedURL = formattedURL.replace("%data%",text);
    
    return formattedURL;
}

//$('#mapDiv').append(googleMap);