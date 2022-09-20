import Link from "./common/Link"
import styles from '../styles/Home.module.scss'

export default function Navigations() {

  return (   
    <div className={styles.navigations}>
      <div className={styles.links}>
        <Link delay="0.3" className="bold">Overview</Link>
        <Link delay="0.4">Episodes</Link>
        <Link delay="0.5">Details</Link>
      </div>
    </div>
  )
}
