import { useState } from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <header className={styles.header}>
      <Link to="/">
        <span>miguelBraga.dev</span>
      </Link>
      <nav
        className={`${styles.menuOpen} ${showMenu ? styles.show : ''}`}
        onClick={toggleMenu}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/project">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className={styles.menuButton} onClick={toggleMenu}>
        <span className={styles.linha}></span>
        <span className={styles.linha}></span>
        <span className={styles.linha}></span>
      </div>
    </header>
  )
}

export default Header
