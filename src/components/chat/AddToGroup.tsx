import styles from "./AddToGroup.module.scss";

const AddToGroup: React.FC = () => {
  function handleAddToGroup(e: HTMLFormElement) {
    e.preventDefault();
  }

  return (
    <article className={styles.container}>
      <label className={styles.label}>Add person to group</label>
      <form onSubmit={() => handleAddToGroup}>
        <input
          className={styles.formInput}
          type="text"
          placeholder="Enter a username"
        />
      </form>
    </article>
  );
};

export default AddToGroup;
