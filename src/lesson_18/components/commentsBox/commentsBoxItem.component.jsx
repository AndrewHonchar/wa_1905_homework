import * as React from 'react';

export class CommentsBoxItem extends React.Component {
    deleteItem() {
        this.props.onDelete(this.props.id)
    }
    render () {
        return <li id="">
            <div className="list-item__author">{this.props.author}</div>
            <div className="list-item__text">{this.props.text}</div>
            <div className="list-item__data">{this.props.date}</div>
            <button className="btn_delete" onClick={this.deleteItem.bind(this)}>DELETE</button>
        </li>;
    }
}

