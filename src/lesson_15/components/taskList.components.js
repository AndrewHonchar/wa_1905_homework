import {Ajax} from "../utils/ajax"

export class TaskList {
    constructor(target) {
        this.target = target;
        this.render();
        Ajax.get(
            (list) => {
            this.renderList(list);
        },
            (xhr) => {
                console.error(xhr.status);
            } );
    }

    render() {
        this.ul = document.createElement('ul');
        this.target.appendChild(this.ul);
    }

    renderList(list) {
        list.forEach((item) => {
            const li = document.createElement('li');
            li.textContent = item.title;
            this.ul.appendChild(li);
        });
    }
}

export class Comments {
    constructor(target) {
        this.target = target;
        this.render();
        Ajax.get(
            'http://localhost:4001/comments',
            (resp) => {
                this.renderCommentsList(resp);
                console.log(resp)
            },
            (e) => {
                console.log(e)
            });
        Ajax.post(
            'http://localhost:4001/list',
            {
                title: 'HELLO WORLD'
            },
            (resp) => {
                console.log(resp);
            },
            (e) => {
                console.error(e);
            }
        )
    }

    render() {
        this.ul = document.createElement('ul');
        this.target.appendChild(this.ul);
    }

    renderCommentsList (resp) {
        resp.forEach((item) => {
            const li = document.createElement('li');
            const span = document.createElement('span');
            const author = document.createElement('li');
            const text = document.createElement('li');
            const date = document.createElement('li');


            author.textContent = item.author;
            text.textContent = item.text;
            date.textContent = item.date;

            this.ul.appendChild(li);
            li.appendChild(span);
            li.appendChild(text);
            li.appendChild(author);
            li.appendChild(date);

        })
    }
}

// import {
//     Ajax
// } from "../utils/ajax";
//
// export class TaskList {
//     constructor(target) {
//         this.target = target;
//         this.render();
//         Ajax.get(
//             'http://localhost:4001/list',
//             (list) => {
//                 this.renderList(list);
//             },
//             (xhr) => {
//                 console.error(xhr.status);
//             }
//         );
//     }
//
//     sendData() {
//         Ajax.post(
//             'http://localhost:4001/list',
//             {
//                 title: this.input.value
//             },
//             (resp) => {
//                 console.log(resp);
//                 this.renderLitstItem(resp);
//             },
//             (e) => {
//                 console.error(e);
//             }
//         )
//     }
//
//     renderLitstItem(item) {
//         const li = document.createElement('li');
//         li.textContent = item.title;
//         this.ul.appendChild(li);
//     }
//
//     render() {
//         this.form = document.createElement('form');
//         this.input = document.createElement('input');
//         this.ul = document.createElement('ul');
//
//         this.input.placeholder = 'Enter task...';
//
//         this.form.addEventListener('submit', (event) => {
//             console.log(event);
//             event.preventDefault();
//             this.sendData();
//         });
//
//         this.form.appendChild(this.input);
//         this.target.appendChild(this.form);
//         this.target.appendChild(this.ul);
//     }
//
//     renderList(list) {
//         list.forEach((item) => {
//             this.renderLitstItem(item);
//         })
//     }
// }