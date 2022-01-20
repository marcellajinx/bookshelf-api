const {
  addBookshelfHandler,
  getBookshelfHandler,
  getBookshelfDetailHandler,
  editBookData,
  deleteBookshelf,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookshelfHandler,
  },

  {
    method: 'GET',
    path: '/books',
    handler: getBookshelfHandler,
  },

  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookshelfDetailHandler,
  },

  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookData,
  },

  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookshelf,
  },
];

module.exports = routes;
