import * as React from 'react';

export class CommentsBoxForm extends React.Component {
    constructor() {
        super();
        this.state = {
            author: '',
            text: ''
        }
    }

    resetState() {
        this.setState({
            author:'',
            text:''
        });
    }

    submit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state)
    }

    onAuthorChange(e) {
        console.log(e.target.value);
        const author = e.target.value;
        this.setState((oldState)=> {
            const newState = Object.assign({}, oldState);
            newState.author = author;
            return newState;
        })
    }

    onTextChange(e) {
        console.log(e.target.value);
        const text = e.target.value;
        this.setState((oldState)=> {
            const newState = Object.assign({}, oldState);
            newState.text = text;
            return newState;
        })

    }

    render () {
        return <form action="" className="comments-box__form">
                <textarea id="" cols="30" rows="10"
                          value={this.state.text}
                          placeholder='text'
                          defaultValue=''
                    onInput={(this.onTextChange.bind(this))}>
                    </textarea>
                <input className="comments-box__form-input" type="text"
                       placeholder='name'
                       defaultValue=''
                       onInput={(this.onAuthorChange.bind(this))}/>
                <button className="comments-box__form-button">Add comment</button>
            </form>
    }
}
