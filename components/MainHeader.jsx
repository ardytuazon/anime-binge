import styles from '../styles/MainHeader.module.scss'
import Button from './common/Button'

export default function MainHeader() {

  return (
    <div className={styles.headercontainer}>
      <div className={styles.header}>
        <a className={styles.logo}>AnimeBinge</a>
        <div className={styles.menu}>
          <a className={styles.active} href="#home">Home</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <Button className="second large mx">Sign Up</Button>
          <Button className="main large">Log In</Button>
        </div>
      </div>
    </div>
  )
}
