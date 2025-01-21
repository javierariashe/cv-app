function Input({ name, label, value, onChange, type }) {
    if (type === "textarea") {
        return (
            <div className="input-container">
                <label>{label}: </label>
                <textarea name={name} value={value} onChange={onChange} />
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
