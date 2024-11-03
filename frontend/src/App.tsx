import React from 'react';
import AddTransaction from './components/AddTransaction';
import Header from './components/Header';
import History from './components/History';
import IncomeExpense from './components/IncomeExpense';

function App() {
    const [payment, setPayment] = React.useState<PaymentObject[]>([]);
    const [balance, setBalance] = React.useState<number>(0);
    const [income, setIncome] = React.useState<number>(0);
    const [expenses, setExpenses] = React.useState<number>(0);
    React.useEffect(() => {
        fetch("http://localhost:8080")
         .then(res => res.json())
            .then(data => setPayment(data))

            let total = payment.reduce((sum, pay) => sum + pay.amount, 0); 
            setBalance(total)
            total = payment.reduce((sum, pay) => { return pay.amount > 0 ? sum + pay.amount : sum}, 0); 
            setIncome(total)
            total = payment.reduce((sum, pay) => { return pay.amount < 0 ? sum + pay.amount : sum}, 0); 
            setExpenses(total)

        }, [])

    

  return (
    <div className="h-screen flex-col-center">
        <div>
        <Header balance={balance}/>
        <IncomeExpense income = {income} expense = {expenses}/>
        <History 
            payment={payment}
        />
        <AddTransaction />
        </div>
    </div>
  );
}

export default App;