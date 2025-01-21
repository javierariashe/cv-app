import Input from "./Input";

function PersonalForm({ personal, handleChange }) {
    return (
        <div className="form">
            <div className="forms-header">Personal Information</div>
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
