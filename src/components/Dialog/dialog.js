import React from 'react';
import css from './dialog.module.css';

class Dialog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            show: false,
            title: '',
            content: '',
            bgClose: true,
            onClose: null
        }
    }

    show(params) {
        let {title, content, bgClose, onClose} = params;

        let state = {open: true, bgClose, onClose};
        if (title) {
            state.title = title;
        }
        if (content) {
            state.content = content;
        }

        this.setState(state);
        setTimeout(() => {
            this.setState({show: true});
        }, 10);
    }

    close() {
        this.setState({show: false});
        setTimeout(() => {
            this.setState({open: false});
        }, 210);
        if (typeof this.state.onClose === 'function') {
            this.state.onClose();
        }
    }

    disableEvent(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    bgClick() {
        if (this.state.bgClose) {
            this.close();
        }
    }

    render() {
        return <div
            className={css.dialogMask + ' ' + (this.state.open ? css.open : '') + ' ' + (this.state.show ? css.show : '')}
            onMouseDown={this.disableEvent}
            onMouseMove={this.disableEvent}
            onWheel={this.disableEvent}
            onClick={this.bgClick.bind(this)}
        >
            <div className={css.dialog}>
                <div className={css.dialogTitle}>{this.state.title}
                    <div className={css.closeBtn} onClick={this.close.bind(this)}>
                        <i></i>
                        <i></i>
                    </div>
                </div>
                <div className={css.dialogContent}>{this.state.content}</div>
            </div>
        </div>
    }

}

export default Dialog;