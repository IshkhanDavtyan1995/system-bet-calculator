import './App.css';
import Wrapper from './components/Wrapper';
import BetsCalculator from './components/BetsCalculator';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <div className="bg-[#212121] min-h-screen px-24">
      <Provider store={store}>
        <Wrapper>
         <BetsCalculator />
        </Wrapper>
      </Provider>
    </div>
  );
}

export default App;
