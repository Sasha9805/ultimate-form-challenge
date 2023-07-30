import { CloudUpload, InsertDriveFile } from "@mui/icons-material";
import {
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Paper,
} from "@mui/material";
import Dropzone from "react-dropzone";
import { Controller } from "react-hook-form";

export const FileInput = ({ control, name }) => {
	return (
		<Controller
			control={control}
			name={name}
			defaultValue={[]}
			render={({ field: { name, value, onChange, onBlur, ref } }) => (
				<>
					<Dropzone onDrop={onChange}>
						{({ getRootProps, getInputProps }) => (
							<Paper
								sx={{
									backgroundColor: "#eee",
									textAlign: "center",
									cursor: "pointer",
									color: "#333",
									padding: "10px",
									marginTop: "20px",
								}}
								variant="outlined"
								{...getRootProps()}
							>
								<CloudUpload
									sx={{
										marginTop: "16px",
										color: "#888",
										fontSize: "42px",
									}}
								/>
								<input
									{...getInputProps()}
									onBlur={onBlur}
									name={name}
								/>
								<p>
									Drag 'n' drop files here, or click to select
									files
								</p>
							</Paper>
						)}
					</Dropzone>
					<List>
						{value.map((f, index) => (
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
		/>
	);
};
