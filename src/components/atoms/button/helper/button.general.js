import cx from "classnames";

import BUTTON_TYPES from "../constants/button.types";

import styles from "../button.module.css";

export const getButtonClassName = (classNameFromProps, buttonType) => {
  return cx(classNameFromProps, styles.button, {
    [styles.primary]: buttonType === BUTTON_TYPES.PRIMARY,
    [styles.secondary]: buttonType === BUTTON_TYPES.SECONDARY,
    [styles.tertiary]: buttonType === BUTTON_TYPES.TERTIARY,
  });
};