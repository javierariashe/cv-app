export default Form;
import { useState } from "react";
import Input from "./Input";

function ExperienceForm(properties, title) {
    const experience = {
        company: { label: "Company", value: "", type: "text" },
        jobRole: { label: "Job Role", value: "", type: "text" },
        description: { label: "Description", value: "", type: "text" },
        beginDate: { label: "Starting Date", value: "", type: "date" },
        endDate: { label: "End Date", value: "", type: "date" },
        location: { label: "Location", value: "", type: "text" },
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setInput({
            ...input,
            [name]: { ...input[name], value: value },
        });
    };

    return (
        <div className="experienceForm">
            <h2>Experience</h2>
            {Object.entries(input).map(([key, field]) => {
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
