import Input from "./Input";
import Description from "./Description";
import getDate from "../js/getDate";
import handleDropdown from "../js/handleDropdown";

function ExperienceForm({ experience, handleChange, handleDelete, exp_id }) {
    return (
        <div className="form">
            <div className="form-header opposite" onClick={handleDropdown}>
                {" "}
                {experience.position.value == ""
                    ? "New Experience"
                    : experience.position.value}
                <span>▼</span>
            </div>
            <div>
                {Object.entries(experience).map(([key, field]) => {
                    if (key === "id") return;
                    return (
                        <Input
                            name={key}
                            label={field.label}
                            value={field.value}
                            onChange={(e) => handleChange(e, exp_id)}
                            type={field.type}
                            key={key}
                        />
                    );
                })}
                <button onClick={() => handleDelete(experience.id)}>
                    Delete
                </button>
            </div>
        </div>
    );
}

function ExperiencePreview({ experience }) {
    return (
        <>
            <div className="cv-header">Experience</div>
            <hr />
            {experience.map((exp) => {
                return (
                    <div className="experience-item cv-details" key={exp.id}>
                        <div className="opposite">
                            <span>
                                <b>{exp.position.value}</b>
                            </span>
                            <span>
                                {getDate(exp.startDate)}
                                {" - "}
                                {getDate(exp.endDate)}
                            </span>
                        </div>
                        <div className="opposite">
                            <span>{exp.company.value}</span>
                            <span>{exp.location.value}</span>
                        </div>
                        <Description description={exp.description.value} />
                    </div>
                );
            })}
        </>
    );
}

export { ExperienceForm, ExperiencePreview };
