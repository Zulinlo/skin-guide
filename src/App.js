import './App.css';
import Home from './components/Home';

const App = () => {
    // Possible Hyperlinks
    const webPages = ['cleanser', 'toner', 'exfoliant', 'essence', 'serum', 'sheet-mask', 'moisturiser', 'sunscreen', 'other'];


    return (
        <div className="App">
            <Home />
        </div>
    );
}

export default App;
