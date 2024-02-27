import logo from './logo.svg';
import './App.css';
import ListItems from './components/functional-components/lists/unorder-list/list-items';
import OrderedList from './components/functional-components/lists/order-list/ordered-list';
import TableCoponent from './components/functional-components/table/table-component';



function App(){
  return(
    <div>
      <ListItems/>
      <OrderedList/>
      <TableCoponent/>
    </div>
  )
}








// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
