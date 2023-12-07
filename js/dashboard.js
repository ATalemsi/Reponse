const projectsBtn = document.getElementById("ProjectsBtn");
const projectsBtn2 = document.getElementById("ProjectsBtn2");
const projectsTable = document.getElementById("ProjectsTable");

const teamsBtn = document.getElementById("TeamsBtn");
const teamsBtn2 = document.getElementById("TeamsBtn2");
const teamsTable = document.getElementById("TeamsTable");

const membersBtn = document.getElementById("MembersBtn");
const membersTable = document.getElementById("MembersTable");

const questionsBtn = document.getElementById("QuestionsBtn");
const questionsTable = document.getElementById("QuestionsTable");
const questionDiv = document.querySelectorAll(".questionDiv");

const sectionTable = document.getElementById("SectionTable");

function toggleProjects() {
    projectsBtn.className = "flex items-center active-nav-link text-white py-4 pl-6 nav-item cursor-pointer";
    teamsBtn.className = "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item cursor-pointer";
    projectsBtn2.className = "flex items-center active-nav-link text-white py-4 pl-6 nav-item cursor-pointer";
    teamsBtn2.className = "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item cursor-pointer";
    membersBtn.className = "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item cursor-pointer";
    questionsBtn.className = "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item cursor-pointer";
    questionsTable.classList.add("hidden");
    membersTable.classList.add("hidden");
    projectsTable.classList.remove("hidden");
    teamsTable.classList.add("hidden");
    sectionTable.classList.add("hidden");
}

function toggleTeams() {
    teamsBtn.className = "flex items-center active-nav-link text-white py-4 pl-6 nav-item cursor-pointer";
    teamsBtn2.className = "flex items-center active-nav-link text-white py-4 pl-6 nav-item cursor-pointer";
    projectsBtn.className = "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item cursor-pointer";
    projectsBtn2.className = "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item cursor-pointer";

    membersBtn.className = "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item cursor-pointer";
    questionsBtn.className = "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item cursor-pointer";
    questionsTable.classList.add("hidden");
    membersTable.classList.add("hidden");
    projectsTable.classList.add("hidden");
    teamsTable.classList.remove("hidden");
    sectionTable.classList.add("hidden");
}

function toggleMembers() {
    projectsBtn.className = "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item cursor-pointer";
    projectsBtn2.className = "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item cursor-pointer";

    teamsBtn.className = "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item cursor-pointer";
    teamsBtn2.className = "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item cursor-pointer";

    membersBtn.className = "flex items-center active-nav-link text-white py-4 pl-6 nav-item cursor-pointer";

    questionsBtn.className = "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item cursor-pointer";
    questionsTable.classList.add("hidden");
    projectsTable.classList.add("hidden");
    teamsTable.classList.add("hidden");
    membersTable.classList.remove("hidden");
    sectionTable.classList.add("hidden");
}

function toggleQuestions() {
    projectsBtn.className = "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item cursor-pointer";
    projectsBtn2.className = "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item cursor-pointer";

    teamsBtn.className = "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item cursor-pointer";
    teamsBtn2.className = "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item cursor-pointer";

    membersBtn.className = "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item cursor-pointer";
    questionsBtn.className = "flex items-center active-nav-link text-white py-4 pl-6 nav-item cursor-pointer";

    projectsTable.classList.add("hidden");
    teamsTable.classList.add("hidden");
    membersTable.classList.add("hidden");
    questionsTable.classList.remove("hidden");
    sectionTable.classList.add("hidden");
}

projectsBtn.addEventListener("click", toggleProjects);
teamsBtn.addEventListener("click", toggleTeams);
projectsBtn2.addEventListener("click", toggleProjects);
teamsBtn2.addEventListener("click", toggleTeams);
membersBtn.addEventListener("click", toggleMembers);
questionsBtn.addEventListener("click", toggleQuestions);

questionDiv.forEach((element) => {
    element.addEventListener("click", () => {
        projectsTable.classList.add("hidden");
        teamsTable.classList.add("hidden");
        membersTable.classList.add("hidden");
        questionsTable.classList.add("hidden");
        sectionTable.classList.remove("hidden");

        projectsBtn.className = "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item cursor-pointer";
        projectsBtn2.className = "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item cursor-pointer";
    
        teamsBtn.className = "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item cursor-pointer";
        teamsBtn2.className = "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item cursor-pointer";
    
        membersBtn.className = "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item cursor-pointer";
        questionsBtn.className = "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item cursor-pointer";
    });
});