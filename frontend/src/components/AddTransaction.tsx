import React from "react";

const AddTransaction = () => {
    const [name, setName] = React.useState<string>("")
    const [amount, setAmount] = React.useState<number>(0)

    const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const changeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(parseInt(e.target.value))
    }

    const addTransaction = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        fetch("http://localhost:8080/add", {

            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: name, amount: amount})

        }).then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))

    }


	return (
		<section>
			<div className="flex flex-col divide-y-2 divide-gray-200">
				<h2 className="text-2xl">Add new Transaction</h2>
				<div className="flex flex-col gap-4">
					<span> Reason: </span>
					<input type="text" placeholder="Reason..." onChange={(e) => changeName(e)}/>
					<div className="flex flex-col">
						<span> Amount </span>
						<span>
							{" "}
							(negative - expense, positive - incomeAmount )
						</span>
					</div>
					<input type="number" placeholder="Insert Amount Here" onChange={e => changeAmount(e)}/>
				</div>
                <button className="w-full flex-col-center bg-indigo-400 my-2" onClick={(e) => addTransaction(e)}>
                    <span className="text-white p-2 "> Add Transaction </span>
                </button>
			</div>
		</section>
	);
};

export default AddTransaction;