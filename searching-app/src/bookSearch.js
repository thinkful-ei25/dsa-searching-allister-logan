// using binary search
// input: title
// output: dewey + title
function bookSearchBinary(library, book, start = 0, end = library.length - 1) {
  let middle = Math.floor((start + end) / 2);
  if (start > end) {
    return -1;
  }
  //base case
  if (library[middle].title === book.title) {
    return library[middle];
  }
  if (library[middle].dewey < book.dewey) {
    return bookSearchBinary(library, book, middle + 1, end);
  } else if (library[middle].dewey > book.dewey) {
    return bookSearchBinary(library, book, start, middle - 1);
  } else { //dewey are equal
    if (library[middle].title === book.title) {
      return library[middle];
    } else {
      while (library[middle] < library.length && library[middle].dewey === book.dewey) {
        if (library[middle].title === book.title) {
          return library[middle];

        }
        middle++;
      }
      middle--;
      while (library[middle] < library.length && library[middle].dewey === book.dewey) {
        if (library[middle].title === book.title) {
          return library[middle];

        }
        middle--;
      }
      return -1;
    }
  }
}

const library = [
  { dewey: '111.111', title: 'Javascript' },
  { dewey: '111.111', title: 'C++' },
  { dewey: '111.111', title: 'Phython' },
  { dewey: '111.111', title: 'C#' },
  { dewey: '111.111', title: 'ReactJS' }
];

const book = { dewey: '111.111', title: 'sadsa' };
console.log(bookSearchBinary(library, book));
