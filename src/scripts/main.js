// The script must run after the HTML page has loaded
/**
* TIMER
*/

function launchShowTimeToMidnight() {
    let hoursCellArray = document.getElementsByClassName('hours');
    let minutesCellArray = document.getElementsByClassName('minutes');
    let secondsCellArray = document.getElementsByClassName('seconds');

    function showTimeToMidnight() {
        let now = new Date();
        let nowHours = now.getHours();
        let nowMinutes = now.getMinutes();
        let nowSeconds = now.getSeconds();

        let hoursToMidnight = 0;
        let minutesToMidnight = 0;
        let secondsToMidnight = 0;

        // Get hours to midnight
        function getHoursToMidnight() {
            if (nowMinutes === 0 && nowSeconds === 0) {
                hoursToMidnight = 24 - nowHours;
            } else {
                hoursToMidnight = 23 - nowHours;
            }
            hoursToMidnight = String(hoursToMidnight);
            return hoursToMidnight.length === 2 ? hoursToMidnight : '0' + hoursToMidnight;
        }

        // Get minutes to midnight
        function getMinutesToMidnight() {
            if (nowMinutes === 0 && nowSeconds === 0) {
                minutesToMidnight = 0;
            } else {
                minutesToMidnight = 59 - nowMinutes;
            }
            minutesToMidnight = String(minutesToMidnight);
            return minutesToMidnight.length === 2 ? minutesToMidnight : '0' + minutesToMidnight;
        }

        // Get seconds to midnight
        function getSecondsToMidnight() {
            if (nowSeconds === 0) {
                secondsToMidnight = 0;
            } else {
                secondsToMidnight = 60 - nowSeconds;
            }
            secondsToMidnight = String(secondsToMidnight);
            return secondsToMidnight.length === 2 ? secondsToMidnight : '0' + secondsToMidnight;
        }

        // Update timer cells

        for (let item of hoursCellArray) {
            item.textContent = getHoursToMidnight();
        }
        for (let item of minutesCellArray) {
            item.textContent = getMinutesToMidnight();
        }
        for (let item of secondsCellArray) {
            item.textContent = getSecondsToMidnight();
        }


        setTimeout(showTimeToMidnight, 200);
    }


    showTimeToMidnight();

}


launchShowTimeToMidnight();


/**
 * 
 * 
 * - - - SLIDER - - -
 * 
 * 
 */

function launchSlider() {
    // let arrowsBlock = document.querySelector('.slider__arrows');
    let sliderBlock = document.querySelector('.slider');
    let sliderRow = document.querySelector('.slider__row');
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

        let leftClick = event.target.classList.contains('slider__arrows_left');
        let rightClick = event.target.classList.contains('slider__arrows_right');

        if (leftClick || rightClick) {
            removeActiveClass(dotActiveNowElement);
            // Processing click on left arrow
            if (leftClick) {
                if (leftCoordinate === 0) {
                    nextNumberActiveElement = (dotsLiveCollection.length) - 1;
                    sliderRow.style.left = '-880px';
                } else {
                    nextNumberActiveElement = numberActiveElementNow - 1;
                    sliderRow.style.left = (leftCoordinate + widthSliderCell) + 'px';
                }
            }
            // Processing click on right arrow
            if (rightClick) {
                if (leftCoordinate === -880) {
                    sliderRow.style.left = '0px';
                    nextNumberActiveElement = 0;
                } else {
                    nextNumberActiveElement = numberActiveElementNow + 1;
                    sliderRow.style.left = (leftCoordinate - widthSliderCell) + 'px';
                }
            }
            dotsLiveCollection[nextNumberActiveElement].classList.add('slider-dots__item_active');
        }
    }


    sliderBlock.addEventListener('click', clickHandler);
}


launchSlider();


/**
 * 
 * 
 * - - - TELEGRAM BOT - - -
 * 
 */
function launchTelegramBot() {
    // API - address where we send the request
    const API = '/api/send-message';

    async function sendEmailTelegram(event) {
        event.preventDefault();

        const form = event.target;
        const formBtn = document.querySelector('#form-order #order-button');
        const formData = new FormData(form);
        const fromDataObject = Object.fromEntries(formData.entries());

        const { name, phone } = fromDataObject;

        try {
            formBtn.textContent = 'Не закривайте цю сторінку, доки надсилаються дані...';
            const response = await fetch(API, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, phone })
            });

            if (response.ok) {
                alert('Дякуємо! Ваше замовлення прийнято. Ми зв`яжемось з Вами найближчим часом.');
                form.reset();
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error(error);
            alert('Нажаль ми не отримали Ваші дані. Будь-ласка, знову введіть Ваші дані та натисність на кнопку "ОФОРМИТИ ЗАМОВЛЕННЯ".');
        } finally {
            formBtn.textContent = 'ОФОРМИТИ ЗАМОВЛЕННЯ';
        }
    }
}


launchTelegramBot();
