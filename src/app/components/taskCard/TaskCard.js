import React from 'react';
import Avatar from '../avatar/Avatar';
import { FaComment, FaFile } from 'react-icons/fa';
import styles from './TaskCard.module.css';

const TaskCard = ({ task }) => {
  return (
    <div className={styles.card}>
      <h4 className={styles.cardTitle}>{task.title}</h4>
      <p className={styles.dueDate}>Due: {task.dueDate}</p>
      <div className={styles.details}>
        <div className={styles.comments}>
          <FaComment className={styles.icon} />
          <span>{task.comments.length}</span>
        </div>
        <div className={styles.files}>
          <FaFile className={styles.icon} />
          <span>{task.files.length}</span>
        </div>
      </div>
      <div className={styles.members}>
        {task.members.map((member, index) => (
          <Avatar key={index} src={member.avatar} alt={member.name} />
        ))}
      </div>
    </div>
  );
};

export default TaskCard;
