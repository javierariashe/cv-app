import Input from "./Input";

function ExperienceForm({ experience, handleChange, handleDelete, exp_id }) {
    return (
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
            <button onClick={() => handleDelete(experience.id)}>Delete</button>
        </div>
    );
}

export default ExperienceForm;
