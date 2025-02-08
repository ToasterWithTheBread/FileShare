// trust me its a shitshow I know, this was made for people who dont know how to use google drive

import * as React from "react";
import axios from "axios";

export default function Page() {
	const [fileName, setFileName] = React.useState("");
	const [error, setError] = React.useState("");

	async function getFile() {
		try {
			if (fileName.trim() === "") {
				setError("")
				return;
			}

			let response = await axios({
				url: fileName,
				method: "GET",
				responseType: "blob",
			});

			setError("")

			const href = URL.createObjectURL(response.data);

			const link = document.createElement("a");
			link.href = href;
			link.setAttribute("download", fileName);
			document.body.appendChild(link);
			link.click();

			document.body.removeChild(link);
			URL.revokeObjectURL(href);
		} catch (e) {
			console.error(e)
			setError("File does not exist")
		}
	}

	return (
		<div>
			<input type="text" placeholder="Enter filename" value={fileName} onChange={(e) => setFileName(e.target.value)} />
			<button onClick={() => getFile()}>Download</button>
			{error && <p>{error}</p>}
		</div>
	);
}
