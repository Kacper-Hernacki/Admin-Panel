import styles from './Sidebar.module.css';

import React from 'react'

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <h1 className={styles.sidebar__option}>option 1</h1>
      <h1 className={styles.sidebar__option}>option 2</h1>
      <h1 className={styles.sidebar__option}>option 3</h1>
      <h1 className={styles.sidebar__option}>option 4</h1>
    </div>
  )
}

export default Sidebar;
