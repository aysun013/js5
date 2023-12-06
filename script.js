

let list = document.getElementById('list');
let select = document.getElementById('select').value;


let car1 = {
    marka : 'Bmw',
    model : 'F30',
    color : 'Red',
    image : 'https://i.pinimg.com/originals/de/82/4d/de824d4727f5e9de2fd863b04f610926.jpg'
};

let car2 = {
    marka : 'Mercedes',
    model : '190',
    color : 'Red',
    image : 'https://i.redd.it/5lb64f7ton351.jpg'
}

let data = ''

function selectCar(car){
    for (let key in car1){
        data += `<li> ${key}: ${car1[key]}</li>`
    }
    for (let key in car2){
        data += `<li> ${key}: ${car2[key]}</li>`
    }
   

//    console.log(data)
list.innerHTML = data

}

selectCar.call(car1);
// selectCar.call(car2);


