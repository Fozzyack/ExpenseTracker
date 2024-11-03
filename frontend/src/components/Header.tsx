import Balance from "./Balance";

const Header = ({balance}: Balance ) => {
	return (
        <section> 
            <div className="flex flex-col items-start">
                
                <h1 className="text-2xl font-semibold">
                    Expense Tracker
                </h1>
                <Balance balance={balance}/>
            </div>
        </section>
    )
};
export default Header;
