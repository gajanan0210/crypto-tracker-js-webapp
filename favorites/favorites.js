// const shimmerContainer = document.querySelector(".shimmer-container");

// const options = {
//     method: 'GET',
//     headers: {
//         accept: "application/json",
//         "x-cg-demo-api-key": "CG-mDVVqLm5xBDjvcVq523LnAmB",
//     },
// };

// let favoriteCoins = [];
// let currentPage = 1;
// const rowsPerPage = 30;

// const fetchFavoriteCoins = async () => {
//     shimmerContainer.style.display = 'flex';
//     try {
//         const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
//         const promises = favorites.map(id => fetch(`https://api.coingecko.com/api/v3/coins/${id}`, options).then(res => res.json()));
//         const data = await Promise.all(promises);
//         console.log("Fetched favorite data:", data); // Debugging line
//         favoriteCoins = data;
//         displayFavoriteCoins(favoriteCoins, currentPage, rowsPerPage);
//         setupPagination(favoriteCoins, rowsPerPage);
//     } catch (error) {
//         console.error("Error in fetching favorite coins", error);
//     } finally {
//         shimmerContainer.style.display = 'none';
//     }
// };

// const displayFavoriteCoins = (coins, page, rowsPerPage) => {
//     const tableBody = document.getElementById("favorites-table-body");
//     tableBody.innerHTML = "";

//     const start = (page - 1) * rowsPerPage;
//     const end = start + rowsPerPage;
//     const paginatedCoins = coins.slice(start, end);

//     paginatedCoins.forEach((coin, index) => {
//         const row = document.createElement("tr");
//         row.innerHTML = `
//             <td>${start + index + 1}</td>
//             <td><img src="${coin.image.small}" alt="${coin.name}" width="24" height="24" /></td>
//             <td>${coin.name}</td>
//             <td>$${coin.market_data.current_price.usd}</td>
//             <td>$${coin.market_data.total_volume.usd}</td>
//             <td>$${coin.market_data.market_cap.usd}</td>
//             <td><i class="fa-solid fa-star favourite-icon" data-id="${coin.id}" style="color: gold;"></i></td>
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
//     if (target.style.color === "gold") {
//         target.style.color = "grey";
//         favoriteCoins = favoriteCoins.filter(coinId => coinId !== id);
//     } else {
//         target.style.color = "gold";
//         if (!favoriteCoins.includes(id)) {
//             favoriteCoins.push(id);
//         }
//     }
//     localStorage.setItem('favorites', JSON.stringify(favoriteCoins));
//     fetchFavoriteCoins(); // Refresh the favorite list
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
//         displayFavoriteCoins(coins, currentPage, rowsPerPage);

//         let currentBtn = document.querySelector(".pagenumbers button.active");
//         currentBtn.classList.remove("active");

//         button.classList.add("active");
//     });

//     return button;
// };

// document.addEventListener("DOMContentLoaded", async () => {
//     await fetchFavoriteCoins();
// });

// const sortCoins = (criteria, order) => {
//     favoriteCoins.sort((a, b) => {
//         if (order === 'asc') {
//             return a.market_data[criteria].usd - b.market_data[criteria].usd;
//         } else {
//             return b.market_data[criteria].usd - a.market_data[criteria].usd;
//         }
//     });
//     displayFavoriteCoins(favoriteCoins, currentPage, rowsPerPage);
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

let favoriteCoins = [];
let currentPage = 1;
const rowsPerPage = 30;

const fetchFavoriteCoins = async () => {
    shimmerContainer.style.display = 'flex';
    try {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const promises = favorites.map(id => fetch(`https://api.coingecko.com/api/v3/coins/${id}`, options).then(res => res.json()));
        const data = await Promise.all(promises);
        console.log("Fetched favorite data:", data); // Debugging line
        favoriteCoins = data;
        displayFavoriteCoins(favoriteCoins, currentPage, rowsPerPage);
        setupPagination(favoriteCoins, rowsPerPage);
    } catch (error) {
        console.error("Error in fetching favorite coins", error);
    } finally {
        shimmerContainer.style.display = 'none';
    }
};

const displayFavoriteCoins = (coins, page, rowsPerPage) => {
    const tableBody = document.getElementById("favorites-table-body");
    tableBody.innerHTML = "";

    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedCoins = coins.slice(start, end);

    paginatedCoins.forEach((coin, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${start + index + 1}</td>
            <td><img src="${coin.image.small}" alt="${coin.name}" width="24" height="24" /></td>
            <td>${coin.name}</td>
            <td>$${coin.market_data.current_price.usd}</td>
            <td>$${coin.market_data.total_volume.usd}</td>
            <td>$${coin.market_data.market_cap.usd}</td>
            <td><i class="fa-solid fa-star favourite-icon" data-id="${coin.id}" style="color: gold;"></i></td>
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
    if (target.style.color === "gold") {
        target.style.color = "grey";
        favoriteCoins = favoriteCoins.filter(coinId => coinId !== id);
    } else {
        target.style.color = "gold";
        if (!favoriteCoins.includes(id)) {
            favoriteCoins.push(id);
        }
    }
    localStorage.setItem('favorites', JSON.stringify(favoriteCoins));
    fetchFavoriteCoins(); // Refresh the favorite list
};

const setupPagination = (coins, rowsPerPage) => {
    const paginationContainer = document.getElementById("pagination");
    paginationContainer.innerHTML = "";

    const pageCount = Math.ceil(coins.length / rowsPerPage);
    for (let i = 1; i <= pageCount; i++) {
        const btn = paginationButton(i, coins);
        paginationContainer.appendChild(btn);
    }
};

const paginationButton = (page, coins) => {
    const button = document.createElement("button");
    button.innerText = page;

    if (currentPage === page) button.classList.add("active");

    button.addEventListener("click", () => {
        currentPage = page;
        displayFavoriteCoins(coins, currentPage, rowsPerPage);

        let currentBtn = document.querySelector(".pagenumbers button.active");
        currentBtn.classList.remove("active");

        button.classList.add("active");
    });

    return button;
};

document.addEventListener("DOMContentLoaded", async () => {
    await fetchFavoriteCoins();
});

const sortCoins = (criteria, order) => {
    favoriteCoins.sort((a, b) => {
        if (order === 'asc') {
            return a.market_data[criteria].usd - b.market_data[criteria].usd;
        } else {
            return b.market_data[criteria].usd - a.market_data[criteria].usd;
        }
    });
    displayFavoriteCoins(favoriteCoins, currentPage, rowsPerPage);
};

document.getElementById("sort-price-asc").addEventListener("click", () => sortCoins('current_price', 'asc'));
document.getElementById("sort-price-desc").addEventListener("click", () => sortCoins('current_price', 'desc'));
