import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { MainContainer } from "./components/MainContainer";
import { Form } from "./components/Form";
import { Input } from "./components/Input";
import { PrimaryButton } from "./components/PrimaryButton";
import * as yup from "yup";
import { useData } from "./DataContext";

const schema = yup.object({
	firstName: yup
		.string()
		.matches(/^([^0-9]*)$/, "First name should not contain numbers")
		.required("First name is a required field"),
	lastName: yup
		.string()
		.matches(/^([^0-9]*)$/, "Last name should not contain numbers")
		.required("Last name is a required field"),
});

export const Step1 = () => {
	const navigate = useNavigate();
	const { data, setValues } = useData();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: "onBlur",
		defaultValues: {
			firstName: data.firstName || "",
			lastName: data.lastName || "",
		},
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		setValues(data);
		navigate("/step2");
	};

	return (
		<MainContainer>
			<Typography component="h2" variant="h5">
				🦄 Step 1
			</Typography>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Input
					{...register("firstName")}
					id="firstName"
					label="First Name"
					error={!!errors.firstName}
					helperText={errors.firstName?.message}
				/>
				<Input
					{...register("lastName")}
					id="lastName"
					label="Last Name"
					error={!!errors.lastName}
					helperText={errors.lastName?.message}
				/>
				<PrimaryButton>Next</PrimaryButton>
			</Form>
		</MainContainer>
	);
};
