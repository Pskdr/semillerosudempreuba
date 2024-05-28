import React from 'react';
import TaskSection from './TaskSection';
import styles from './TaskBoard.module.css';

const TaskBoard = ({ sections, isSemillero, setSemillero }) => {
  return (
    <div className={styles.taskBoard}>
      {sections.map((section, index) => (
        <TaskSection key={index} section={section} isSemillero={isSemillero} setSemillero={setSemillero} />
      ))}
    </div>
  );
};

export default TaskBoard;
