import React from "react";
import HistoryTab from "./HistoryTab";
function History( {payment} : { payment : PaymentObject[]}  ) {
	return (
		<section>
			<div className="divide-gray-200 divide-y-2 flex flex-col">
				<h3 className="text-2xl mb-2">History</h3>
				<div className="flex flex-col gap-2 pt-4"> 
					{payment.map((pay, index) => 
                       ( <HistoryTab pay={pay}/> )
					)}
				</div>
			</div>
		</section>
	);
}
export default History;
