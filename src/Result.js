import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { InsertDriveFile } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import {
	TableContainer,
	Table,
	Paper,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import { MainContainer } from "./components/MainContainer";
import { useData } from "./DataContext";
import { PrimaryButton } from "./components/PrimaryButton";
import Confetti from "react-confetti";

export const Result = () => {
	const [success, setSuccess] = useState(false);
	const { data } = useData();
	const entries = Object.entries(data).filter(
		([key, value]) => key !== "files"
	);
	const { files } = data;

	const onSubmit = async () => {
		const formData = new FormData();

		if (files) {
			files.forEach((file) => {
				formData.append("files", file, file.name);
			});
		}

		entries.forEach(([key, value]) => {
			formData.append(key, value);
		});

		const res = await fetch("http://localhost:4000/", {
			method: "POST",
			body: formData,
		});

		// if (res.status === 200)
		if (res.ok) {
			Swal.fire("Great job", "You have passed the challenge!", "success");
			setSuccess(true);
		}
	};

	if (success) {
		return <Confetti />;
	}

	return (
		<MainContainer>
			<Typography component="h2" variant="h5">
				📋 Form Values
			</Typography>
			<TableContainer sx={{ marginBottom: "30px" }} component={Paper}>
				<Table sx={{ marginBottom: "30px" }}>
					<TableHead>
						<TableRow>
							<TableCell>Field</TableCell>
							<TableCell align="right">Value</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{entries.map((entry) => (
							<TableRow key={entry[0]}>
								<TableCell>{entry[0]}</TableCell>
								<TableCell align="right">
									{entry[1].toString()}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			{files && (
				<>
					<Typography component="h2" variant="h5">
						📦 Files
					</Typography>
					<List>
						{files.map((f, index) => (
							<ListItem key={index}>
								<ListItemIcon>
									<InsertDriveFile />
								</ListItemIcon>
								<ListItemText
									primary={f.name}
									secondary={f.size}
								/>
							</ListItem>
						))}
					</List>
				</>
			)}
			<PrimaryButton onClick={onSubmit}>Submit</PrimaryButton>
			<Link to="/">Start over</Link>
		</MainContainer>
	);
};
