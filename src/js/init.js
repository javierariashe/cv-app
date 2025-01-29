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
