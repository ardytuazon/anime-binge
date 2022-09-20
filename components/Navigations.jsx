import Link from "./common/Link"
import styles from '../styles/Home.module.scss'

export default function Navigations() {

  return (
    <div className={styles.navigations}>
      <div className={styles.links}>
        <Link className="bold">Overview</Link>
        <Link>Episodes</Link>
        <Link>Details</Link>
      </div>
    </div>
  )
}
