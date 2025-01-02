function generateFile() {
	const link = document.createElement("a");
	const file = new Blob([`${printWallet?.address}\n${printWallet?.privateKey}`], {
		type: "text/plain",
	});
	link.href = URL.createObjectURL(file);
	link.download = "PRINT WALLET.txt";
	link.click();
	URL.revokeObjectURL(link.href);
}
