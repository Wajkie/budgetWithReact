interface NewInputProps {
    label: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const NewInput: React.FC<NewInputProps>= ({label, value, onChange})=> {
    return (
        <label><span>{label}</span>
        <input type="text" className="w-input" value={value} onAbort={onChange} />
        </label>
    );
}

export default NewInput;