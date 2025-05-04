type InputProps = {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onDelete: () => void;
  };
  
  const InputComponent: React.FC<InputProps> = ({ label, value, onChange, onDelete }) => {
    return (
        <div className="w-card">
        <p style={{textAlign: "center"}}>{label}</p>
      <label style={{display: "flex"}}>
        
        <input
        className="w-input"
          type="number"
          value={value}
          required
          min={1}
          onChange={onChange}
          style={{ marginRight: "0.5rem" }}
        />
        <button className="w-btn" onClick={onDelete}>🗑️</button>
      </label>
      
      </div>
    );
  };
  
  export default InputComponent;