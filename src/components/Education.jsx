export default EducationForm;
import { useState } from "react";
import Input from "./Input";

function EducationForm() {
    const experience = {
        school: { label: "School Name", value: "", type: "text" },
        title: { label: "Title of study", value: "", type: "text" },
        location: { label: "Location", value: "", type: "text" },
        date: { label: "Date", value: "", type: "date" },
        courses: { label: "Relevant Courses", value: "", type: "text" },
    };

    const [input, setInput] = useState(experience);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setInput({
            ...input,
            [name]: { ...input[name], value: value },
        });
    };

    return (
        <div className="educationForm">
            <h2>Education</h2>
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
