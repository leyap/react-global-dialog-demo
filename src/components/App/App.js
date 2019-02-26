import React, {Component} from 'react';
import css from './App.module.css';
import Dialog from '../Dialog';

class App extends Component {

    btnClick() {
        Dialog.show({
            title: 'Current Time',
            content: (new Date()).toLocaleString(),
            bgClose: true,
            onClose: () => {
                console.log("onClose");
            }
        });
    }

    btnClick2() {
        Dialog.show({
            title: 'Current Time',
            content: (new Date()).toLocaleString()
        });

        let timer = setInterval(() => {
            Dialog.show({
                content: (new Date()).toLocaleString(),
                onClose: () => {
                    clearInterval(timer);
                }
            });
        }, 1000);
    }

    render() {
        return (
            <div className={css.App}>
                <button onClick={this.btnClick.bind(this)}>Open Dialog</button>
                <button onClick={this.btnClick2.bind(this)}>Open Dialog With real time</button>
            </div>
        );
    }
}

export default App;
