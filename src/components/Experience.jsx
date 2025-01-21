import Input from "./Input";

function ExperienceForm({ experience, handleChange, handleDelete, exp_id }) {
    function handleDropdown(e) {
        const panel = e.target.nextElementSibling;
        panel.style.display = panel.style.display === "none" ? "block" : "none";
    }

    return (
        <div>
            <div className="experienceForm-header" onClick={handleDropdown}>
                {" "}
                {experience.position.value == ""
                    ? "New Experience"
                    : experience.position.value}
            </div>
            <div className="experienceForm">
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

export default ExperienceForm;
