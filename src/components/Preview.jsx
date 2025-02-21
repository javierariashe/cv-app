import { PersonalPreview } from "./Personal";
import { EducationPreview } from "./Education";
import { ExperiencePreview } from "./Experience";
import { ProjectPreview } from "./Projects";
import { SkillsPreview } from "./Skills";
import { AchievementPreview } from "./Achievements";

function Preview({
    personal,
    education,
    experience,
    projects,
    skills,
    achievements,
}) {
    return (
        <div className="preview">
            <button id="download-button" onClick={window.print}>Download PDF</button>
            <div id="cv-preview">
                <PersonalPreview personal={personal} />
                <EducationPreview education={education} />
                <ExperiencePreview experience={experience} />
                <ProjectPreview projects={projects} />
                <SkillsPreview skills={skills} />
                <AchievementPreview achievements={achievements} />
            </div>
        </div>
    );
}

export default Preview;
