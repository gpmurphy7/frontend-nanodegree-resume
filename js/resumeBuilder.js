var bio = {
    "name" : "Graham Murphy, PhD",
    "role" : "Data Scientist",
    "contacts": {
        "mobile": "0830067704",
        "github": "https://github.com/gpmurphy7",
        "linkdedIn":"linkedin.com/in/grahampatrickmurphy",
        "email" : "gpmurphy.7@gmail.com",
        "location": "Dublin"
    },
    "WeclomeMSG": "Placeholder welcome message",
    "skills" : [
        "Physics", "Data Analysis", "Python", "SQL", "Hadoop", "Bash", "LaTeX", "Research", "Qlikview"
    ]
};

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

var education = {
    "schools": [
        {
            "name": "Trinity College Dublin",
            "location": "Dublin",
            "degree": "BA (mod)",
            "dates": ["Physics"],
            "gradYear": 2011
        },
        {
            "name": "Trinity College Dublin",
            "location": "Dublin",
            "degree": "PhD",
            "course": ["Physics"],
            "dates": 2016
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

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
}

function displayWork() {
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
displayWork()

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

//$('#mapDiv').append(googleMap);