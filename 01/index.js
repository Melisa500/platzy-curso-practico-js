let name = 'Melisa';
let lastName = 'Barrera';
let userName = 'Melisa500';
let age = 20;
let mail = 'melisa500@melisacorporation.com';
let estaVieja = false;
let money = 10;
let due = 5;

console.log(`${name} ${lastName}`);
let total = Number(money) - due;
console.log(total);



function message() {
    const name = "Melisa";
    const lastName = 'Barrera';
    const completeName = `${name} ${lastName}`;
    const nickName = 'Meli'

    console.log(`Mi nombre es ${completeName}, pero prefiero que me llames ${nickName}.`);
}

message();


const subscription = 'Expert';

if(subscription === 'Free'){
    console.log('Puedes ver los cursos gratis');
} 
if (subscription === 'Basic'){
    console.log('Puedes tomar casi todos los cursos durante un mes');
}
if (subscription === 'Expert'){
    console.log('Puedes tomar casi todos los cursos durante un año');
}
if(subscription === 'ExpertPlus'){
    console.log('Tu y un amigo tienen acceso a todos los cursos durante un año');
}

//Replicar el ejercicio con array u objetos y un sólo codicional

const subscriptionType = {
    'Free': 'Puedes ver los cursos gratis',
    'Basic': 'Puedes tomar casi todos los cursos durante un mes',
    'Expert': 'Puedes tomar casi todos los cursos durante un año',
    'ExpertPlus':'Tu y un amigo tienen acceso a todos los cursos durante un año' 
};

const objectKeys = Object.keys(subscriptionType);

function messageSubscription(subscription) {
    if(objectKeys.includes(subscription)){
        const message = subscriptionType[subscription];
        console.log(message);
    } else {
        console.log('Tipo de suscripción desconocido');
    }
}

messageSubscription('Free');

//Replicar el for usando bucle while

for (let i = 0; i < 5; i++) {
    console.log(`El valor de i es: ${i}` ); 
}

let i = 0;

while( i < 5){
    const index = i++;
    console.log(`El valor de i es: ${index}` );
}

for (let i = 10; i >= 2; i--) {
    console.log(`El valor de i es: ${i}`)
}

let e = 10

while(e >= 2){
    const index = e--
    console.log(`El valor de i es: ${index}`)
}

//Escribe un código que le pregunte a los usuarios cuánto es 2 + 2 usando prompt(). 
//Si responden bien mostrar un mensaje de felicitaciones, pero si responde mal vuelve a empezar

do {
    var ask = prompt('¿Cuánto es 2 + 2?');
} while (ask !== '4');
console.log('¡Felicidades!');

let fruit = ['mandarina','pera', 'manzana', 'banana', 'naranja'];

function printTheFirst(array){
    console.log(array[0]);
}

printTheFirst(fruit);


function arrayElement(array) {
    array.forEach(element => {
        console.log(element)
    });
}

arrayElement(fruit);


let user = {
    name: 'María',
    age: 20,
    userName: 'Mary123',
    id: 24587,
}

function objectKeys2(objeto) {
    let onlyKeys = Object.keys(objeto);
    console.log(onlyKeys);
}

objectKeys2(user);
