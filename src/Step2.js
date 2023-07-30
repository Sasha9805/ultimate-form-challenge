import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { MainContainer } from "./components/MainContainer";
import { Form } from "./components/Form";
import { Input } from "./components/Input";
import { PrimaryButton } from "./components/PrimaryButton";
import * as yup from "yup";
import parsePhoneNumberFromString from "libphonenumber-js";
import { useData } from "./DataContext";

const schema = yup.object({
	email: yup
		.string()
		.email("Email should have correct format")
		.required("Email is a required field"),
});

const normalizePhoneNumber = (value) => {
	const phoneNumber = parsePhoneNumberFromString(value);
	if (!phoneNumber) {
		return value;
	}
	return phoneNumber.formatInternational();
};

export const Step2 = () => {
	const navigate = useNavigate();
	const { data, setValues } = useData();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		mode: "onBlur",
		defaultValues: {
			email: data.email || "",
			hasPhone: data.hasPhone || false,
			phoneNumber: data.phoneNumber || "",
		},
		resolver: yupResolver(schema),
	});
	const { ref, ...hasPhoneRegister } = register("hasPhone");
	const { onChange, ...phoneNumberRegister } = register("phoneNumber");

	const hasPhone = watch("hasPhone");

	const onSubmit = (data) => {
		setValues(data);
		navigate("/step3");
	};

	return (
		<MainContainer>
			<Typography component="h2" variant="h5">
				🦄 Step 2
			</Typography>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Input
					{...register("email")}
					id="email"
					type="email"
					label="Email"
					required
					error={!!errors.email}
					helperText={errors.email?.message}
				/>
				<FormControlLabel
					control={
						<Checkbox
							{...hasPhoneRegister}
							defaultValue={data.hasPhone || false}
							defaultChecked={data.hasPhone || false}
							inputRef={ref}
							color="primary"
						/>
					}
					label="Do you have a phone?"
				/>
				{hasPhone && (
					<Input
						{...phoneNumberRegister}
						id="phoneNumber"
						type="tel"
						label="Phone number"
						onChange={(e) => {
							e.target.value = normalizePhoneNumber(
								e.target.value
							);
							onChange(e);
						}}
					/>
				)}
				<PrimaryButton>Next</PrimaryButton>
			</Form>
		</MainContainer>
	);
};
