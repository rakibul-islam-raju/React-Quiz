import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

const Answers = () => {
	return (
		<>
			<div className={classes.answer}>
				<Checkbox className="answers" text="Test component" />
			</div>
		</>
	);
};

export default Answers;
