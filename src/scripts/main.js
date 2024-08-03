// import { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } from "./telegbot-tok.js";

// Bot name - order processing
// Username for bot - sadovShopBot
// Name of group with bot - sadovShop

// API - адрес куда посылаем запрос
const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;


async function sendEmailTelegram(event) {
    event.preventDefault();

    const form = event.target;
    const formBtn = document.querySelector('#form-order #order-button');
    // Оборачиваем в обёртку нашу форму
    const formData = new FormData(form);
    // Получаем данные в виде объекта
    const fromDataObject = Object.fromEntries(formData.entries());

    const {name, phone} = fromDataObject;
    const dataStrFromSite = `Ім'я покупця: ${name} 
Номер телефона: ${phone}`;
    console.log(dataStrFromSite);

    try {
        formBtn.textContent = 'Не закривайте цю сторінку, доки надсилаються дані...'
        const response = await fetch(API, 
            {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: dataStrFromSite
            })
        }
    )
        if (response.ok){
            alert('Дякуємо! Ваше замовлення прийнято. Ми зв`яжемось з Вами найближчим часом.');
            // Чистим форму
            form.reset();
        } else {
            // Создаём ошибку и передаём её объект ответа с ошибкой.
            // Дальше эта ошибка перейдёт в блок catch(error) где её можно обработать
            throw new Error(response.statusText)
        }
    } catch (error) {
        console.error();
        alert('Нажаль ми не отримали Ваші дані. Будь-ласка, знову введіть Ваші дані та натисність на кноку "ОФОРМИТИ ЗАМОВЛЕННЯ".');
    } finally {
        formBtn.textContent = 'ОФОРМИТИ ЗАМОВЛЕННЯ';
    }
}






let sliderBlock = document.querySelector('.slider');
let sliderRow = document.querySelector('.slider__row');
let arrowsBlock = document.querySelector('.slider__arrows');
let widthSliderCell = 440;
sliderRow.style.left = '-440px';

function clickHandler(event) {
    let leftCoordinate = Number(sliderRow.style.left.slice(0, -2))
    let dotsLiveCollection = sliderBlock.getElementsByClassName('slider-dots__item');
    let dotActiveNowElement = sliderBlock.getElementsByClassName('slider-dots__item_active')[0];
    let numberActiveElementNow = Array.from(dotsLiveCollection).indexOf(dotActiveNowElement);
    let nextNumberActiveElement = 0;

    function removeActiveClass(acitveElement) {
        acitveElement.classList.remove('slider-dots__item_active');
    }

    removeActiveClass(dotActiveNowElement);
    // Processing click on left arrow
    if (event.target.classList.contains('slider__arrows_left')) {
        if (leftCoordinate === 0) {
            nextNumberActiveElement = (dotsLiveCollection.length) - 1;
            sliderRow.style.left = '-880px';
        } else  {
            nextNumberActiveElement = numberActiveElementNow - 1;
            sliderRow.style.left = (leftCoordinate + widthSliderCell) + 'px';
        }
    }
    // Processing click on right arrow
    if (event.target.classList.contains('slider__arrows_right')) {
        if (leftCoordinate === -880) {
            sliderRow.style.left = '0px';
            nextNumberActiveElement = 0;
        } else  {
            nextNumberActiveElement = numberActiveElementNow + 1;
            sliderRow.style.left = (leftCoordinate - widthSliderCell) + 'px';
        }
    }
    dotsLiveCollection[nextNumberActiveElement].classList.add('slider-dots__item_active');
}

sliderBlock.addEventListener('click', clickHandler);













// let form = document.getElementById('form-order');


// function validation(form) {
//     let result = true;
//     const arrInputs = form.querySelectorAll('input'); // array of input tags


//     function removeError(input) {
//         const parentOfInput = input.parentNode;
//         if (parentOfInput.classList.contains('error')) {
//             parentOfInput.querySelector('.error-label').remove();
//             parentOfInput.classList.remove('error');
//         }
//     }
    

//     function createError(input, text) {
//         const parentOfInput = input.parentNode;
//         const errorLabel = document.createElement('label');
//         errorLabel.classList.add('error-label');
//         errorLabel.textContent = text + input.placeholder[0].toLowerCase() + input.placeholder.slice(1);
        
//         parentOfInput.classList.add('error');
//         parentOfInput.append(errorLabel);
//     }

//     arrInputs.forEach( input => {
//         removeError(input);

//         if (input.value === '') {
//             createError(input, 'Будь-ласка, ');
//             result = false;
//         }
//     })

//     return result;
// }

// function handlerForm(event) {
//     event.preventDefault();
//     // validation(this) // "this" - это тег form, форма которую мы обрабатываем
//     alert('The form has been validated in HTML.')

//     // if (validation(this) === true) {
//     //     // Скорее всего в этом блоке нужно будет передавать данные в Телеграм
//     //     alert('The form has been validated.');
//     // }
// }

// form.addEventListener('submit', handlerForm);

