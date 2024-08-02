const TELEGRAM_BOT_TOKEN = '7419254486:AAEmfrYyu45l_G-fDsw1enLe6qoQJxs38uI';
const TELEGRAM_CHAT_ID = '@sadovShop';
// API - адрес куда посылаем запрос
const API = `https://api.telegram.org./bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
// Bot name - order processing
// Username for bot - sadovShopBot
// Name of group with bot - sadovShop


async function sendEmailTelegram(event) {
    event.preventDefault();

    const form = event.target;
    const formBtn = document.querySelector('#form-order #order-button');
    // Оборачиваем в обёртку нашу форму
    const formData = new FormData(form);
    // Получаем данные в виде объекта
    const fromDataObject = Object.fromEntries(formData.entries());

    const {name, phone} = fromDataObject;
    const dataStrFromSite = `Замовлення від ${name}. Номер телефора ${phone}.`;

    try {
        formBtn.textContent = 'Не закривайте цю сторінку, доки надсилаються дані...'
        const response = await fetch(API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: dataStrFromSite
            })
        })
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

