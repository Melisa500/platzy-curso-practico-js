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