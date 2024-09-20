const InputField = ({ label, id, required, type, value, onChange, error }) => {
    return (
        <div className="input_container">
            <input
                className="main_form_inp"
                required={required}
                id={id}
                type={type}
                value={value}
                onChange={onChange}
            />
            <label htmlFor={id} className="main_form_label">{label}{required && '*'}</label>
            {error && <span className="error_message">{error}</span>}
        </div>
    );
};

export default InputField;
