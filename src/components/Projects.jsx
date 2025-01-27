import Input from "./Input";
import getDate from "../js/getDate";
import Description from "./Description";
import handleDropdown from "../js/handleDropdown";

function ProjectForm({ project, handleChange, handleDelete, project_id }) {
    return (
        <div className="form">
            <div className="form-header opposite" onClick={handleDropdown}>
                {" "}
                {project.name.value == "" ? "New Project" : project.name.value}
                <span>▼</span>
            </div>
            <div>
                {Object.entries(project).map(([key, field]) => {
                    if (key === "id") return;
                    return (
                        <Input
                            name={key}
                            label={field.label}
                            value={field.value}
                            onChange={(e) => handleChange(e, project_id)}
                            type={field.type}
                            key={key}
                        />
                    );
                })}
                <button onClick={() => handleDelete(project.id)}>Delete</button>
            </div>
        </div>
    );
}

function ProjectPreview({ projects }) {
    return (
        <>
            <div className="cv-header">Projects</div>
            <hr />
            {projects.map((project) => {
                return (
                    <div className="project-item cv-details" key={project.id}>
                        <div className="opposite">
                            <span>
                                <b>{project.name.value}</b> |{" "}
                                {project.tech.value}
                            </span>
                            <span>
                                {getDate(project.startDate)}
                                {" - "}
                                {getDate(project.endDate)}
                            </span>
                        </div>
                        <Description description={project.description.value} />
                    </div>
                );
            })}
        </>
    );
}

export { ProjectForm, ProjectPreview };
