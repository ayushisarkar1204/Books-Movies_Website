const books = [
    { title: "Psycology of Money", img: "psycologyofmoney.png" },
    { title: "Intelligent Inverstor", img: "intelligentinvestor.jpg" },
    { title: "Be Financially Smart", img: "befinanciallysmart.jpg" }
];

const movies = [
    { title: "The Matrix", img: "thematrix.jpg" },
    { title: "Wolf of the Wall Street", img: "wolfofwallstreet.jpg" },
    { title: "The Dark Knight", img: "thedarkknight.jpg" }
];

const bookList = document.getElementById("book-list");
const movieList = document.getElementById("movie-list");
const searchInput = document.getElementById("search");

// Function to display lists with images
function displayList(items, element) {
    element.innerHTML = "";
    items.forEach(item => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = item.img;
        img.alt = item.title;

        const text = document.createElement("span");
        text.textContent = item.title;

        li.appendChild(img);
        li.appendChild(text);
        element.appendChild(li);
    });
}

// Initial rendering
displayList(books, bookList);
displayList(movies, movieList);

// Search functionality
searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(query));
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query));

    displayList(filteredBooks, bookList);
    displayList(filteredMovies, movieList);
});
