
import './App.css';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import HookCakeContainer from './components/HookCakeContainer';
import IceCreamContainer from './components/iceCreamContainer';
import CakeContainer from './components/CakeContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <CakeContainer />
      <HookCakeContainer />
      <IceCreamContainer />
    </div>
    </Provider>
  );
}

export default App;
