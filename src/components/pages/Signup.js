import { Link } from "react-router-dom";
import signupImage from "../../assets/images/signup.svg";
import classes from "../../styles/Signup.module.css";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

const Signup = () => {
	return (
		<>
			<h1>Create an account</h1>
			<div className="column">
				<Illustration image={signupImage} />
				<Form className={`${classes.signup}`}>
					<TextInput
						type="text"
						placeholder="Enter Name"
						icon="person"
					/>
					<TextInput
						type="text"
						placeholder="Enter Email"
						icon="alternate_email"
					/>
					<TextInput
						type="password"
						placeholder="Enter Password"
						icon="lock"
					/>
					<TextInput
						type="password"
						placeholder="Confirm Password"
						icon="lock_clock"
					/>
					<Checkbox text="I agree to the Terms &amp; Conditions" />
					<Button>
						<span>Submit now</span>
					</Button>
					<div className="info">
						Already have an account? <Link to="/login">Login</Link>{" "}
						instead.
					</div>
				</Form>
			</div>
		</>
	);
};

export default Signup;
