function Preview({ personal, education, experience }) {
    return (
        <div id="cv-preview">
            <h1>{personal.name.value}</h1>
            <div className="personal-details">
                {personal.email.value} {" | "} {personal.phoneNumber.value}
                {" | "}
                {personal.github.value} {" | "} {personal.linkedin.value}
            </div>
            <h2>Education</h2>
            <div className="opposite">
                <span>{education.school.value}</span>
                <span>{education.location.value}</span>
            </div>
            <div className="opposite">
                <span>{education.degree.value}</span>
                <span>
                    {education.startDate.value} {" - "}
                    {education.endDate.value}
                </span>
            </div>
            <h2>Experience</h2>
            {experience.map((exp) => {
                return (
                    <div className="experience-item" key={exp.id}>
                        <div className="experience-tem-header opposite">
                            <span>
                                {exp.position.value} {" at "}
                                {exp.company.value}
                            </span>
                            <span>
                                {exp.startDate.value} {" - "}
                                {exp.endDate.value}
                            </span>
                        </div>
                        <div className="experience-item-body opposite">
                            <span>{exp.company.value}</span>
                            <span>{exp.location.value}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Preview;
