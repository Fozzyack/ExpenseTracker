

const IncomeExpense = ({income, expense} : IncomeExpense) => {
    return (
        <section>
            <div className=" grid grid-cols-2 divide-gray-400 divide-x-2 p-8 gap-4 shadow-2xl border-gray-100 border-2">
                <div className="flex-col-center">
                    <h2 className="text-2xl px-4 font-light text-green-500 ">
                        INCOME
                    </h2>
                    <span> ${income} </span>
                </div>
                <div className="flex-col-center">
                    <h2 className="text-2xl px-4 font-light text-red-500 ">
                        EXPENSE 
                    </h2>
                    <span> ${expense} </span>
                </div>
            </div>
        </section>
    )
}

export default IncomeExpense
