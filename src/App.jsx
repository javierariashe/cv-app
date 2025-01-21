import "./App.css";
import { useState } from "react";
import PersonalForm from "./components/Personal";
import EducationForm from "./components/Education";
import ExperienceForm from "./components/Experience";
import Preview from "./components/Preview";

function App() {
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
        startDate: { label: "Starting Date", value: "", type: "date" },
        endDate: { label: "End Date", value: "", type: "date" },
        courses: { label: "Relevant Courses", value: "", type: "text" },
    };

    const experienceTemplate = {
        position: { label: "Position", value: "", type: "text" },
        company: { label: "Company", value: "", type: "text" },
        description: { label: "Description", value: "", type: "textarea" },
        startDate: { label: "Starting Date", value: "", type: "date" },
        endDate: { label: "End Date", value: "", type: "date" },
        location: { label: "Location", value: "", type: "text" },
        id: null,
    };

    const [count, setCount] = useState(1);
    const experienceInit = [{ ...experienceTemplate, id: 0 }];

    const [experience, setExperience] = useState(experienceInit);
    const [education, setEducation] = useState(educationInit);
    const [personal, setPersonal] = useState(personalInit);

    const handlePersonalChange = (e) => {
        const { name, value } = e.target;
        setPersonal({
            ...personal,
            [name]: { ...personal[name], value },
        });
    };

    const handleExperienceChange = (e, exp_id) => {
        const { name, value } = e.target;
        setExperience([
            ...experience.map((exp) => {
                if (exp.id === exp_id) {
                    return { ...exp, [name]: { ...exp[name], value } };
                }
                return exp;
            }),
        ]);
    };

    const handleNewExperience = () => {
        const newExperience = { ...experienceTemplate, id: count };
        setExperience([...experience, newExperience]);
        setCount(count + 1);
    };

    const handleDeleteExperience = (id) => {
        setExperience(experience.filter((exp) => exp.id !== id));
    };

    const handleEducationChange = (e) => {
        const { name, value } = e.target;
        setEducation({
            ...education,
            [name]: { ...education[name], value },
        });
    };

    return (
        <>
            <div className="forms">
                <PersonalForm
                    personal={personal}
                    handleChange={handlePersonalChange}
                />
                <EducationForm
                    education={education}
                    handleChange={handleEducationChange}
                />
                <div className="forms-header">Experience</div>
                <button onClick={handleNewExperience}>Add New</button>
                {experience.map((exp) => {
                    return (
                        <ExperienceForm
                            experience={exp}
                            handleChange={handleExperienceChange}
                            handleDelete={handleDeleteExperience}
                            exp_id={exp.id}
                            key={exp.id}
                        />
                    );
                })}
            </div>
            <div className="preview">
                <Preview
                    personal={personal}
                    education={education}
                    experience={experience}
                />
            </div>
        </>
    );
}

export default App;
