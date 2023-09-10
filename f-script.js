// 初始化收藏夹数据
var favorites = [];

// 获取本地存储的收藏夹数据
if (localStorage.getItem("favorites")) {
    favorites = JSON.parse(localStorage.getItem("favorites"));
}

// 切换收藏状态
function toggleFavorite(element) {
    var toolCard = element.parentElement;
    var toolName = toolCard.querySelector("h3").textContent;
    var toolURL = toolCard.querySelector("a").href;

    // 检查是否已经在收藏夹中
    var isFavorite = favorites.some(function(item) {
        return item.name === toolName && item.url === toolURL;
    });

    if (isFavorite) {
        // 从收藏夹中移除
        favorites = favorites.filter(function(item) {
            return !(item.name === toolName && item.url === toolURL);
        });
        element.textContent = "☆";
        alert("已取消收藏！");
    } else {
        // 添加到收藏夹
        favorites.push({ name: toolName, url: toolURL });
        element.textContent = "★";
        alert("已成功添加到收藏夹！");
    }

    // 更新本地存储
    localStorage.setItem("favorites", JSON.stringify(favorites));
    updateFavoritesList();
}

// 更新收藏夹列表
function updateFavoritesList() {
    var favoriteList = document.getElementById("favoriteList");
    favoriteList.innerHTML = "";

    if (favorites.length === 0) {
        favoriteList.innerHTML = "<p>您的收藏夹为空。</p>";
    } else {
        favorites.forEach(function(item) {
            var listItem = document.createElement("li");
            listItem.innerHTML = '<a href="' + item.url + '">' + item.name + '</a>';
            favoriteList.appendChild(listItem);
        });
    }
}

// 初始更新一次收藏夹列表
updateFavoritesList();

// JavaScript代码
function goToFavoritePage() {
    window.location.href = 'favorite.html';
}
