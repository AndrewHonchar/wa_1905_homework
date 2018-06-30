//1st assignment

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

console.log( randomInteger(1, 10) );


//2nd assignment

let user = {};
user.name = 'Вася';
user.surname = 'Петров';
user.name = 'Сергей';
delete user.name;

console.log(user);

//3rd assignment

function isEmpty(obj) {
    for(let key in obj) {
        return false;
    }
    return true;
}

let schedule = {};
console.log( isEmpty(schedule) );
schedule["8:30"] = "подъём";
console.log( isEmpty(schedule) );

//4th assignment

let salaries = {
    John: 400,
    Jack: 200,
    Luisa:800,
    Lola:1200,
} ;

let calc = 0;
for (let name in salaries) {
    calc += salaries[name];
}

console.log(calc);

//5th assignment

let money = {
    John: 400,
    Jack: 200,
    Luisa:800,
    Lola:1200,
} ;

let max = 0;
let maxName = "";
for (let name in money) {
    if (max < money[name]) {
        max = money[name];
        maxName = name;
    }
}

console.log( maxName || "нет сотрудников" );

//6th assignment

let menu = {
    width: 200,
    height: 600,
    title: "Menu"
};

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (isNumeric(obj[key])) {
            obj[key] *= 2;
        }
    }
}

multiplyNumeric(menu);

console.log( "width=" + menu.width + " height=" + menu.height + " title=" + menu.title );

//8th assignment

let numbers = [];

while (true) {

    let value = prompt("Введите число", 0);

    if (value === "" || value === null || isNaN(value)) break;

    numbers.push(+value);
}

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log( sum );