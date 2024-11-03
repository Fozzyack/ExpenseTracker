import React from "react";
function History( {payment} : { payment : PaymentObject[]}  ) {
	return (
		<section>
			<div className="divide-gray-200 divide-y-2 flex flex-col">
				<h3 className="text-2xl mb-2">History</h3>
				<div className="flex flex-col gap-2">
					{payment.map((pay, index) => {
						if (pay.amount < 0) {
							return (
                                <div className="p-4 flex justify-between items-center w-full border-red-200 border-2 shadow-xl">
                                    <h3> {pay.name} </h3>
                                    <span> ${pay.amount} </span>
                                </div>
                            )
						}
                        else if (pay.amount > 0) {
							return (
                                <div className="p-4 flex justify-between items-center w-full border-green-200 border-2 shadow-xl">
                                    <h3> {pay.name} </h3>
                                    <span> ${pay.amount} </span>
                                </div>
                            )
						}
                        
					})}
				</div>
			</div>
		</section>
	);
}
export default History;
