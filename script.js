let userName = prompt(" Введите Ваше имя");
let userSurname = prompt(" Введите Вашу фамилию");
let userFatherName = prompt(" Введите Ваше отчество");
let userAge = prompt("Укажите Ваш возраст");
let userGender = confirm("Ваш пол мужской?");

let genderName = userGender === true ? 'мужской' : 'женский';

 let agree = 'Да';
 let dissagree = 'Нет';
let pansionName;

if (+userAge < 55) {
    pansionName = dissagree;
  } else if (genderName === true && +userAge < 65) {
    pansionName = dissagree;
  } else if (genderName === false && +userAge < 55) {
    pansionName = dissagree;  
  } else {
    pansionName = agree;
  };

alert(`ФИО: ${userSurname} ${userName} ${userFatherName}
Ваш возрас в годах: ${userAge}
Ваш возрас в днях: ${userAge *365}
Через 5 лет Вам будет: ${+userAge + 5}
Ваш пол: ${genderName}
Вы на пенсии: ${pansionName}`);

function foundLettersInString() {
    var notification = 0;
    var letterSearch = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];
    var string = prompt("Введите фразу");
    for (var i = 0; i < string.length; i++)
        for (var j = 0; j < letterSearch.length; j++)
            if (string[i] === letterSearch[j]) {
                ++k;
                break;
            }
    return notification ? notification : "Нет русских букв";
}

alert( foundLettersInString());


