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
            onClose: null,
            onOk: null,
            onCancel: null
        }
    }

    show(params) {
        let {title, content, bgClose, onClose, onOk, onCancel} = params;

        let state = {open: true, bgClose, onClose, onOk, onCancel};
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
        if (typeof this.state.onClose === 'function') {
            this.state.onClose();
        }
        this.setState({show: false});
        setTimeout(() => {
            this.setState({open: false, show: false});
        }, 210);
    }

    static disableEvent(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    bgClick() {
        if (this.state.bgClose) {
            this.close();
        }
        return false;
    }

    ok(e) {
        e.stopPropagation();
        if (typeof this.state.onOk === 'function') {
            this.state.onOk();
        }
        this.close();
    }

    cancel(e) {
        e.stopPropagation();
        if (typeof this.state.onCancel === 'function') {
            this.state.onCancel();
        }
        this.close();
    }

    render() {
        return <div
            className={css.dialogMask + ' ' + (this.state.open ? css.open : '') + ' ' + (this.state.show ? css.show : '')}
            onMouseDown={this.disableEvent}
            onMouseMove={this.disableEvent}
            onWheel={this.disableEvent}
            onClick={this.bgClick.bind(this)}
        >
            <div className={css.dialog} onClick={this.disableEvent}>
                <div className={css.dialogTitle}>{this.state.title}
                    <div className={css.closeBtn} onClick={this.close.bind(this)}>
                        <i></i>
                        <i></i>
                    </div>
                </div>
                <div className={css.dialogContent}>{this.state.content}</div>
                <div className={css.btnBox}>
                    <button className={css.ok} onClick={this.ok.bind(this)}>确定</button>
                    <button className={css.cancel} onClick={this.cancel.bind(this)}>取消</button>
                </div>
            </div>
        </div>
    }

}

export default Dialog;