import RequestService from './request.service';
const requestService = new RequestService();

// Library of values (watch or queue)
const localStorageLibrary = {
  watch: [],
  queue: [],
};

// let btnValue = 'watch';


// ** FUNCTION: GET DATA FROM LOCAL STORAGE  **//
const getDataFromLocalStorage = function (value) {
  return JSON.parse(localStorage.getItem(value));
};

/// ** FUNCTION: ADD DATA TO LOCAL STORAGE  **//
const addDataToLocalStorage = function (currentCardId, btnVal) {
  // const btnValue = btnVal;
  requestService
    .getDescriptionMovie(currentCardId)
    .then(createShortlibraryOfValues)
    .then(res =>{addDataToTheLibrary(res, btnVal)})
    .then(res =>{
      console.log(res);
      setLibraryToLocalStorage(res, btnVal)
      
      });
    // console.log(btnVal);
};

const createShortlibraryOfValues = function (film) {
  const libraryOfValues = {};
  libraryOfValues.id = film.id;
  libraryOfValues.original_title = film.original_title;
  libraryOfValues.release_date = film.release_date;
  libraryOfValues.vote_average = film.vote_average;
  return libraryOfValues;
};

const addDataToTheLibrary = function (film, btnValue) {
  console.log(film);
  localStorageLibrary[btnValue].push(film);

  const arr = localStorageLibrary[btnValue];
  let uniqueArr = arr.reduce((unique, current) => {
    if (!unique.some(obj => obj.id === current.id)) {
      unique.push(current);
    }
    return unique;
  }, []);

  return uniqueArr;
};

const setLibraryToLocalStorage = function (library, btnValue) {
  localStorage.setItem(btnValue, JSON.stringify(library));
  return localStorage;
};


// **Remove film from localStorage for button(remove from...)
const removeFromLibrary = function (val, curId){
  const libraryFromLocalStorage = JSON.parse(localStorage.getItem(val));
  const newAr = libraryFromLocalStorage.filter(n=>{
    return n.id !==Number(curId);
  });
  localStorage.setItem(val, JSON.stringify(newAr));
}



// ** просто ПРОВЕРКи **//
// addDataToLocalStorage();
// addDataToLocalStorage(379686);
// addDataToLocalStorage(379686);
// addDataToLocalStorage(379686);
// addDataToLocalStorage(520763);
// addDataToLocalStorage(520763);

// console.log(getDataFromLocalStorage('watch'));
// console.log(getDataFromLocalStorage('queue'));

export {addDataToLocalStorage,  getDataFromLocalStorage, removeFromLibrary}