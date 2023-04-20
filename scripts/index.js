

const aboutButton = document.querySelector('.profile__button')
const popup = document.querySelector('.popup')
const popupoff = popup.querySelector('.popup__close')
const popupsave = popup.querySelector('.popup__save')
let title = document.querySelector('.profile__title')
let subtitle = document.querySelector('.profile__subtitle')
let formElement = document.querySelector('.popup__form')
let input = document.querySelector('.popup__input_name')
let inputsecond = document.querySelector('.popup__input_job')

const ButtonClick = () => {
    popup.classList.add('popup_opened');
    input.defaultValue = title.textContent;
    inputsecond.defaultValue = subtitle.textContent;
}


const CloseButtonClick = () => {
    popup.classList.remove('popup_opened');
}

aboutButton.addEventListener('click', ButtonClick)
popupoff.addEventListener('click', CloseButtonClick)

function handleFormSubmit(evt) {
    evt.preventDefault();
    title.textContent = input.value;
    subtitle.textContent = inputsecond.value;
    CloseButtonClick('onClick')
}
formElement.addEventListener('submit', handleFormSubmit);



