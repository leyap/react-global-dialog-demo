import React, {Component} from 'react';
import './App.css';
import Dialog from '../Dialog';

class App extends Component {

    render() {
        return (
            <div className="App">
                <button onClick={() => Dialog.show('Current Time', (new Date()).toLocaleString())}>Open Dialog</button>
            </div>
        );
    }
}

export default App;
