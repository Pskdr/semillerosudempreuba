import React from 'react';
import Avatar from '../avatar/Avatar';
import TaskCard from '../taskCard/TaskCard';
import styles from './TaskSection.module.css';

const TaskSection = ({ section }) => {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>{section.title}</h3>
      <div className={styles.cards}>
        {section.tasks.map((task, index) => (
          <TaskCard key={index} task={task} />
        ))}
      </div>
      <div className={styles.members}>
        {section.members.map((member, index) => (
          <Avatar
            key={index}
            src={member.avatar}
            alt={member.name}
            size='small'
          />
        ))}
      </div>
    </div>
  );
};

export default TaskSection;
