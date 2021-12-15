import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 3200,
      date: new Date(2020, 8, 14),
    },

    {
      id: "e2",
      title: "Credit Card Bill",
      amount: 43000,
      date: new Date(2021, 11, 28),
    },

    {
      id: "e3",
      title: "Grocery",
      amount: 6784,
      date: new Date(2021, 11, 14),
    },

    {
      id: "e4",
      title: "Miscellenious",
      amount: 10200,
      date: new Date(2021, 11, 22),
    },
  ];
  const addExpenseHandler = (newExpense) => {
    console.log(newExpense);
  };
  return (
    <div>
      <h2>Let's get Started</h2>
      
      <NewExpense onAddExpenseData={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
