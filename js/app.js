// const shimmerContainer = document.querySelector(".shimmer-container");

// const options = {
//     method: 'GET',
//     headers: {
//         accept: "application/json",
//         "x-cg-demo-api-key": "CG-mDVVqLm5xBDjvcVq523LnAmB",
//     },
// };

// let coins = [];
// let currentPage = 1;
// const rowsPerPage = 30;

// const fetchCoins = async () => {
//     shimmerContainer.style.display = 'flex';
//     try {
//         const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false", options);
//         const data = await response.json();
//         console.log("Fetched data:", data); // Debugging line
//         coins = data;
//         displayCoins(coins, currentPage, rowsPerPage);
//         setupPagination(coins, rowsPerPage);
//     } catch (error) {
//         console.error("Error in fetching coins", error);
//     } finally {
//         shimmerContainer.style.display = 'none';
//     }
// };

// const displayCoins = (coins, page, rowsPerPage) => {
//     const tableBody = document.getElementById("crypto-table-body");
//     tableBody.innerHTML = "";

//     const start = (page - 1) * rowsPerPage;
//     const end = start + rowsPerPage;
//     const paginatedCoins = coins.slice(start, end);

//     paginatedCoins.forEach((coin, index) => {
//         const row = document.createElement("tr");
//         row.innerHTML = `
//             <td>${start + index + 1}</td>
//             <td><img src="${coin.image}" alt="${coin.name}" width="24" height="24" /></td>
//             <td>${coin.name}</td>
//             <td>$${coin.current_price}</td>
//             <td>$${coin.total_volume}</td>
//             <td>$${coin.market_cap}</td>
//             <td><i class="fa-solid fa-star favourite-icon" data-id="${coin.id}" style="color: grey;"></i></td>
//         `;

//         row.querySelector(".favourite-icon").addEventListener("click", (event) => {
//             event.stopPropagation();
//             handleFavClick(coin.id, event.target);
//         });

//         tableBody.appendChild(row);
//     });
// };

// const handleFavClick = (id, target) => {
//     let favoriteCoins = JSON.parse(localStorage.getItem('favorites')) || [];
//     if (target.style.color === "grey") {
//         target.style.color = "gold";
//         if (!favoriteCoins.includes(id)) {
//             favoriteCoins.push(id);
//         }
//     } else {
//         target.style.color = "grey";
//         favoriteCoins = favoriteCoins.filter(coinId => coinId !== id);
//     }
//     localStorage.setItem('favorites', JSON.stringify(favoriteCoins));
// };

// const setupPagination = (coins, rowsPerPage) => {
//     const paginationContainer = document.getElementById("pagination");
//     paginationContainer.innerHTML = "";

//     const pageCount = Math.ceil(coins.length / rowsPerPage);
//     for (let i = 1; i <= pageCount; i++) {
//         const btn = paginationButton(i, coins);
//         paginationContainer.appendChild(btn);
//     }
// };

// const paginationButton = (page, coins) => {
//     const button = document.createElement("button");
//     button.innerText = page;

//     if (currentPage === page) button.classList.add("active");

//     button.addEventListener("click", () => {
//         currentPage = page;
//         displayCoins(coins, currentPage, rowsPerPage);

//         let currentBtn = document.querySelector(".pagenumbers button.active");
//         currentBtn.classList.remove("active");

//         button.classList.add("active");
//     });

//     return button;
// };

// document.addEventListener("DOMContentLoaded", async () => {
//     await fetchCoins();
// });

// const sortCoins = (criteria, order) => {
//     coins.sort((a, b) => {
//         if (order === 'asc') {
//             return a[criteria] - b[criteria];
//         } else {
//             return b[criteria] - a[criteria];
//         }
//     });
//     displayCoins(coins, currentPage, rowsPerPage);
// };

// document.getElementById("sort-price-asc").addEventListener("click", () => sortCoins('current_price', 'asc'));
// document.getElementById("sort-price-desc").addEventListener("click", () => sortCoins('current_price', 'desc'));



const shimmerContainer = document.querySelector(".shimmer-container");

const options = {
    method: 'GET',
    headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-mDVVqLm5xBDjvcVq523LnAmB",
    },
};

let coins = [];
let currentPage = 1;
const rowsPerPage = 15; // Changed to 15 per your request

const fetchCoins = async () => {
    shimmerContainer.style.display = 'flex';
    try {
        const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false", options);
        const data = await response.json();
        console.log("Fetched data:", data); // Debugging line
        coins = data;
        displayCoins(coins, currentPage, rowsPerPage);
        setupPagination(coins, rowsPerPage);
    } catch (error) {
        console.error("Error in fetching coins", error);
    } finally {
        shimmerContainer.style.display = 'none';
    }
};

const displayCoins = (coins, page, rowsPerPage) => {
    const tableBody = document.getElementById("crypto-table-body");
    tableBody.innerHTML = "";

    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedCoins = coins.slice(start, end);

    paginatedCoins.forEach((coin, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${start + index + 1}</td>
            <td><img src="${coin.image}" alt="${coin.name}" width="24" height="24" /></td>
            <td>${coin.name}</td>
            <td>$${coin.current_price}</td>
            <td>$${coin.total_volume}</td>
            <td>$${coin.market_cap}</td>
            <td><i class="fa-solid fa-star favourite-icon" data-id="${coin.id}" style="color: grey;"></i></td>
        `;

        row.querySelector(".favourite-icon").addEventListener("click", (event) => {
            event.stopPropagation();
            handleFavClick(coin.id, event.target);
        });

        tableBody.appendChild(row);
    });
};

const handleFavClick = (id, target) => {
    let favoriteCoins = JSON.parse(localStorage.getItem('favorites')) || [];
    if (target.style.color === "grey") {
        target.style.color = "gold";
        if (!favoriteCoins.includes(id)) {
            favoriteCoins.push(id);
        }
    } else {
        target.style.color = "grey";
        favoriteCoins = favoriteCoins.filter(coinId => coinId !== id);
    }
    localStorage.setItem('favorites', JSON.stringify(favoriteCoins));
};

const setupPagination = (coins, rowsPerPage) => {
    const paginationContainer = document.getElementById("pagination");
    paginationContainer.innerHTML = "";

    const pageCount = Math.ceil(coins.length / rowsPerPage);

    for (let i = 1; i <= pageCount; i++) {
        const button = document.createElement("button");
        button.innerText = i;

        if (i === currentPage) {
            button.classList.add("active");
        }

        button.addEventListener("click", () => {
            currentPage = i;
            displayCoins(coins, currentPage, rowsPerPage);
            document.querySelector("#pagination button.active").classList.remove("active");
            button.classList.add("active");
        });

        paginationContainer.appendChild(button);
    }
};

const searchBox = document.getElementById("search-box");
searchBox.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(searchTerm));
    currentPage = 1;
    displayCoins(filteredCoins, currentPage, rowsPerPage);
    setupPagination(filteredCoins, rowsPerPage);
});

const initFavorites = () => {
    const favoriteCoins = JSON.parse(localStorage.getItem('favorites')) || [];
    const allStars = document.querySelectorAll('.favourite-icon');
    allStars.forEach(star => {
        if (favoriteCoins.includes(star.getAttribute('data-id'))) {
            star.style.color = 'gold';
        }
    });
};

document.addEventListener("DOMContentLoaded", () => {
    fetchCoins();
    initFavorites();
});


const sortCoins = (key, order = 'asc') => {
    coins.sort((a, b) => {
        if (order === 'asc') {
            return a[key] - b[key];
        } else {
            return b[key] - a[key];
        }
    });
    displayCoins(coins, currentPage, rowsPerPage);
};

document.addEventListener("DOMContentLoaded", () => {
    fetchCoins();
    initFavorites();
    document.getElementById('sort-price-asc').addEventListener('click', () => sortCoins('current_price', 'asc'));
    document.getElementById('sort-price-desc').addEventListener('click', () => sortCoins('current_price', 'desc'));
    document.getElementById('sort-volume-asc').addEventListener('click', () => sortCoins('total_volume', 'asc'));
    document.getElementById('sort-volume-desc').addEventListener('click', () => sortCoins('total_volume', 'desc'));
});

