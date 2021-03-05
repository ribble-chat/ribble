import PuffLoader from "react-spinners/PuffLoader";

import styles from "./Loading.module.scss";

const Loading: React.FC = () => {
  return (
    <div className={styles.container}>
      <PuffLoader size="10em" color="#2dc2db" />
    </div>
  );
};

export default Loading;
