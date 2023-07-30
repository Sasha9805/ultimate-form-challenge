import Box from "@mui/material/Box";
// import { styled } from "@mui/material/styles";

// const FormRoot = styled("form")(({ theme }) => ({
// 	width: "100%",
// 	marginTop: theme.spacing(1),
// }));

export const Form = ({ children, ...props }) => {
	return (
		// <FormRoot
		// 	noValidate
		// 	{...props}
		// >
		// 	{children}
		// </FormRoot>
		<Box
			component="form"
			noValidate
			sx={(theme) => ({ width: "100%", marginTop: theme.spacing(1) })}
			{...props}
		>
			{children}
		</Box>
	);
};
