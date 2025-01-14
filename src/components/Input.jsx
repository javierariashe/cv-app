import "../styles/Input.css";

function Input({ name, label, value, onChange, type }) {
    return (
        <div>
            <label>{label}: </label>
            <input name={name} value={value} onChange={onChange} type={type} />
        </div>
    );
}

export default Input;
