// Библиотека, в которую будут попадать  данные перед Local Storage
const localStorageLibrary = {
  watchedLibrary: [],
  queueLibrary: [],
};

// array for testing
const films = [
  {
    adult: false,
    backdrop_path: '/wPjtacig0kIkVcTQmXoNt6jbMwo.jpg',
    genre_ids: [28, 35],
    id: 617501,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'Jolt',
    overview: 'Lindy is an acid-tongued woman with rage issues..',
    popularity: 75.362,
    poster_path: '/gYZAHan5CHPFXORpQMvOjCTug4E.jpg',
    release_date: '2021-07-29',
    title: 'Jolt',
    video: false,
    vote_average: 6.6,
    vote_count: 104,
  },
  {
    adult: true,
    backdrop_path: '/wPjtacig0kIkVcTQmXoNt6jbMwo.jpg',
    genre_ids: [28, 35],
    id: 617502,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'Jolt',
    overview: 'Lindy is an acid-tongued woman with rage issues..',
    popularity: 75.362,
    poster_path: '/gYZAHan5CHPFXORpQMvOjCTug4E.jpg',
    release_date: '2021-07-29',
    title: 'Jolt',
    video: false,
    vote_average: 6.6,
    vote_count: 104,
  },
  {
    adult: false,
    backdrop_path: '/wPjtacig0kIkVcTQmXoNt6jbMwo.jpg',
    genre_ids: [28, 35],
    id: 617503,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'Jolt',
    overview: 'Lindy is an acid-tongued woman with rage issues..',
    popularity: 75.362,
    poster_path: '/gYZAHan5CHPFXORpQMvOjCTug4E.jpg',
    release_date: '2021-07-29',
    title: 'Jolt',
    video: false,
    vote_average: 6.6,
    vote_count: 104,
  },
];

// Функция, которая берет данные из Local Storage в зависимости от Value и
// возвращает массив объектов
// Описание:
// value: значение 'queue'  или 'watch'

const getDataFromLocalStorage = function (value) {
  return JSON.parse(localStorage.getItem(value));
};

// Функция, которая добавляет данные в Local Storage в зависимости от Value
// Описание:
// value: значение 'queue'  или 'watch' (берется с кнопки)
// currentCardId: значение текущей карточки, которую добавляем в watch Или queue

// 1). Берет массив всех фильмов и ищет в нем фильм, ID которого = ID текущей карточки.
// 2). Если совпадает то данные объекта попадают в объект-библиотеку localStorageLibrary;
// 3). Удаляються не уникальные (через Set)
// 4) Из библиотеки localStorageLibrary данные отправляются в localStorage;

const addDataToLocalStorage = function (currentCardId, value) {
  films.map(item => {
    if (currentCardId === item.id && value === 'queue') {
      localStorageLibrary.queueLibrary.push(item);
      const queued = [...new Set(localStorageLibrary.queueLibrary)];
      localStorage.setItem('queue', JSON.stringify(queued));
    }
    if (currentCardId === item.id && value === 'watch') {
      localStorageLibrary.watchedLibrary.push(item);
      const queued = [...new Set(localStorageLibrary.watchedLibrary)];
      localStorage.setItem('watch', JSON.stringify(queued));
    }
  });
};

// addDataToLocalStorage(617501, 'queue');
// addDataToLocalStorage(617501, 'queue');
// addDataToLocalStorage(617502, 'queue');
// addDataToLocalStorage(617502, 'watch');
// addDataToLocalStorage(617502, 'watch');

// console.log(getDataFromLocalStorage('queue'));
// console.log(getDataFromLocalStorage('watch'));

export { getDataFromLocalStorage, addDataToLocalStorage };
