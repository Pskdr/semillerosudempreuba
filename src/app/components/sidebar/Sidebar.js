import React from 'react';
import Link from 'next/link';
import {
  FaHome,
  FaTasks,
  FaInbox,
  FaChartBar,
  FaUsers,
  FaCog,
} from 'react-icons/fa';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <ul className={styles.menu}>
        <li>
          <Link href='/'>
            <FaHome className={styles.icon} />
            Home
          </Link>
        </li>
        <li>
          <Link href='/'>
            <FaHome className={styles.icon} />
            Home
          </Link>
        </li>
        <li>
          <Link href='/my-tasks'>
            <FaTasks className={styles.icon} />
            My Tasks
          </Link>
        </li>
        <li>
          <Link href='/inbox'>
            <FaInbox className={styles.icon} />
            Inbox
          </Link>
        </li>
        <li>
          <Link href='/analyze'>
            <FaChartBar className={styles.icon} />
            Analyze
          </Link>
        </li>
        <li>
          <Link href='/members'>
            <FaUsers className={styles.icon} />
            Members
          </Link>
        </li>
        <li>
          <Link href='/settings'>
            <FaCog className={styles.icon} />
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
