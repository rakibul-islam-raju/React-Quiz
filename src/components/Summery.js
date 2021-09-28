import Success from "../assets/images/success.png";
import classes from "../styles/Summery.module.css";

const Summery = () => {
	return (
		<div>
			<div className={classes.summary}>
				<div className={classes.point}>
					<p className={classes.score}>
						Your score is <br />5 out of 10
					</p>
				</div>

				<div className={classes.badge}>
					<img src={Success} alt="Success" />
				</div>
			</div>
		</div>
	);
};

export default Summery;
