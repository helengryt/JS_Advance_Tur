

    /*

        Документация:
        
        https://developer.mozilla.org/ru/docs/HTML/HTML5/Constraint_validation
        
        form.checkValidity() > Проверка всех полей формы на валидость
        form.reportValidity() > Проверяет все поля на валидность и выводит сообщение с ошибкой

        formElement.validity > Объект с параметрами валидности поля 
        formElement.setCustomValidity(message) > Метод который задаст validity.valid = false, и при попытке отправки
            сообщения выведет message в браузерный попал

        Классы для стилизации состояния элемента
        input:valid{}
        input:invalid{}

        
        Задание:
        
        Используя браузерное API для валидации форм реализовать валидацию следующей формы:
        

        - Имя пользователя: type:text -> validation: required; minlength = 2;  
            Если пустое выввести сообщение: "Как тебя зовут дружище?!"
        - Email: type: email -> validation: required; minlength = 3; validEmail;
            Если эмейл не валидный вывести сообщение "Ну и зря, не получишь бандероль с яблоками!"
        - Пароль: type: password -> validation: required; minlength = 8; maxlength=16;
            Если пустой вывести сообщение: "Я никому не скажу наш секрет";
        - Количество сьеденых яблок: type: number -> validation: required; minlength = 1; validNumber;
            Если количество 0 вывести эррор с сообщением "Ну хоть покушай немного... Яблочки вкусные"
        - Напиши спасибо за яблоки: type: text -> validation: required; 
            Если текст !== "спасибо" вывести эррор с сообщением "Фу, неблагодарный(-ая)!" используя setCustomValidity();

        - Согласен на обучение: type: checkbox -> validation: required;
            Если не выбран вывести эррор с сообщение: "Необразованные живут дольше! Хорошо подумай!"

        Внизу две кнопки:

        1) Обычный submit который отправит форму, если она валидна.
        2) Кнопка Validate(Проверить) которая запускает методы:
            - yourForm.checkValidity: и выводит на страницу сообщение с результатом проверки
            - yourForm.reportValidity: вызывает проверку всех правил и вывод сообщения с ошибкой, если такая есть

    */
/*var inputName = document.getElementById('nameEnter');
//var nameX = nameV.innerText;

function checkname(e){
    inputName.classList.add(inputName.value.length <= 2 ? 'invalid' : 'valid');
}

checkname();
*/

//var validate = document.querySelector('.submit');

//validate.addEventListener('click', checkname());

/*function checkname(e){
    var inputName = document.querySelector('.name');
    inputName.oninput = () => {
        console.log(inputName.value.length);
    
    if (inputName.value.length <= 2){
        inputName.classList.add('invalid');
    } else {
        inputName.classList.remove('invalid');
        inputName.classList.add('valid');
    }
}
}

checkname();
*/
var inputName = document.querySelector('.name');
var inputEmail = document.querySelector('.email');
var inputPass = document.querySelector('.pass');
var inputApples = document.querySelector('.apples');
var inputThanks = document.querySelector('.thanks');

//var inputName = document.querySelector('.name');


function checkname(inp,opt,message,maxopt){
    //var inputName = document.querySelector('.name');
    inp.oninput = () => {
        console.log(inp.value.length);
    
    if (inp.value.length < opt || inp.value.length > maxopt){
        inp.validity.typeMismatch;
        inp.classList.add('invalid');
        inp.setCustomValidity(message);
    } else {
        inp.classList.remove('invalid');
        inp.classList.add('valid');
        inp.setCustomValidity(" ");
    }
}
}

function checkApples(e){
    inputApples.oninput = () => {
        if (checkApples.value == "0"){
            checkApples.setCustomValidity("Ну хоть покушай немного... Яблочки вкусные");
            checkApples.reportValidity();
        } else {
            checkApples.setCustomValidity(" ");
            checkApples.reportValidity();

        }
    }
}

function checkboxCheck(){
    var cb = document.querySelector('#agreed');
    cb.onclick = () => {
    if(cb.checked) {
        cb.setCustomValidity("Необразованные живут дольше! Хорошо подумай!");
    } else {
        cb.setCustomValidity(" ");
    }
}
}

checkboxCheck();

checkname(inputName, 2, "Как тебя зовут дружище?!");
checkname(inputEmail, 3);
checkname(inputPass, 8,16);
checkname(inputApples, 1,);
checkname(inputThanks);

    