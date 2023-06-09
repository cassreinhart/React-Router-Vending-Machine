import {BrowserRouter} from 'react-router-dom';
import './App.css';
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Chips from './Chips';
import FreshSardines from './FreshSardines';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/'>
          <VendingMachine />
        </Route>
        <Route exact path='/soda'>
          <Soda />
        </Route>
        <Route exact path='/chips'>
          <Chips />
        </Route>
        <Route exact path='/fresh-sardines'>
          <FreshSardines />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
