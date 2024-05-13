import React from 'react';
import Avatar from '../avatar/Avatar';
import styles from './Header.module.css';

const Header = ({ projectName, lastUpdate, members }) => {
  return (
    <header className={styles.header}>
      <div className={styles.projectInfo}>
        <h2>{projectName}</h2>
        <p>Last Update: {lastUpdate}</p>
      </div>
      <div className={styles.members}>
        {members.map((member, index) => (
          <Avatar key={index} src={member.avatar} alt={member.name} />
        ))}
        <span className={styles.memberCount}>+{members.length}</span>
      </div>
    </header>
  );
};

export default Header;
