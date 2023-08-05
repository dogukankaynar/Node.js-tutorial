const books = [
  { name: "Kitap 1", author: "Yazar 1" },
  { name: "Kitap 2", author: "Yazar 2" },
  { name: "Kitap 3", author: "Yazar 3" },
];

const listBooks = () => {
  books.map((book) => {
    console.log(book.name);
  });
};

const addBook = (newBook) => {
  new Promise((resolve, reject) => {
    books.push(newBook);
    resolve(books);
    // reject('BIR HATA OLUSTU');
  });
};
 const showBooks = async () => {
  try {
    addBook({ name: "Dogkan", author: "Kaynar" });
    listBooks();
  } catch (error) {
    console.log(error);
  }
};
module.exports=showBooks
