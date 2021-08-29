// const title = document.querySelector('#title');
// const author = document.querySelector('#author');
// const year = document.querySelector('#year');
// const btn = document.querySelector('.btn');
// const bookList = document.querySelector('#book-list');

// btn.addEventListener('click', function(e) {
//     e.preventDefault();

//     // Basic Validation
//     if (title.value == '' && author.value == '' && year.value == '') {
//         alert('Please input your information.');
//     } else {
//         const newRow = document.createElement('tr');

//         // Creating new title
//         const newTitle = document.createElement('th');
//         newTitle.innerHTML = title.value;
//         newRow.appendChild(newTitle);

//         // Creating new author
//         const newAuthor = document.createElement('th');
//         newAuthor.innerHTML = author.value;
//         newRow.appendChild(newAuthor);

//         // Creating new Year
//         const newYear = document.createElement('th');
//         newYear.innerHTML = year.value;
//         newRow.appendChild(newYear);

//         // Displaying in UI
//         bookList.appendChild(newRow);
//     }
// });

// selecting element 
// const title = document.getElementById("title")
// const author = document.getElementById("author")
// const year = document.getElementById("year")
// const btn = document.querySelector(".btn")
// const bookList = document.getElementById("book-list")

// // add event
// btn.addEventListener('click', function(e) {
//     e.preventDefault();

//     // basic validation
//     if (title.value === '' && author.value === '' && year.value === '') {
//         alert('please write something')
//     } else {
//         const newRow = document.createElement('tr');
//         // create title 
//         const newTitle = document.createElement('th');
//         newTitle.innerHTML = title.value;
//         newRow.appendChild(newTitle);

//         // create author
//         const newAuthor = document.createElement('th');
//         newAuthor.innerHTML = author.value;
//         newRow.appendChild(newAuthor);


//         const newYear = document.createElement('th');
//         newYear.innerHTML = year.value;
//         newRow.appendChild(newYear)

//         bookList.appendChild(newRow)

//     }
// })
// selecting element 
const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");
const btn = document.querySelector(".btn");
const bookList = document.getElementById("book-list");

btn.addEventListener('click', function(e) {
    e.preventDefault();
    if (title.value === '' && author.value === '' && year.value === '') {
        alert('please fill all statement')
    } else {
        const newRow = document.createElement('tr')

        // creating title 
        const newTitle = document.createElement('th');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);

        // creating author 
        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);

        // creating title 
        const newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear)

        // display result

        bookList.appendChild(newRow)
    }
})