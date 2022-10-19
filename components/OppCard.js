import styles from '@styles/oppCard.module.css';
import Link from 'node_modules/next/link';

const OppCard = (props) => {
	const { title, date, image } = props;
	return (
		<div className={styles.main}>
			<div className={styles.picture}>
				<h2>Image</h2>
			</div>
			<div className={styles.cardInfo}>
				<div className={styles.title}>
					<h3>Title</h3>
					<span>Posted On</span>
				</div>
				<Link href="#">
					<button className={styles.link}>Details</button>
				</Link>
			</div>
		</div>
	);
};

export default OppCard;
