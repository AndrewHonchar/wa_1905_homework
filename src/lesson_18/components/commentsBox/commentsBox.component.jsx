import * as React from 'react';
import { Ajax } from '../../../lesson_15/utils/ajax';
import { CommentsBoxItem } from './commentsBoxItem.component.jsx';
import {CommentsBoxForm} from './commentsBoxForm.component.jsx';

import './commentsBox.components.scss'

export class CommentsBox extends React.Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
        };
    }

    componentWillMount() {
        this.load();
        //this.sendData();
    }

    load() {
        Ajax.get('http://localhost:4001/comments',
            (resp) => {
                this.setState({
                    tasks: resp
                });
            },
            (e) => {
                console.log(e);
            }
        );
    }

    deleteItem(id) {
        Ajax.delete(
            `http://localhost:4001/comments/${id}`,
            () => {
                const newTasks = this.state.tasks.filter((item) => item.id !== id);
                this.setState({
                    tasks: newTasks
                });


            }
        )
    }

    // sendData() {
    //     Ajax.post(
    //         'http://localhost:4001/comments',
    //         (resp) => {
    //         this.setState({
    //             tasks: resp
    //         });
    //     },
    //         (e) => {
    //             console.error(e);
    //         }
    //     );
    // }

    addComment(comment) {
        Ajax.post(
            'http://localhost:4001/comments',
            comment,
            (task) => {
                this.setState((oldState) => {
                    const newState  = Object.assign({}, oldState);
                    newState.tasks.push(task);
                    return newState;
                });
            },
            (e) => {
                console.error(e);
            }
        );
    }


    render() {
        const listItemsElements = [];

        this.state.tasks.forEach((item) => {
            const li = <CommentsBoxItem
                id={item.id}
                onDelete={this.deleteItem.bind(this)}
                // addData={this.sendData.bind(this)}
                author={item.author}
                text={item.text}
                date={item.date}/>;

            listItemsElements.push(li);
        });

        return <div className="comments-box">
            <CommentBoxForm onSubmit={this.addComment.bind(this)} />
            <button onClick={this.load.bind(this)}>Load data</button>
            <ul className="comments-box__comments">
                {listItemsElements}
            </ul>
        </div>
    }
}