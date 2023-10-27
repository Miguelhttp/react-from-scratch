import styles from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <span>miguelBraga.dev</span>
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/project">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  )
}

export default Header
