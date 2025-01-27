import Input from "./Input";
import getDate from "../js/getDate";

function EducationForm({ education, handleChange }) {
    return (
        <div className="form">
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

function EducationPreview({ education }) {
    return (
        <>
            <div className="cv-header">Education</div>
            <hr />
            <div className="cv-details">
                <div className="opposite ">
                    <span>
                        <b>{education.school.value}</b>
                    </span>
                    <span>{education.location.value}</span>
                </div>
                <div className="opposite">
                    <span>
                        <i>{education.degree.value}</i>
                    </span>
                    <span>
                        <i>
                            {getDate(education.startDate)}
                            {" - "}
                            {getDate(education.endDate)}
                        </i>
                    </span>
                </div>
                <div>
                    <span>
                        <b>Relevant courses: </b>
                        {education.courses.value}
                    </span>
                </div>
            </div>
        </>
    );
}

export { EducationForm, EducationPreview };
