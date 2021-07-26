import RequestService from './request.service';
const requestService = new RequestService();

const localStorageLibrary = {
  watch: [],
  queue: [],
};

// ** Функция получения данных из Local Storage **//
// value (watch или queue)
const getDataFromLocalStorage = function (value) {
  return JSON.parse(localStorage.getItem(value));
};

// ** Функция добавления данных из Local Storage **//
const addDataToLocalStorage = function (currentCardId, buttonValue) {
  // currentCardId - ID текущей карточки фильма
  // buttonValue - значение кнопки (watch или queue)
  const libraryOfValues = {};
  requestService.getDescriptionMovie(currentCardId).then(film => {
    libraryOfValues.currentCardId = film.currentCardId;
    libraryOfValues.original_title = film.original_title;
    libraryOfValues.release_date = film.release_date;
    libraryOfValues.vote_average = film.vote_average;
  });
  if (buttonValue === 'watch') {
    localStorageLibrary.watch.push(libraryOfValues);
    localStorage.setItem('watch', JSON.stringify(localStorageLibrary.watch));
    // FUCKKKKKKKKKKKKK не записывает знасения в local Storage
  }
  if (buttonValue === 'queue') {
    localStorageLibrary.queue.push(libraryOfValues);
    localStorage.setItem('queue', JSON.stringify(localStorageLibrary.queue));
    // FUCKKKKKKKKKKKKK не записывает знасения в local Storage
  }
};

console.log(localStorageLibrary);

addDataToLocalStorage(617502, 'watch');
addDataToLocalStorage(760883, 'watch');
addDataToLocalStorage(760883, 'queue');
addDataToLocalStorage(760883, 'queue');
addDataToLocalStorage(385128, 'queue');
