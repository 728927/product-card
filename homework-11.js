import { Modal } from './Modal.js';

// --- Задание №4: Форма подписки в футере ---
const subscribeForm = document.querySelector('.subscribe-form');
const subscribeInput = subscribeForm.querySelector('.subscribe-form__input');

subscribeForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!subscribeInput.checkValidity()) {
    subscribeInput.reportValidity();
    return;
  }

  const emailValue = subscribeInput.value.trim();
  console.log({ email: emailValue });

  subscribeForm.reset();
});


// --- Задание №5-6 (переписано через класс Modal из ДЗ-12)
// Внешняя переменная для хранения данных зарегистрированного пользователя
let user = null;

// Создаем экземпляр модального окна, передавая его ID
const registerModal = new Modal('register-modal');


const openModalBtn = document.querySelector('.register-open-btn');
const registerForm = document.querySelector('.register-form');

// Открываем модальное окно через метод класса
openModalBtn.addEventListener('click', () => {
  registerModal.open();
});

// Обработка отправки формы регистрации
registerForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const passwordInput = registerForm.elements.password;
  const repeatPasswordInput = registerForm.elements.repeatPassword;

  repeatPasswordInput.setCustomValidity('');

  if (passwordInput.value !== repeatPasswordInput.value) {
    repeatPasswordInput.setCustomValidity('Пароли не совпадают'); 
  }

  if (!registerForm.checkValidity()) {
    registerForm.reportValidity();
    alert('Регистрация отклонена! Проверьте правильность заполнения всех полей и совпадение паролей');
    return;
  }

  const formData = new FormData(registerForm);
  const userData = Object.fromEntries(formData.entries());
  delete userData.repeatPassword;

  userData.createdOn = new Date();
  user = userData;

  console.log(user);

  registerForm.reset();
  // Закрываем модальное окно через метод класса
  registerModal.close();
})



