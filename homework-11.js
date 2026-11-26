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





// Внешняя переменная для хранения данных зарегистрированного пользователя
let user = null;

const openModalBtn = document.querySelector('.register-open-btn');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const closeModalBtn = modal.querySelector('.modal__close');
const registerForm = modal.querySelector('.register-form');

// Функции открытия и закрытия модального окна
const openModal = () => {
  overlay.classList.add('overlay--active');
  modal.classList.add('modal-showed');
};

const closeModal = () => {
  overlay.classList.remove('overlay--active');
  modal.classList.remove('modal-showed');
};

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);


// Закрытие при клике на затемнённый фон вне модального окна
overlay.addEventListener('click', (event) => {
  if (event.target === overlay) {
    closeModal();
  }
});

// Закрытие по клавише Escape
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('modal-showed')) {
    closeModal();
  }
});

// Обработка отправки формы регистрации
registerForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const passwordInput = registerForm.elements.password;
  const repeatPasswordInput = registerForm.elements.repeatPassword;


  // Сбрасываем прошлую кастомную ошибку перед проверкой
  repeatPasswordInput.setCustomValidity('');


  // Проверяем совпадение паролей
  if (passwordInput.value !== repeatPasswordInput.value) {
    repeatPasswordInput.setCustomValidity('Пароли не совпадают');
  }

  // Проверяем валидность всей формы через checkValidity()
  if (!registerForm.checkValidity()) {
    registerForm.reportValidity();
    alert('Регистрация отклонена! Проверьте правильность заполнения всех полей и совпадение паролей.');
    return;
  }

  // Собираем данные формы в объект
  const formData = new FormData(registerForm);
  const userData = Object.fromEntries(formData.entries());


  // Удаляем лишнее поле повторения пароля (при желании можно оставить)
  delete userData.repeatPassword;
  

  // Добавляем время создания и сохраняем во внешнюю переменную user
  userData.createdOn = new Date();
  user = userData;

  console.log(user);

  // Очищаем форму и закрываем модальное окно
  registerForm.reset();
  closeModal();
});
