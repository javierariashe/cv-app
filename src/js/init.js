const personalInit = {
    name: { label: "Full Name", value: "", type: "text" },
    email: { label: "Email", value: "", type: "email" },
    phoneNumber: { label: "Phone Number", value: "", type: "tel" },
    github: { label: "Github", value: "", type: "url" },
    linkedin: { label: "Linkedin", value: "", type: "url" },
};

const educationInit = {
    school: { label: "School Name", value: "", type: "text" },
    degree: { label: "Degree", value: "", type: "text" },
    location: { label: "Location", value: "", type: "text" },
    startDate: {
        label: "Starting Date",
        value: "",
        type: "date",
    },
    endDate: { label: "End Date", value: "", type: "date", present: false },
    courses: { label: "Relevant Courses", value: "", type: "text" },
};

const experienceTemplate = {
    position: { label: "Position", value: "", type: "text" },
    company: { label: "Company", value: "", type: "text" },
    description: { label: "Description", value: "", type: "textarea" },
    startDate: {
        label: "Starting Date",
        value: "",
        type: "date",
    },
    endDate: { label: "End Date", value: "", type: "date", present: false },
    location: { label: "Location", value: "", type: "text" },
    id: null,
};

const projectTemplate = {
    name: { label: "Name", value: "", type: "text" },
    tech: { label: "Technologies", value: "", type: "text" },
    description: { label: "Description", value: "", type: "textarea" },
    startDate: {
        label: "Starting Date",
        value: "",
        type: "date",
    },
    endDate: { label: "End Date", value: "", type: "date", present: false },
    id: null,
};

const skillsInit = {
    programmingLanguages: {
        label: "Programming Languages",
        value: "",
        type: "text",
    },
    devTools: { label: "Development Tools", value: "", type: "text" },
    languages: { label: "Languages", value: "", type: "text" },
};

const achievementTemplate = {
    name: { label: "Name", value: "", type: "text" },
    description: { label: "Description", value: "", type: "textarea" },
    date: {
        label: "Date",
        value: "",
        type: "date",
    },
};

personalInit.name.value = "Javier Arias Hernández";
personalInit.email.value = "javierariashe@gmail.com";
personalInit.phoneNumber.value = "+52 56 1719 4798";
personalInit.github.value = "https://github.com/jakergp";
personalInit.linkedin.value =
    "https://www.linkedin.com/in/javier-arias-hern%C3%A1ndez-233335315/";

educationInit.school.value = "Universidad Nacional Autónoma de México";
educationInit.degree.value = "Computer Engineering";
educationInit.location.value = "Mexico City, Mexico";
educationInit.startDate.value = "2022-09-01";
educationInit.endDate.value = "2027-09-01";
educationInit.courses.value =
    "Data Structures and Algorithms, Software Engineering, OOP, Automata Theory and Formal Languages";

experienceTemplate.position.value = "Member at CPCFI";
experienceTemplate.company.value =
    "School of Engineering's Competitive Programming Club (FI UNAM)";
experienceTemplate.description.value = `Developed skills in competitive programming, data structures and algorithms in order to partcipate in different contests.
    Participated on the ICPC Mexico Grand Prix 2024 National Round and IEEEXtreme 18.0.`;
experienceTemplate.startDate.value = "2024-01-01";
experienceTemplate.endDate.value = "";
experienceTemplate.location.value = "Mexico City, Mexico";

const experiencesInit = [{ ...experienceTemplate, id: 0 }];
const projectsInit = [{ ...projectTemplate, id: 0 }];
const achievementsInit = [{ ...achievementTemplate, id: 0 }];

export {
    personalInit,
    educationInit,
    experiencesInit,
    experienceTemplate,
    projectsInit,
    projectTemplate,
    skillsInit,
    achievementsInit,
    achievementTemplate,
};
