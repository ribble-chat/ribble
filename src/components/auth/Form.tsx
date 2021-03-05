import styles from "./Form.module.scss";

export function renderTextInput(item: TextInput): React.ReactElement {
  const { title, value, inputType, handleChange } = item;
  return (
    <label key={title} className={styles.formItem}>
      {title}
      <input
        type={inputType}
        placeholder={title}
        value={value}
        onChange={handleChange}
      />
    </label>
  );
}

export type TextInput = {
  title: string;
  value: string;
  inputType: string;
  handleChange: (e: any) => void;
};
