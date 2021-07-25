let watched = [];
let queue = [];

// array for testing
const films = [
  { id: 1, title: 'bloody-cat', genre: 'horror', raiting: 2 },
  { id: 2, title: 'funny-cat', genre: 'comedy', raiting: 8 },
  { id: 3, title: 'sexy-cat', genre: 'porno', raiting: 10 },
  { id: 4, title: 'crazy-cat', genre: 'thriller', raiting: 4 },
];

//***** GET DATA FROM LOCAL STORAGE *****//

//FUNCTION get data about watched films from Local Storage
const getWatchedListFromLocal = function () {
  const watched = localStorage.getItem('watched');
  const parseWatched = JSON.parse(watched);
  return parseWatched;
  //returns array of objects from LocalStorage
};

// FUNCTION get data about queued films from Local Storage
const getQueuedListFromLocal = function () {
  const queued = localStorage.getItem('queue');
  const parseQueued = JSON.parse(queued);
  return parseQueued;
  //returns array of objects from LocalStorage
};

// test
// console.log(getWatchedListFromLocal());
// console.log(getQueuedListFromLocal());

//***** SET DATA TO LOCAL STORAGE *****//

// FUNCTION add data to Local Storage  (Watched)
const addToWatchedListToStorage = function (currentCardId) {
  films.map(item => {
    if (currentCardId === item.id) {
      // if id of current card = id of card in array of objects from server => add card to the array (LOCAL STORAGE)
      watched.push(item);
      // clean array from duplicates
      watched = [...new Set(watched)];
      localStorage.setItem('watched', JSON.stringify(watched));
    }
  });
};

// FUNCTION add data to Local Storage Local Storage  (Queued)
const addToQueuedListToStorage = function (currentCardId) {
  films.map(item => {
    if (currentCardId === item.id) {
      queue.push(item);
      queue = [...new Set(queue)];
      localStorage.setItem('queue', JSON.stringify(queue));
    }
  });
};

// test
// addToWatchedListToStorage(1);
// addToWatchedListToStorage(1);
// addToWatchedListToStorage(2);
// addToWatchedListToStorage(3);

// addToQueuedListToStorage(1);
// addToQueuedListToStorage(1);
// addToQueuedListToStorage(2);
// addToQueuedListToStorage(4);
// addToQueuedListToStorage(3);

export {
  getWatchedListFromLocal,
  getQueuedListFromLocal,
  addToWatchedListToStorage,
  addToQueuedListToStorage,
};
