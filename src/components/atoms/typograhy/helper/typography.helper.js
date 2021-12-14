import cx from "classnames";


import styles from "../typography.module.css";

export const getTitleClass = (titleType) => {
  return cx(styles.title ,{
    [styles.underline]: titleType === "underline",
  });
};