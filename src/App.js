import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import Home from './components/Home';

import './App.scss';

const App = () => {
    // Possible Hyperlinks
    const webPages = ['cleanser', 'toner', 'exfoliant', 'essence', 'serum', 'sheet-mask', 'moisturiser', 'sunscreen', 'other'];


    return (
        <Router> 
            {/* Switch looks through paths to match what should be displayed */}
            <Switch>
                <Route path='/t'>
                    <h1>d</h1>
                </Route>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
