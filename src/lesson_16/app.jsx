import * as React from 'react';
import { render } from 'react-dom';
import { Ajax } from '../lesson_15/utils/ajax';

class Header extends React.Component {
    render() {
        const test = 'HELLO FORM CONST';
        return <header className='page-header'>Here will be page header, {test}</header>
    }
}

class Content extends React.Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
        };

        Ajax.get(
            'http://localhost:4001/comments',
            (resp) => {
                this.setState({
                    tasks: resp
                });
            },
            (e) => {
                console.log(e);
            }
        )
    }

    render() {
        const listItemsElements = [];

        this.state.tasks.forEach((item) => {
            const li = <li>{ item.title }</li>;
            const author = <li> { item.author } </li>;
            const text = <li> { item.text} </li>;
            const date = <div> { item.date} </div>;


            listItemsElements.push(li , author, text, date);
        });

        return <main className='page-content'>{ listItemsElements }</main>
    }
}

class App extends React.Component {
    render() {
        return <div>
            <Header  />
            <Content />
        </div>
    }
}

render(<App />, document.querySelector('#app'));