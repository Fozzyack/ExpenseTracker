import RemoveButtonSVG from "./RemoveButtonSVG";

const HistoryTab = ({ pay }: { pay: PaymentObject }) => {
	console.log(pay);
	const removeEntry = () => {
		fetch("http://localhost:8080/delete", {
			method: "DELETE",
			body: JSON.stringify({ id: pay.id }),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				window.location.reload();
			});
	};

	return (
		<div className="relative group">
			{pay.amount > 0 ? (
				<button
					onClick={() => {
						removeEntry();
					}}
					className="bg-green-500 w-full h-full z-0 absolute translate-x-2 group-hover:translate-x-10 transition-all ease-in-out duration-150 "
				>
					<RemoveButtonSVG />
				</button>
			) : (
				<button
					onClick={() => {
						removeEntry();
					}}
					className="bg-red-500 w-full h-full z-0 absolute translate-x-2 group-hover:translate-x-10 transition-all ease-in-out duration-150 "
				>
					<RemoveButtonSVG />
				</button>
			)}

			<div className="flex p-3 border border-gray-500 wflex-row relative justify-between bg-white">
				<p> {pay.name} </p>
				<span> {pay.amount} </span>
			</div>
		</div>
	);
};

export default HistoryTab;
