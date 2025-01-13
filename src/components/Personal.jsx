export default PersonalForm;
import { useState } from "react";
import Input from "./Input";

function PersonalForm() {
    const experience = {
        name: { label: "Full Name", value: "", type: "text" },
        email: { label: "Email", value: "", type: "email" },
        phoneNumber: { label: "Phone Number", value: "", type: "tel" },
        github: { label: "Github", value: "", type: "url" },
        linkedin: { label: "Linkedin", value: "", type: "url" },
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
        <div className="personalForm">
            <h2>Personal Information</h2>
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
