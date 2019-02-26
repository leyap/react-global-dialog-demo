import React, {Component} from 'react';
import css from './App.module.css';
import Dialog from '../Dialog';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }


    btnClick() {
        Dialog.show({
            title: 'Current Time',
            content: (new Date()).toLocaleString(),
            bgClose: true,
            onClose: () => {
                console.log("onClose");
            },
            onOk: () => {
                console.log('onOk');
            },
            onCancel: () => {
                console.log('onCancel');
            }
        });
    }

    render() {
        return (
            <div className={css.App}>
                <button onClick={this.btnClick.bind(this)}>Open Dialog</button>
            </div>
        );
    }
}

export default App;
