import Input from "./Input";

function PersonalForm({ personal, handleChange }) {
    return (
        <div className="personalForm">
            <h2>Personal Information</h2>
            {Object.entries(personal).map(([key, field]) => {
                return (
                    <Input
                        name={key}
                        label={field.label}
                        value={field.value}
                        onChange={handleChange}
                        type={field.type}
                        key={key}
                    />
                );
            })}
        </div>
    );
}

export default PersonalForm;
