import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divRef = document.querySelector('.gallery')

// 1.Создание и рендер разметки по массиву данных galleryItems 
// и предоставленному шаблону элемента галереи.


// divRef.insertAdjacentHTML('afterbegin', markup)

const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `
            <div class='gallery__item'>
            <a class="gallery__link" href="${original}" >
            <img 
            class="gallery__image" 
            src="${preview}" 
            data-source="${original}" 
            alt="${description}"></a></div>`
  })
  .join("");
//   divRef.insertAdjacentHTML('afterbegin', markup)
divRef.insertAdjacentHTML("afterbegin", markup)
// 2.Реализация делегирования на div.gallery и получение url большого изображения.

let instance ;

divRef.addEventListener('click', openModal );
function openModal(event){
    event.preventDefault();
    if(event.target === event.currentTarget){
        return
    }
    const dataSource = event.target.dataset.source;
   
// console.log(event.target.dataset.source)

 instance = basicLightbox.create(`
 <img src="${dataSource}" width="800" height="600">
 `,
     {
       onClose: removeListener,
       onShow: createListener,
     }
   );
   instance.show();
 }
 
 function createListener() {
   window.addEventListener("keydown", escCloseModal);
 }
 
 function removeListener(instance) {
   window.removeEventListener("keydown", escCloseModal);
 }
 
 function escCloseModal(event) {
   if (event.code === "Escape") {
     instance.close();
   }
 }


// 3.Подключение скрипта и стилей библиотеки модального окна basicLightbox. 
// Используй CDN сервис jsdelivr и добавь в проект ссылки на 
// минифицированные (.min) файлы библиотеки.

// 4.Открытие модального окна по клику на элементе галереи.
// Для этого ознакомься с документацией и примерами.

// 5.Замена значения атрибута src элемента <img> в модальном окне перед открытием. 
// Используй готовую разметку модального окна с 
// изображением из примеров библиотеки basicLightbox.







