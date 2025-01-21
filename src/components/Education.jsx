import Input from "./Input";

function EducationForm({ education, handleChange }) {
    return (
        <div className="educationForm">
            <div className="forms-header">Education</div>
            {Object.entries(education).map(([key, field]) => {
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

export default EducationForm;
