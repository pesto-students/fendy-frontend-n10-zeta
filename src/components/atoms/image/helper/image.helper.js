import cx from "classnames";
import styles from "../image.module.css";
import IMAGE_TYPES from '../constants/image.types';

export const getImageClassName = (classNameFromProps, imageType) => {
  return cx(classNameFromProps, styles.image, {
    [styles.view]: imageType === IMAGE_TYPES.PRODUCT_VIEW,
    [styles.thumbnail]: imageType === IMAGE_TYPES.PRODUCT_THUMBNAIL,
    [styles.thumbnailFull] : imageType === IMAGE_TYPES.PRODUCT_THUMBNAIL_FULL,
  });
};