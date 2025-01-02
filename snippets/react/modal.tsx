// METHOD 1

function TokenImageExpandedModal({
	tokenImage,
	tokenName,
	onClose,
}: {
	tokenImage: string;
	tokenName: string;
	onClose: () => void;
}) {
	const modalRef = useRef<HTMLDivElement>(null);

	const modalClickHandler = useCallback(function modalClickHandler(
		event: React.MouseEvent<HTMLDivElement>,
	) {
		if (modalRef.current === event.target) {
			onClose();
		}
	},
	[]);

	return (
		<div
			ref={modalRef}
			className="Backdrop absolute left-0 top-0 z-50 flex h-full w-full items-end justify-center px-8 pb-12"
			onClick={modalClickHandler}
		>
			<ModalWindowInternal
				id="token-image-expanded"
				title={tokenName}
				containerClassName="!relative !w-full !max-w-[400px]"
				windowContentClassName="!p-4 flex-1 min-h-0 flex items-center justify-center"
				isDraggable={false}
				onClose={onClose}
			>
				<img
					src={tokenImage}
					alt="Token image"
					className="max-h-full max-w-full"
				/>
			</ModalWindowInternal>
		</div>
	);
}
// METHOD 2

function Modal({ isModalOpen }) {
	let modalRef = useRef();

	function checkClickOutside(e) {
		if (isModalOpen && modalRef.current && !modalRef.current.contains(e.target)) {
			closeModal();
		}
	}

	useEffect(() => {
		document.addEventListener("mousedown", checkClickOutside);

		return () => {
			document.removeEventListener("mousedown", checkClickOutside);
		};
	}, [isModalOpen]);

	return <div ref={modalRef}>content...</div>;
}
