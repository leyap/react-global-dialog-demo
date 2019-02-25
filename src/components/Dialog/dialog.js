import React from 'react';
import css from './dialog.module.css';

class Dialog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            show: false,
            title: '',
            content: ''
        }
    }

    show(title, content) {
        this.setState({open: true, title: title, content: content})
        setTimeout(() => {
            this.setState({show: true});
        }, 10);
    }

    close() {
        this.setState({show: false});
        setTimeout(() => {
            this.setState({open: false});
        }, 210);
    }

    render() {
        return <div
            className={css.dialogMask + ' ' + (this.state.open ? css.open : '') + ' ' + (this.state.show ? css.show : '')}>
            <div className={css.dialog}>
                <div className={css.dialogTitle}>{this.state.title}
                    <div className={css.closeBtn} onClick={this.close.bind(this)}>X</div>
                </div>
                <div className={css.dialogContent}>{this.state.content}</div>
            </div>
        </div>
    }

}

export default Dialog;