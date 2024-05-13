'use client';
import { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import TaskBoard from './components/taskBoard/TaskBoard';
import styles from './components/home/home.module.css';
import image from '../../public/avatar2.png';

import image2 from '../../public/avatar.svg';

export default function Home() {
  const members = [
    {
      avatar: image,
      name: 'John Doe',
    },
    {
      avatar: image,
      name: 'Jane Smith',
    },
    {
      avatar: image,
      name: 'Bob Johnson',
    },
  ];

  const sections = [
    {
      title: 'Semillero 1',
      tasks: [
        {
          title: 'Conduct Market Research',
          dueDate: '2023-06-01',
          comments: [
            {
              author: 'John Doe',
              content: 'We need to analyze competitor data',
            },
            { author: 'Jane Smith', content: 'Ill gather customer feedback' },
          ],
          files: [
            { name: 'market_report.pdf', url: '/files/market_report.pdf' },
          ],
          members: [
            { avatar: image2, name: 'John Doe' },
            { avatar: image2, name: 'Jane Smith' },
          ],
        },
        // Add more tasks as needed
      ],
      members: [{ avatar: image, name: 'Bob Johnson' }],
    },
    {
      title: 'Semillero 2',
      tasks: [
        {
          title: 'Implement New Feature',
          dueDate: '2023-07-01',
          comments: [
            {
              author: 'Alice Brown',
              content: 'We need to integrate with the API',
            },
            { author: 'Tom Wilson', content: 'Ill work on the front-end' },
          ],
          files: [
            { name: 'feature_spec.docx', url: '/files/feature_spec.docx' },
          ],
          members: [
            { avatar: image2, name: 'Alice Brown' },
            { avatar: image2, name: 'Tom Wilson' },
          ],
        },
        // Add more tasks as needed
      ],
      tasks: [
        {
          title: 'Implement New Feature 2',
          dueDate: '2025-07-01',
          comments: [
            {
              author: 'Alice Brown',
              content: 'We need to integrate with the API',
            },
            { author: 'Tom Wilson', content: 'Ill work on the front-end' },
          ],
          files: [
            { name: 'feature_spec.docx', url: '/files/feature_spec.docx' },
          ],
          members: [
            { avatar: image2, name: 'Alice Brown' },
            { avatar: image2, name: 'Tom Wilson' },
          ],
        },
      ],
      members: [{ avatar: image, name: 'Sarah Thompson' }],
    },
    {
      title: 'Semillero 3',
      tasks: [
        {
          title: 'Implement New Feature',
          dueDate: '2023-07-01',
          comments: [
            {
              author: 'Alice Brown',
              content: 'We need to integrate with the API',
            },
            { author: 'Tom Wilson', content: 'Ill work on the front-end' },
          ],
          files: [
            { name: 'feature_spec.docx', url: '/files/feature_spec.docx' },
          ],
          members: [
            { avatar: image2, name: 'Alice Brown' },
            { avatar: image2, name: 'Tom Wilson' },
          ],
        },
        // Add more tasks as needed
      ],
      members: [{ avatar: image, name: 'Sarah Thompson' }],
    },
  ];

  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.main}>
        <Header members={members} />
        <TaskBoard sections={sections} />
      </main>
    </div>
  );
}
