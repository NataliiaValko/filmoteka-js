let watched = [];
let queue = [];
const films = { genre: 'horror', raiting: 10 };

watched.push(JSON.stringify(films));
queue.push(JSON.stringify(films));

localStorage.setItem('watched', watched);
localStorage.setItem('queue', queue);

localStorage.getItem('watched');
localStorage.getItem('queue');
