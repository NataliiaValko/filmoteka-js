let watched = [];
let queue = [];

const films = [
  { id: 1, title: 'bloody-cat', genre: 'horror', raiting: 2 },
  { id: 2, title: 'funny-cat', genre: 'comedy', raiting: 8 },
  { id: 3, title: 'sexy-cat', genre: 'porno', raiting: 10 },
  { id: 4, title: 'crazy-cat', genre: 'thriller', raiting: 4 },
];

// GET DATA FROM LOCAL STORAGE //

//***** Функция получения данных о просмотренных фильмах из Local Storage *****//
const getWatchedListFromLocal = function () {
  const watched = localStorage.getItem('watched');
  const parseWatched = JSON.parse(watched);
  return parseWatched;
  //вернет массив объектов из LocalStorage
};

// Функция получения данных о фильмах в очереди  из Local Storage
const getQueuedListFromLocal = function () {
  const queued = localStorage.getItem('queue');
  const parseQueued = JSON.parse(queued);
  return parseQueued;
  //вернет массив объектов из LocalStorage
};

// test
console.log(getWatchedListFromLocal());
console.log(getQueuedListFromLocal());

//***** SET DATA TO LOCAL STORAGE *****//

// Функция добавления фильма в Local Storage  (Watched)
const addToWatchedListToStorage = function (currentCardId) {
  films.map(item => {
    if (currentCardId === item.id) {
      // если id текущей карточки = id карточки из массива объектов с сервера, то добавляем карточку в массив
      watched.push(item);
      // clean array from duplicates
      watched = [...new Set(watched)];
      localStorage.setItem('watched', JSON.stringify(watched));
    }
  });
};

// Функция добавления фильма в Local Storage  (Watched)
const addToQueuedListToStorage = function (currentCardId) {
  films.map(item => {
    if (currentCardId === item.id) {
      // если id текущей карточки = id карточки из массива объектов с сервера, то добавляем карточку в массив
      queue.push(item);

      queue = [...new Set(queue)];
      localStorage.setItem('queue', JSON.stringify(queue));
    }
  });
};

// test
addToWatchedListToStorage(1);
addToWatchedListToStorage(1);
addToWatchedListToStorage(2);
addToWatchedListToStorage(3);

addToQueuedListToStorage(1);
addToQueuedListToStorage(1);
addToQueuedListToStorage(2);
addToQueuedListToStorage(4);
addToQueuedListToStorage(3);
