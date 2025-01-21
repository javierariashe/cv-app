function Preview({ personal, education, experience }) {
    function getDate(date) {
        if (date === "") {
            return "";
        }

        return new Date(date).toLocaleString("en-US", {
            month: "short",
            year: "numeric",
        });
    }

    return (
        <div id="cv-preview">
            <div className="center cv-name">{personal.name.value}</div>
            <div className="center personal-details">
                <a href={"mailto:" + personal.email.value}>
                    {personal.email.value}
                </a>
                {" | "} {personal.phoneNumber.value}
                {" | "} <a href={personal.github.value}>github.com</a>
                {" | "} <a href={personal.linkedin.value}>linkedin.com</a>
            </div>
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
                            {getDate(education.startDate.value)}
                            {" - "}
                            {getDate(education.endDate.value)}
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
            <div className="cv-header">Experience</div>
            <hr />
            {experience.map((exp) => {
                return (
                    <div className="experience-item" key={exp.id}>
                        <div className="cv-details">
                            <div className="opposite">
                                <span>
                                    <b>{exp.position.value}</b>
                                </span>
                                <span>
                                    {getDate(exp.startDate.value)}
                                    {" - "}
                                    {getDate(exp.endDate.value)}
                                </span>
                            </div>
                            <div className="opposite">
                                <span>{exp.company.value}</span>
                                <span>{exp.location.value}</span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Preview;
