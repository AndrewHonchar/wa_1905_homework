import './lesson_11.scss'


//function greeting() {
//    console.log (this);
//    console.log('Hello my name is, ' +this.name);
//}
//
//function Person(name, age) {
//    this.name = name;
//    this.age = age;
//    this.greet = greeting;
//}
//
//const person = new Person('Jeff', 30);
//const person2 = new Person('Bob', 20);
//
//person.greet();
//person2.greet();
//debugger;



function Developer(name, age, lang) {
    this.name = name;
    this.age = age;
    this.lang = lang;
    this.develop = function () {
        console.log('Written code at ' + this.lang);
    }
}

const js = new Developer('Jack', 22, 'js');
const net = new Developer('Sam', 25, 'net');
const c = new Developer('Sam', 25, 'c');


js.develop();
net.develop();
c.develop();























//const products = [
//    {
//        title: 'test',
//        price: '4500'
//    },
//    {
//        title: 'test',
//        price: '2500'
//    },
//    {
//        title: 'test',
//        price: '3500'
//    },
//];
//
//function calcTotal(param) {
//    let total = 0;
//
//    for(let i=0; i < param.length; i++) {
//        console.log(param[i].price);
//        const number = Number(param[i]);
//        if(isNaN(number) === false) {
//            total += number;
//        }
//    }
//    return total;
//}
//
//
//const totalPrice = calcTotal(products);
//console.log(totalPrice);