var bio = {
    "name" : "Graham Murphy, PhD",
    "role" : "Data Scientist",
    "contacts": {
        "mobile": "0830067704",
        "github": "https://github.com/gpmurphy7/",
        "linkedIn":"https://www.linkedin.com/in/grahampatrickmurphy/",
        "email" : "gpmurphy.7@gmail.com",
        "location": "Dublin"
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

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    $("#footerContacts").append(formattedEmail);

    var formattedGitHub = addHyperLink(HTMLgithub,bio.contacts.github,"gpmurphy");
    $("#topContacts").append(formattedGitHub);
    $("#footerContacts").append(formattedGitHub);

    var formattedLinkedIn = addHyperLink(HTMLlinkedIn,bio.contacts.linkedin, "Graham Murphy, PhD");
    $("#topContacts").append(formattedLinkedIn);
    $("#footerContacts").append(formattedLinkedIn);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedLocation);

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
}

education.display();

var projects = {
    "projects":[
        {
            "title":"Rugby Data Analysis",
            "dates": "2017",
            "description": "Analysis on Rugby Union Autumn Internationals",
            "images":["http://i.imgur.com/E5yc5wF.png", "http://i.imgur.com/kZYXc1n.png"]
        }
    ]
}

projects.display = function() {
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
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}
projects.display();

// if (bio.skills.length > 0) {
//     $("#header").append(HTMLskillsStart);
//     var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
//     $("#skills").append(formattedSkill);
//     formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
//     $("#skills").append(formattedSkill);
//     formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
//     $("#skills").append(formattedSkill);
//     formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
//     $("#skills").append(formattedSkill);
// }

// function displayWork() {
// for (job in work.jobs) {
//     $("#workExperience").append(HTMLworkStart);
//     var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
//     var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
//     var formattedEmployerTitle = formattedEmployer + formattedTitle;
//     $(".work-entry:last").append(formattedEmployerTitle);

//     var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
//     $(".work-entry:last").append(formattedDates);
    
//     var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
//     $(".work-entry:last").append(formattedDescription);
//     }
// }
// displayWork()

function locationizer(work_obj) {
    var loc_array = [];
    for (var item in work_obj.jobs) {
        loc_array.push(work_obj.jobs[item].location);
    }
    return loc_array;
}

function inName(name) {
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] +" "+ name[1];
}
$("#main").append(internationalizeButton);

//function for formating hyperlinks

function addHyperLink(html,url,text){
    if (!text) { 
      text = url; 
    }
    
    var formattedURL = html.replace("#", url);
    formattedURL = formattedURL.replace("%data%",text);
    
    return formattedURL;
}

//$('#mapDiv').append(googleMap);