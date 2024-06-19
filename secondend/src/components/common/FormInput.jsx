// FormInput.jsx
const FormInput = ({ label, type, id, value, onChange }) => (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} value={value} onChange={onChange} />
    </div>
  );
  
  export default FormInput;