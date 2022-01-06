
import Spreadsheet from "./components/Spreadsheet";
import './App.css';

function App() {

  const data = [  {key:1,id:"1",name:"Coffee",price:0.5,quantity:250},
                  {key:2,id:"2",name:"Tea",price:1,quantity:175},
                  {key:3,id:"3",name:"Apple Juice",price:1.5,quantity:70}];
  return (
    <Spreadsheet data={data} name={"React Spreadsheet"}></Spreadsheet>
  );
}

export default App;
