import React from 'react';
import styles from './Avatar.module.css';

const Avatar = ({ src, alt, size = 'medium' }) => {
  const sizeClass = styles[size];

  return (
    <div className={`${styles.avatar} ${sizeClass}`}>
      {src ? (
        <img src={src.src} alt={alt} className={styles.image} />
      ) : (
        <div className={styles.initials}>{alt.charAt(0).toUpperCase()}</div>
      )}
    </div>
  );
};

export default Avatar;
