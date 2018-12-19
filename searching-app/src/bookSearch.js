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
      while (middle < library.length && library[middle].dewey === book.dewey) {
        if (library[middle].title === book.title) {
          return library[middle];

        }
        
        middle++;
        console.log('after increment ', middle)
        
        
      }
      middle--;
      console.log('after decrement outside loop ', middle)
      while (middle > -1 && library[middle].dewey === book.dewey) {
        if (library[middle].title === book.title) {
          return library[middle];

        }
        middle--;
        console.log('after decrement inside loop', middle)
      }
      console.log('finished')
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

const library2 = [
  { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' },
  { author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' },
  { author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' },
  { author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts' },
  { author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide' },
  { author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies' },
  { author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' },
  { author:'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' },
  { author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane\'s Fighting Ships' },
  { author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }
];

const book = { author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' };
console.log(bookSearchBinary(library2, book));


