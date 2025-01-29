import Input from "./Input";

const SkillsForm = ({ skills, handleChange }) => {
    return (
        <div className="form">
            <div className="forms-header">Skills</div>
            {Object.entries(skills).map(([key, field]) => {
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
};

const SkillsPreview = ({ skills }) => {
    return (
        <div className="preview-section">
            <div className="cv-header">Skills</div>
            <hr />
            <div className="cv-details">
                <div>
                    <b>Programming Languages: </b>
                    {skills.programmingLanguages.value}
                </div>
                <div>
                    <b>Development Tools: </b>
                    {skills.devTools.value}
                </div>
                <div>
                    <b>Languages: </b>
                    {skills.languages.value}
                </div>
            </div>
        </div>
    );
};

export { SkillsForm, SkillsPreview };
