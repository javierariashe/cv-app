import { PersonalPreview } from "./Personal";
import { EducationPreview } from "./Education";
import { ExperiencePreview } from "./Experience";
import { ProjectPreview } from "./Projects";

function Preview({ personal, education, experience, projects }) {
    return (
        <div id="cv-preview">
            <PersonalPreview personal={personal} />
            <EducationPreview education={education} />
            <ExperiencePreview experience={experience} />
            <ProjectPreview projects={projects} />
        </div>
    );
}

export default Preview;
