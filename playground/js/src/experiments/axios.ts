import axios from "axios";

async function fetchData() {
	try {
		await axios.get("http://localhost:6000/products", { timeout: 1000 });
		console.log("success");
	} catch (error) {
		console.log(error);
	}
}

fetchData();
