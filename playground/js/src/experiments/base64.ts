import fs from "fs";

function getBase64Size(base64String: string) {
	var stringLength = base64String.length - "data:image/png;base64,".length;

	var sizeInBytes = 4 * Math.ceil(stringLength / 3) * 0.5624896334383812;
	var sizeInKb = sizeInBytes / 1000;

	return {
		bytes: sizeInBytes,
		kb: sizeInKb,
		mb: sizeInKb / 1024,
	};
}

function base64Encode() {
	const filename = "icon-error-large.png";
	var bitmap = fs.readFileSync(`/Users/diegofrayo/Downloads/Work/${filename}`);
	const base64 = new Buffer.from(bitmap).toString("base64");

	fs.writeFileSync(`/Users/diegofrayo/Downloads/Work/b64-${filename}`, base64);

	return base64;
}

const ootuput;
