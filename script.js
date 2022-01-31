function foundLettersInString() {
    var notification = 0;
    var letterSearch = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];
    var string = prompt("Введите фразу");
    for (var i = 0; i < string.length; i++)
        for (var j = 0; j < letterSearch.length; j++)
            if (string[i] === letterSearch[j]) {
                ++notification;
                break;
            }
    return notification ? notification : "Нет русских букв";
}

alert( foundLettersInString());

const validation = (fieldName) => {
    let value; 
  if (fieldName === 'возраст') {
      value = +prompt(`Введите Ваш ${fieldName}!`);
    
  while (!value || !Number.isInteger(value)) {
    value = +prompt(`Введите Ваш ${fieldName} правильно!`);
  }
  } else {
    value = prompt(`Введите Ваш ${fieldName}!`);
  
    while (!value) {
    value = prompt(`Введите Ваше ${fieldName} еще раз!`);
  }
}

return value;
};


const getGender = () => {
  return confirm('Вы мужчина?') ? 'мужской' : 'женский';
}

const getPansion = (gender, userAge) => {
  let pension;
if ((gender === "мужской" && userAge > 64) || (gender === "женский" && userAge > 54)) {
 return "да";
} else {
  return "нет";
}
;}

const showInfo = (userSurname, userName, userFatherName, userAge, genderName, pansionName) => {
  alert(`ФИО: ${userSurname} ${userName} ${userFatherName}
Ваш возрас в годах: ${userAge}
Ваш возрас в днях: ${userAge *365}
Через 5 лет Вам будет: ${+userAge + 5}
Ваш пол: ${genderName}
Вы на пенсии: ${pansionName}`);
}


const init = () => {
const userName = validation('имя');
const userSurname = validation('фамилия');
const userFatherName = validation('отчество');
const userAge = validation('возраст');
const gender = getGender();
const pansion = getPansion(gender, userAge);

showInfo(userSurname, userName, userFatherName, userAge, gender, pansion);
};

init();
