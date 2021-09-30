import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput";

const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState();
	const [loading, setLoading] = useState();

	const { login } = useAuth();

	const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();

		// login
		try {
			setError("");
			setLoading(true);
			login(email, password);
			history.push("/");
		} catch (err) {
			console.log(err);
			setLoading(false);
			setError("Faild to login");
		}
	};

	return (
		<>
			<Form onSubmit={handleSubmit} style={{ height: "330px" }}>
				<TextInput
					type="text"
					placeholder="Enter email"
					icon="alternate_email"
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<TextInput
					type="password"
					placeholder="Enter password"
					icon="lock"
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<Button disabled={loading} type="submit">
					<span>Submit Now</span>
				</Button>

				{error && <p className="error">{error}</p>}

				<div className="info">
					Don't have an account? <Link to="/signup">Signup</Link>{" "}
					instead.
				</div>
			</Form>
		</>
	);
};

export default LoginForm;
