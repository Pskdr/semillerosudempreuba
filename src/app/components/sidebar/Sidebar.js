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
import { FcAssistant } from "react-icons/fc";
import styles from './Sidebar.module.css';
import udem from './udem.png';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <ul className={styles.menu}>
        <li>
          <Image src={udem} alt='udem logo' />
        </li>
        <li style={{ marginTop: '150px' }}>
          <Link href='/'>
            <FaHome className={styles.icon} />
            Home
          </Link>
        </li>
        <li>
          <Link href='/my-tasks'>
            <FaTasks className={styles.icon} />
            Mis tareas
          </Link>
        </li>
        <li>
          <Link href='/members'>
            <FaUsers className={styles.icon} />
            Chat
          </Link>
        </li>
        <li>
          <Link href='/settings'>
            <FaCog className={styles.icon} />
            Configuración
          </Link>
        </li>
        <li style={{ marginTop:'200px' }}>
          <Link href='/settings'>
            <FcAssistant className={styles.icon} />
            Luz gabriela
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
