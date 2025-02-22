import "./App.css";
import { useState } from "react";
import { PersonalForm } from "./components/Personal";
import { EducationForm } from "./components/Education";
import { ExperienceForm } from "./components/Experience";
import { ProjectForm } from "./components/Projects";
import { SkillsForm } from "./components/Skills";
import { AchievementForm } from "./components/Achievements";
import Preview from "./components/Preview";
import Sidebar from "../Sidebar";
import {
    personalInit,
    educationInit,
    experienceTemplate,
    experiencesInit,
    projectsInit,
    projectTemplate,
    skillsInit,
    achievementsInit,
    achievementTemplate,
} from "./js/init";

function App() {
    //State initialization
    const [experienceCount, setExperienceCount] = useState(1);
    const [projectCount, setProjectCount] = useState(1);
    const [achievementCount, setAchievementCount] = useState(1);

    const [personal, setPersonal] = useState(personalInit);
    const [education, setEducation] = useState(educationInit);
    const [experiences, setExperiences] = useState(experiencesInit);
    const [projects, setProjects] = useState(projectsInit);
    const [skills, setSkills] = useState(skillsInit);
    const [achievements, setAchievements] = useState(achievementsInit);

    const [section, setSection] = useState(0);


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

    const handleSkillsChange = (e) => {
        const { name, value } = e.target;
        setSkills({
            ...skills,
            [name]: { ...skills[name], value },
        });
    };

    const handleAchievementsChange = (e, achievement_id) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setAchievements([
                ...achievements.map((achievement) => {
                    if (achievement.id === achievement_id) {
                        return {
                            ...achievement,
                            [name]: { ...achievement[name], present: checked },
                        };
                    }
                    return achievement;
                }),
            ]);
        } else {
            setAchievements([
                ...achievements.map((achievement) => {
                    if (achievement.id === achievement_id) {
                        return {
                            ...achievement,
                            [name]: { ...achievement[name], value },
                        };
                    }
                    return achievement;
                }),
            ]);
        }
    };

    function handleNewAchievement() {
        const newAchievement = {
            ...achievementTemplate,
            id: achievementCount,
        };
        setAchievements([...achievements, newAchievement]);
        setAchievementCount(achievementCount + 1);
    }

    const handleDeleteAchievement = (id) => {
        setAchievements(
            achievements.filter((achievement) => achievement.id !== id),
        );
    };

    const handleSectionChange = (sectionId) => {
            setSection(sectionId);
    };

    const sectionSelector = () => {
        switch (section) {
            case 0:
                return (
                    <PersonalForm
                        personal={personal}
                        handleChange={handlePersonalChange}
                    />
                );
            case 1:
                return (
                    <EducationForm
                        education={education}
                        handleChange={handleEducationChange}
                    />
                );
            case 2:
                return (
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
                );
            case 3:
                return (
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
                );
            case 4:
                return (
                    <SkillsForm
                        skills={skills}
                        handleChange={handleSkillsChange}
                    />
                );
            case 5:
                return (
                    <div>
                        <div className="forms-header">Achievements</div>
                        <button onClick={handleNewAchievement}>Add New</button>
                        {achievements.map((achievement) => {
                            return (
                                <AchievementForm
                                    achievement={achievement}
                                    handleChange={handleAchievementsChange}
                                    handleDelete={handleDeleteAchievement}
                                    achievement_id={achievement.id}
                                    key={achievement.id}
                                />
                            );
                        })}
                    </div>
                );
        }
    };

    return (
        <>
            <Sidebar handleSectionChange={handleSectionChange} />
            <div className="forms" id="forms">
                {sectionSelector()}
            </div>
            <Preview
                personal={personal}
                education={education}
                experience={experiences}
                projects={projects}
                skills={skills}
                achievements={achievements}
            />
        </>
    );
}

export default App;
