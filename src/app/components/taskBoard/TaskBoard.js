import React from 'react';
import TaskSection from './TaskSection';
import styles from './TaskBoard.module.css';

const TaskBoard = ({ sections }) => {
  return (
    <div className={styles.taskBoard}>
      {sections.map((section, index) => (
        <TaskSection key={index} section={section} />
      ))}
    </div>
  );
};

export default TaskBoard;
