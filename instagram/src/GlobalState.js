import create from "zustand";

const registeringUserStore = create((set) => ({
	registrationData: {
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
	},
	setRegistrationData: (data) =>
		set((state) => ({
			registrationData: {
				firstName: data.firstName,
				midName: data.midName,
				lastName: data.lastName,
				email: data.email,
				password: data.password,
				confirmPassword: data.confirmPassword,
				userWork: data.userWork,
				phoneNumber: data.phoneNumber,
				imageData: data.imageData,
				userDescription: data.userDescription,
				...state.registrationData,
			},
		})),
}));

export default registeringUserStore;
