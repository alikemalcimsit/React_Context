
import './App.css';
import Cards from './components/Cards';
import Header from './components/Header';
import { GlobalProvider } from './context/GlobalState';
function App() {
  return (
    <div className="App">
   <Header/>
   <GlobalProvider>
   <Cards/>
   </GlobalProvider>
  
    </div>
  );
}

export default App;
