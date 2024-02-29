import logo from './logo.svg';
import './App.css';



import ProductsApi from './components/functionalComponents/axios/products';
import ImageComponent from './components/class-components/image/image-component';
import Products from './components/class-components/products/products';

function App(){
  return(
    <div>
      
      <Products/>
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
