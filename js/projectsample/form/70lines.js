let currentBox = 1;

// Initialize data structures
var personal_details = ["", "", "", "", "", ""];
var education_details = [
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""]
];
var profiles = ["", "", "", "", "", ""];
var projects = [
    ["", "", "", "", ""],
    ["", "", "", "", ""]
];
var internships = [
    ["", "", "", "", ""],
    ["", "", "", "", ""]
];
var achievements = [
    ["", "", ""],
    ["", "", "", ""],
    [""]
];

// Get form elements
var personal_details_name = document.getElementById('personal_details_name');
var personal_details_phonenumber = document.getElementById('personal_details_phonenumber');
var personal_details_Email = document.getElementById('personal_details_Email');
var personal_details_country = document.getElementById('personal_details_country');
var personal_details_city = document.getElementById('personal_details_city');
var personal_details_pincode = document.getElementById('personal_details_pincode');

var collage_name1 = document.getElementById('collage_name1');
var collage_location1 = document.getElementById('collage_location1');
var collage_GPA1 = document.getElementById('collage_GPA1');
var collage_branch1 = document.getElementById('collage_branch1');
var collage_start1 = document.getElementById('collage_start1');
var collage_end1 = document.getElementById('collage_end1');

var collage_name2 = document.getElementById('collage_name2');
var collage_location2 = document.getElementById('collage_location2');
var collage_GPA2 = document.getElementById('collage_GPA2');
var collage_branch2 = document.getElementById('collage_branch2');
var collage_start2 = document.getElementById('collage_start2');
var collage_end2 = document.getElementById('collage_end2');

var collage_name3 = document.getElementById('school_name');
var collage_location3 = document.getElementById('school_location3');
var collage_GPA3 = document.getElementById('school_GPA2');
var collage_branch3 = document.getElementById('school_board2');
var collage_start3 = document.getElementById('school_start2');
var collage_end3 = document.getElementById('school_end2');

var profileGithub = document.getElementById('profile_github');
var profileLinkedIn = document.getElementById('profile_linkedin');
var profileHackerRank = document.getElementById('profile_hacker_rank');
var profileCodeChef = document.getElementById('profile_code_chef');
var profileLeetCode = document.getElementById('profile_leet_code');
var profileGFG = document.getElementById('profile_geeks_for_geeks');

var projectName1 = document.getElementById('project_name1');
var projectStart1 = document.getElementById('project_start1');
var projectEnd1 = document.getElementById('project_end1');
var projectRole1 = document.getElementById('project_role1');
var projectDescription1 = document.getElementById('project_description1');

var projectName2 = document.getElementById('project_name2');
var projectStart2 = document.getElementById('project_start2');
var projectEnd2 = document.getElementById('project_end2');
var projectRole2 = document.getElementById('project_role2');
var projectDescription2 = document.getElementById('project_description2');

var achievement_badge1 = document.getElementById('achievement_badge1');
var achievement_badge2 = document.getElementById('achievement_badge2');
var achievement_badge3 = document.getElementById('achievement_badge3');

var achievement_coding_profile1 = document.getElementById('achievement_coding_profile1');
var achievement_coding_profile2 = document.getElementById('achievement_coding_profile2');
var achievement_coding_profile3 = document.getElementById('achievement_coding_profile3');
var achievement_coding_profile4 = document.getElementById('achievement_coding_profile4');

var achievement_hackathon = document.getElementById('achievement_hackathon');

var internship_name1 = document.getElementById('internship_name1');
var internship_start1 = document.getElementById('internship_start1');
var internship_end1 = document.getElementById('internship_end1');
var internship_role1 = document.getElementById('internship_role1');
var internship_description1 = document.getElementById('internship_description1');

var internship_name2 = document.getElementById('internship_name2');
var internship_start2 = document.getElementById('internship_start2');
var internship_end2 = document.getElementById('internship_end2');
var internship_role2 = document.getElementById('internship_role2');
var internship_description2 = document.getElementById('internship_description2');

function showBox(number) {
    currentBox = number;
    console.log(currentBox);
    const boxes = document.querySelectorAll('.box1, .box2, .box3, .box4, .box5');
    boxes.forEach(box => box.style.display = 'none');
    document.getElementById('box1-' + number).style.display = 'flex';
    updateProgressBar();
    personal_details[0] = personal_details_name.value;
    personal_details[1] = personal_details_Email.value;
    personal_details[2] = personal_details_phonenumber.value;
    personal_details[3] = personal_details_country.value;
    personal_details[4] = personal_details_city.value;
    personal_details[5] = personal_details_pincode.value;
    // console.log(personal_details);

    localStorage.setItem("personal_details", JSON.stringify(personal_details));

    education_details[0][0] = collage_name1.value;
    education_details[0][1] = collage_location1.value;
    education_details[0][2] = collage_GPA1.value;
    education_details[0][3] = collage_branch1.value;
    education_details[0][4] = collage_start1.value;
    education_details[0][5] = collage_end1.value;

    education_details[1][0] = collage_name2.value;
    education_details[1][1] = collage_location2.value;
    education_details[1][2] = collage_GPA2.value;
    education_details[1][3] = collage_branch2.value;
    education_details[1][4] = collage_start2.value;
    education_details[1][5] = collage_end2.value;

    education_details[2][0] = collage_name3.value;
    education_details[2][1] = collage_location3.value;
    education_details[2][2] = collage_GPA3.value;
    education_details[2][3] = collage_branch3.value;
    education_details[2][4] = collage_start3.value;
    education_details[2][5] = collage_end3.value;

    localStorage.setItem("education_details",JSON.stringify(education_details));

    profiles[0] = profileLinkedIn.value;
    profiles[1] = profileGithub.value;
    profiles[2] = profileHackerRank.value;
    profiles[3] = profileCodeChef.value;
    profiles[4] = profileLeetCode.value;
    profiles[5] = profileGFG.value;

    // localStorage.setItem("profiles",JSON.stringify(profiles));

    projects[0][0] = projectName1.value;
    projects[0][1] = projectStart1.value;
    projects[0][2] = projectEnd1.value;
    projects[0][3] = projectRole1.value;
    projects[0][4] = projectDescription1.value;

    projects[1][0] = projectName2.value;
    projects[1][1] = projectStart2.value;
    projects[1][2] = projectEnd2.value;
    projects[1][3] = projectRole2.value;
    projects[1][4] = projectDescription2.value;

    
    // localStorage.setItem("projects",JSON.stringify(projects));

    achievements[0][0] = achievement_badge1.value;
    achievements[0][1] = achievement_badge2.value;
    achievements[0][2] = achievement_badge3.value;

    achievements[1][0] = achievement_coding_profile1.value;
    achievements[1][1] = achievement_coding_profile2.value;
    achievements[1][2] = achievement_coding_profile3.value;
    achievements[1][3] = achievement_coding_profile4.value;

    achievements[2][0] = achievement_hackathon.value;

    // localStorage.setItem("achievements",JSON.stringify(achievements));

    internships[0][0] = internship_name1.value;
    internships[0][1] = internship_start1.value;
    internships[0][2] = internship_end1.value;
    internships[0][3] = internship_role1.value;
    internships[0][4] = internship_description1.value;
    
    internships[1][0] = internship_name2.value;
    internships[1][1] = internship_start2.value;
    internships[1][2] = internship_end2.value;
    internships[1][3] = internship_role2.value;
    internships[1][4] = internship_description2.value;
    // localStorage.setItem("internships",JSON.stringify(internships));
}

function nextBox() {
    if (currentBox < 5) {
        showBox(currentBox + 1);
    }
}

function prevBox() {
    if (currentBox > 1) {
        showBox(currentBox - 1);
    }
}

function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const width = window.innerWidth;

    if (width > 500) {
        let height = 0;
        if (currentBox === 2) {
            height = 25;
        } else if (currentBox === 3) {
            height = 50;
        } else if (currentBox === 4) {
            height = 75;
        } else if (currentBox === 5) {
            height = 100;
        }
        progressBar.style.transform = `scaleY(${height / 100})`;
    }
}

function chooseTemplate() {
    localStorage.setItem("personal_details", JSON.stringify(personal_details));
    localStorage.setItem("education_details",JSON.stringify(education_details));
    localStorage.setItem("projects",JSON.stringify(projects));
    localStorage.setItem("profiles",JSON.stringify(profiles));
    localStorage.setItem("achievements",JSON.stringify(achievements));
    localStorage.setItem("internships",JSON.stringify(internships));
    window.location.href = "../chooseTemplate/Templates.html";
}

// Initial display of the first box
showBox(1);
