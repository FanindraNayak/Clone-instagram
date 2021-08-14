import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { Button, ButtonGroup } from "@chakra-ui/react";
function Register() {
	const [dataOfUser, setDataOfUser] = useState({
		firstName: "",
		midName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
		userWork: "",
		phoneNumber: 0,
		imageData: "",
		userDescription: "",
	});
	console.log(dataOfUser);
	const array = [
		"firstName",
		"midName",
		"lastName",
		"email",
		"password",
		"confirmPassword",
		"userWork",
		"imageData",
		"userDescription",
	];

	const handelChange = (e) => {
		setDataOfUser({ ...dataOfUser, [e.target.name]: e.target.value });
	};
	const handelClick = async (e) => {
		e.preventDefault();
		// console.log("his");
		const url = `http://localhost:3012/api/user/register`;
		const res = await axios.post(url, dataOfUser);
		if (res.data === "User Created") {
			setDataOfUser({
				firstName: "",
				midName: "",
				lastName: "",
				email: "",
				password: "",
				confirmPassword: "",
				userWork: "",
				phoneNumber: 0,
				imageData: "",
				userDescription: "",
			});
		}
		console.log(res);
	};
	return (
		<div style={{ marginTop: 30 }}>
			<form>
				{array.map((value, i) => (
					<div key={i}>
						<label style={{ marginRight: 100 }}>{value}</label>
						<input
							type={
								value === "password" || value === "confirmPassword"
									? "password"
									: "text"
							}
							name={value}
							onChange={handelChange}
							value={dataOfUser.value}
						/>
						<br />
						<br />
					</div>
				))}

				<br />
				<Button
					colorScheme="teal"
					// onSubmit={handelClick}
					variant="outline"
					onClick={handelClick}
				>
					Registration
				</Button>
			</form>
		</div>
	);
}

export default Register;
