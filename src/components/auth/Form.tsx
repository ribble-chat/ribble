import styles from "./Form.module.scss";

export function formItem(item: TextInput) {
  const { title, value, inputType, handleChange } = item;
  return (
    <section key={title} className={styles.formItem}>
      <label>{title}</label>
      <input
        type={inputType}
        placeholder={title}
        value={value}
        onChange={handleChange}
      />
    </section>
  );
}

export type TextInput = {
  title: string;
  value: string;
  inputType: string;
  handleChange: (e: any) => void;
};
