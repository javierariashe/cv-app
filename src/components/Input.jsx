function Input({ name, label, value, onChange, type }) {
    function handleCheckboxPresent(e) {
        const dateInput =
            e.target.parentElement.parentElement.nextElementSibling;
        dateInput.disabled = !dateInput.disabled;
    }

    if (type === "textarea") {
        return (
            <div className="input-container">
                <label>{label}: </label>
                <textarea name={name} value={value} onChange={onChange} />
            </div>
        );
    }

    if (label === "End Date") {
        return (
            <div className="input-container">
                <div className="opposite">
                    <span>
                        <label>{label}: </label>
                    </span>
                    <span>
                        Present
                        <input
                            type="checkbox"
                            name={name}
                            className="present-check"
                            onClick={handleCheckboxPresent}
                            onChange={onChange}
                        />{" "}
                    </span>
                </div>
                <input
                    name={name}
                    value={value}
                    onChange={onChange}
                    type={type}
                />
            </div>
        );
    }

    return (
        <div className="input-container">
            <label>{label}: </label>
            <input name={name} value={value} onChange={onChange} type={type} />
        </div>
    );
}

export default Input;
