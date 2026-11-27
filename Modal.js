export class Modal {
  constructor(modalId) {
    this.modal  = document.getElementById(modalId);
    this.overlay = document.querySelector('.overlay');
    this.closeButton = this.modal.querySelector('.modal__close');

    // IV. Вызываем метод прослушки закрытия прямо в конструкторе
    this.initCloselisteners();
  }

  // I. Метод для открытия модального окна
  open() {
    this.overlay.classList.add('overlay--active');
    this.modal.classList.add('modal-showed');
  }

  // II. Метод для закрытия модального окна
  close() {
    this.overlay.classList.remove('overlay--active');
    this.modal.classList.remove('modal-showed');
  }

  // III. Метод для проверки, открыто ли сейчас модальное окно
  isOpen() {
    return this.modal.classList.contains('modal-showed');
  } 

  // IV. Метод, который слушает крестик ( и фон/Escape) и закрывает модалку
  initCloselisteners() {
    this.closeButton.addEventListener('click', () => {
      this.close();
    });

  
  // Дополнительно: закрытие по клику на затемненный фон
  if (this.overlay) {
    this.overlay.addEventListener('click', (event) => {
      if (event.target === this.overlay) {
        this.close();
      }
    });
  }


  // Дополнительно: закрытие по клавише Escape с использованием метода isOpen()
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && this.isOpen()) {
      this.close();
    }
  });
  }
}