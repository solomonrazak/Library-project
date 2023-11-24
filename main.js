const myLibrary = [
  {
    title: "IT",
    category: "Horror",
    author: "Stephen King",
    pages: 306,
    published: "1986",
  },
  {
    title: "The Bourne Identity",
    category: "Action",
    author: "Robert Ludlam",
    pages: 204,
    published: "2002",
  },
  {
    title: "National Geographic",
    category: "Nature",
    pages: 400,
    editor: "Susan Goldberg",
    frequency: "Monthly",
  },
  {
    title: "Rolling Stone",
    category: "Music",
    pages: 234,
    editor: "Jann Wenner",
    frequency: "Monthly",
  },
  {
    title: "The Hunger Games",
    category: "Action",
    author: "Suzanne Collins",
    pages: 890,
    published: "2002",
  },
  {
    title: "Dracula",
    category: "Horror",
    author: "Bram Stroker",
    pages: 568,
    published: "1897",
  },
  {
    title: "A Beautiful Mind",
    category: "Drama",
    author: "Silvia Nasar",
    pages: 678,
    published: "2001",
  },
  {
    title: "Romeo and Juliet",
    category: "Drama",
    author: "William Shakespeare",
    pages: 478,
    published: "1597",
  },
  {
    title: "Hamlet",
    category: "Drama",
    author: "William Shakespeare",
    pages: 389,
    published: "1609",
  },
  {
    title: "The Raven",
    category: "Horror",
    author: "Edgar Allan Poe",
    pages: 367,
    published: "1845",
  },
  {
    title: "The Shining",
    category: "Horror",
    author: "Stephen King",
    pages: 124,
    published: "1977",
  },
  {
    title: "Salems Lot",
    category: "Horror",
    author: "Stephen King",
    pages: 334,
    published: "1975",
  },
];

// function to add books object to table.
function addBookToLibrary(myLibrary) {
  var tableBody = document
    .getElementById("bookTable")
    .getElementsByTagName("tbody")[0];
  for (let i = 0; i < myLibrary.length; i++) {
    // loop through the array
    var row = tableBody.insertRow(i); // insert first row body in the table
    var cell1 = row.insertCell(0); // insert first cell in the first row
    var cell2 = row.insertCell(1); // --- second cell insert
    var cell3 = row.insertCell(2); // --- third cell insert
    var cell4 = row.insertCell(3); // --- 4th cell insert
    var cell5 = row.insertCell(4); // 5th cell insert

    // put the content or data into the cells
    cell1.innerHTML = myLibrary[i].title;
    cell2.innerHTML = myLibrary[i].category;
    cell3.innerHTML = myLibrary[i].author;
    cell4.innerHTML = myLibrary[i].pages;
    cell5.innerHTML = myLibrary[i].published;

    // Create a delete button
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.style.color = "white";
    deleteButton.style.backgroundColor = "gray";
    deleteButton.classList.add("hoverclass1"); // add the hover class from css file.

    // Set a data attribute to store the row index
    deleteButton.setAttribute("data-rowindex", i);

    // Attach a click event to the delete button
    deleteButton.onclick = function () {
      // Call the deleteRow function with the row index
      deleteRow(this.getAttribute("data-rowindex"));
    };
    // Create a new cell for the delete button
    var deleteCell = row.insertCell(5); // Change the index as needed

    // Append the delete button to the new cell
    deleteCell.appendChild(deleteButton);
  }
}

// Function to handle row deletion
function deleteRow(rowIndex) {
  var table = document.getElementById("bookTable");
  table.deleteRow(rowIndex);
}
addBookToLibrary(myLibrary); // call the function to populate the table

// display the form to add a new book when the add book button is clicked
const addBook = document.getElementById("add-new-book");
function displayAdd(e) {
  document.getElementById("new-user").style.display = "block"; // form is displayed
  document.getElementById("bookTable").style.display = "none"; // table is removed.
  e.preventDefault();
  this.remove(); // button is removed.
}

addBook.addEventListener("click", displayAdd);

// to trigger the search function.
document.addEventListener("DOMContentLoaded", function () {
  // Wait for the DOM to be fully loaded
  document.getElementById("myInput").addEventListener("input", mySearch);
});

// search function

function mySearch() {
  var input, i, tr, td, table, filter, txtValue;

  // Get input element and convert input to uppercase
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();

  // Get the table and all table rows
  table = document.getElementById("bookTable");
  tr = table.getElementsByTagName("tr");

  console.log("Filter:", filter);

  // Loop through all rows and hide those that don't match the search criteria
  for (i = 0; i < tr.length; i++) {
    // Get the second column (index 1) in each row
    td = tr[i].getElementsByTagName("td")[0];

    if (td) {
      // Get the text content of the column
      txtValue = td.textContent || td.innerText;
      console.log("Text Value:", txtValue);

      // Check if the text content matches the search criteria
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = ""; // Show the row
      } else {
        tr[i].style.display = "none"; // Hide the row
      }
    }
  }
}

// function to add input form to table as new book added.
document.getElementById("add-book").onclick = function () {
  document.getElementById("bookTable").style.display = "block";
  document.getElementById("new-user").style.display = "none";
  var table = document.getElementById("bookTable"); // grab the table by Id
  var row = table.insertRow(-1); // create the row
  var title = row.insertCell(0); // create the first cell on the row
  var category = row.insertCell(1); // second cell
  var author = row.insertCell(2);
  var pages = row.insertCell(3);
  var published = row.insertCell(4);
  var actions = row.insertCell(5); // New cell for actions

  title.innerHTML = document.getElementById("title").value;
  category.innerHTML = document.getElementById("category").value;
  author.innerHTML = document.getElementById("author").value;
  pages.innerHTML = document.getElementById("pages").value;
  published.innerHTML = document.getElementById("published").value;

  // Create a delete button
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.style.color = "white";
  deleteButton.style.backgroundColor = "gray";
  deleteButton.classList.add("hoverclass1"); // add the hover class from css file.

  // Attach a click event to the delete button
  deleteButton.onclick = function () {
    // Call a function to handle row deletion
    deleteRow(row.rowIndex);
  };

  // Append the delete button to the new cell
  actions.appendChild(deleteButton);

  return false;
};
