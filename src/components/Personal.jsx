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

function PersonalPreview({ personal }) {
    return (
        <>
            <div className="center cv-name">{personal.name.value}</div>
            <div className="center personal-details">
                <a href={"mailto:" + personal.email.value}>
                    {personal.email.value}
                </a>
                {" | "} {personal.phoneNumber.value}
                {" | "} <a href={personal.github.value}>github.com</a>
                {" | "} <a href={personal.linkedin.value}>linkedin.com</a>
            </div>
        </>
    );
}

export { PersonalForm, PersonalPreview };
