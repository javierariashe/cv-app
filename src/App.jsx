import "./App.css";
import { useState } from "react";
import { PersonalForm } from "./components/Personal";
import { EducationForm } from "./components/Education";
import { ExperienceForm } from "./components/Experience";
import { ProjectForm } from "./components/Projects";
import Preview from "./components/Preview";
import {
    personalInit,
    educationInit,
    experienceTemplate,
    experiencesInit,
    projectsInit,
    projectTemplate,
} from "./js/init";

function App() {
    //State initialization
    const [experienceCount, setExperienceCount] = useState(1);
    const [projectCount, setProjectCount] = useState(1);
    const [personal, setPersonal] = useState(personalInit);
    const [education, setEducation] = useState(educationInit);
    const [experiences, setExperiences] = useState(experiencesInit);
    const [projects, setProjects] = useState(projectsInit);

    //Handlers
    const handlePersonalChange = (e) => {
        const { name, value } = e.target;
        setPersonal({
            ...personal,
            [name]: { ...personal[name], value },
        });
    };

    const handleEducationChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setEducation({
                ...education,
                [name]: { ...education[name], present: checked },
            });
        } else {
            setEducation({
                ...education,
                [name]: { ...education[name], value },
            });
        }
    };

    const handleExperienceChange = (e, exp_id) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setExperiences([
                ...experiences.map((exp) => {
                    if (exp.id === exp_id) {
                        return {
                            ...exp,
                            [name]: { ...exp[name], present: checked },
                        };
                    }
                    return exp;
                }),
            ]);
        } else {
            setExperiences([
                ...experiences.map((exp) => {
                    if (exp.id === exp_id) {
                        return { ...exp, [name]: { ...exp[name], value } };
                    }
                    return exp;
                }),
            ]);
        }
    };

    const handleNewExperience = () => {
        const newExperience = { ...experienceTemplate, id: experienceCount };
        setExperiences([...experiences, newExperience]);
        setExperienceCount(experienceCount + 1);
    };

    const handleDeleteExperience = (id) => {
        setExperiences(experiences.filter((exp) => exp.id !== id));
    };

    const handleProjectChange = (e, project_id) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setProjects([
                ...projects.map((project) => {
                    if (project.id === project_id) {
                        return {
                            ...project,
                            [name]: { ...project[name], present: checked },
                        };
                    }
                    return project;
                }),
            ]);
        } else {
            setProjects([
                ...projects.map((project) => {
                    if (project.id === project_id) {
                        return {
                            ...project,
                            [name]: { ...project[name], value },
                        };
                    }
                    return project;
                }),
            ]);
        }
    };

    function handleNewProject() {
        const newProject = { ...projectTemplate, id: projectCount };
        setProjects([...projects, newProject]);
        setProjectCount(projectCount + 1);
    }

    const handleDeleteProject = (id) => {
        setProjects(projects.filter((project) => project.id !== id));
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
                <div>
                    <div className="forms-header">Experience</div>
                    <button onClick={handleNewExperience}>Add New</button>
                    {experiences.map((experience) => {
                        return (
                            <ExperienceForm
                                experience={experience}
                                handleChange={handleExperienceChange}
                                handleDelete={handleDeleteExperience}
                                exp_id={experience.id}
                                key={experience.id}
                            />
                        );
                    })}
                </div>
                <div>
                    <div className="forms-header">Projects</div>
                    <button onClick={handleNewProject}>Add New</button>
                    {projects.map((project) => {
                        return (
                            <ProjectForm
                                project={project}
                                handleChange={handleProjectChange}
                                handleDelete={handleDeleteProject}
                                project_id={project.id}
                                key={project.id}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="preview">
                <Preview
                    personal={personal}
                    education={education}
                    experience={experiences}
                    projects={projects}
                />
            </div>
        </>
    );
}

export default App;
