    // 检测设备类型
    function detectDeviceType() {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return 'phone';
      } else {
        return 'other';
      }
    }



    // 页面加载时根据设备类型跳转
    window.onload = function() {
      var deviceType = detectDeviceType();
      if (deviceType === 'phone') {
        window.location.href = 'phone.html';
      }
    };

        window.onload = function() {
    setTimeout(() => {
        animateTitle();
        displayUptime();
        setInterval(displayUptime, 1000); // 每秒更新一次运行时间
    }, 1000); // 等待1秒后开始标题动画和运行时间显示
};

function animateTitle() {
    const title = document.getElementById('title');
    const titleText = "ChatGPTHub";
    const cursor = document.createElement('span');
    cursor.id = 'cursor';
    cursor.textContent = '|';
    let cursorVisible = true;

    title.textContent = ''; // Clear the title initially

    setInterval(() => {
        if (cursorVisible) {
            cursor.style.opacity = '0';
            cursorVisible = false;
        } else {
            cursor.style.opacity = '1';
            cursorVisible = true;
        }
    }, 500); // Toggle cursor visibility every 500ms

    let currentTitle = '';
    let currentIndexTitle = 0;

    const typingInterval = setInterval(() => {
        currentTitle += titleText[currentIndexTitle];
        title.textContent = currentTitle;
        title.appendChild(cursor); // Append the cursor

        currentIndexTitle++;

        if (currentIndexTitle >= titleText.length) {
            clearInterval(typingInterval);
            title.removeChild(cursor); // Remove the cursor after typing is done

            // Start subtitle animation after title animation finishes
            setTimeout(animateSubtitle, 500); // Delay before starting subtitle animation
        }
    }, 100); // Type a character every 100ms
}

function animateSubtitle() {
    const subtitle = document.getElementById('subtitle');
    const subtitleText = "碧血涌兮知识源，羽翼丰盈创新潮。聚慧结心免费舞，拂尘扬起智慧桥。";
    const cursor = document.createElement('span');
    cursor.id = 'cursor';
    cursor.textContent = '|';
    let cursorVisible = true;

    subtitle.textContent = ''; // Clear the subtitle initially

    setInterval(() => {
        if (cursorVisible) {
            cursor.style.opacity = '0';
            cursorVisible = false;
        } else {
            cursor.style.opacity = '1';
            cursorVisible = true;
        }
    }, 500); // Toggle cursor visibility every 500ms

    let currentSubtitle = '';
    let currentIndexSubtitle = 0;

    const typingInterval = setInterval(() => {
        currentSubtitle += subtitleText[currentIndexSubtitle];
        subtitle.textContent = currentSubtitle;
        subtitle.appendChild(cursor); // Append the cursor

        currentIndexSubtitle++;

        if (currentIndexSubtitle >= subtitleText.length) {
            clearInterval(typingInterval);
            subtitle.removeChild(cursor); // Remove the cursor after typing is done
        }
    }, 100); // Type a character every 100ms
}

//这是弹窗代码
// 获取弹窗和关闭按钮的元素
var overlay = document.getElementById('overlay');
var closeButton = document.getElementById('closeButton');

// 当页面加载完毕后显示弹窗
window.addEventListener('load', function() {
    overlay.style.display = 'flex';
});

// 点击关闭按钮隐藏弹窗
closeButton.addEventListener('click', function() {
    overlay.style.display = 'none';
});




       function toggleCategory(categoryId) {
    const categories = document.querySelectorAll('.category');
    const buttons = document.querySelectorAll('.category-button');
    categories.forEach((cat) => {
        if (cat.id === categoryId) {
            cat.style.display = 'block';
            setTimeout(() => {
                cat.style.opacity = '1';
                cat.style.transform = 'translateY(0)';
            }, 50);
        } else {
            cat.style.opacity = '0';
            cat.style.transform = 'translateY(20px)';
            setTimeout(() => {
                cat.style.display = 'none';
            }, 500);
        }
    });
    buttons.forEach((btn) => {
        if (btn.classList.contains('active')) {
            btn.classList.remove('active');
        }
    });
    const button = document.querySelector(`#${categoryId}-button`);
    button.classList.add('active');
}



        function displayUptime() {
    const startTime = new Date(Date.UTC(2023, 7, 14, 3, 30)); // 北京时间换算为 UTC
    const currentTime = new Date();
    const uptimeMillis = currentTime - startTime;

    const milliseconds = uptimeMillis % 1000;
    const seconds = Math.floor((uptimeMillis / 1000) % 60);
    const minutes = Math.floor((uptimeMillis / (1000 * 60)) % 60);
    const hours = Math.floor((uptimeMillis / (1000 * 60 * 60)) % 24);
    const days = Math.floor(uptimeMillis / (1000 * 60 * 60 * 24));

    const uptimeElement = document.getElementById('uptime-value');
    uptimeElement.textContent = `${days} 天, ${hours} 小时, ${minutes} 分钟, ${seconds} 秒, ${milliseconds} 毫秒`;
}

// 在 window.onload 函数中使用以下代码调用 displayUptime 函数
setInterval(displayUptime, 1); // 每毫秒更新一次计时器

//点击按钮自动从顶部下滑一段距离
        function scrollToContent() {
    window.scrollTo({
        top: 800, // 滚动的目标位置，这里设置为800px
        behavior: 'smooth' // 平滑滚动效果
    });
}
// 这个是鸣谢名单滚动代码
const scrollToTopButton = document.getElementById('scrollToTop');

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

//这个是主题设置代码
document.addEventListener("DOMContentLoaded", function() {
    const themeButton = document.getElementById("themeButton");
    const themeModal = document.getElementById("themeModal");
    const defaultThemeButton = document.getElementById("defaultThemeButton");
    const purpleThemeButton = document.getElementById("purpleThemeButton");
    const autumnThemeButton = document.getElementById("autumnThemeButton");
    const backgroundVideo = document.querySelector(".background-video");
    const toolCards = document.querySelectorAll(".tool-card");

    let currentTheme = ''; // Track the current theme

    themeButton.addEventListener("click", function() {
        themeModal.style.display = "block";
    });

    defaultThemeButton.addEventListener("click", function() {
        themeModal.style.display = "none";
        setDefaultTheme();
    });

    purpleThemeButton.addEventListener("click", function() {
        themeModal.style.display = "none";
        setPurpleTheme();
    });

    autumnThemeButton.addEventListener("click", function() {
        themeModal.style.display = "none";
        setAutumnTheme();
    });

    function setDefaultTheme() {
        setBackgroundVideo("https://gitcode.net/qq_37688711/gpt/-/raw/main/studio_video_1693712338394.mp4?inline=false");
        resetToolCards();
        currentTheme = 'default';
    }

    function setPurpleTheme() {
        setBackgroundVideo("https://gitcode.net/qq_37688711/gpt/-/raw/main/background.mp4?inline=false");
        setPurpleToolCards();
        currentTheme = 'purple';
    }

    function setAutumnTheme() {
        setBackgroundVideo("https://gitcode.net/qq_37688711/gpt/-/raw/main/autumn.mp4?inline=false");
        setAutumnToolCards();
        currentTheme = 'autumn';
    }

    function setBackgroundVideo(videoSource) {
        backgroundVideo.src = videoSource;
    }

    function resetToolCards() {
        toolCards.forEach(card => {
            card.style.animation = "none";
            card.style.boxShadow = "none";
            card.style.backgroundColor = "#303030";
            card.style.border = "1px solid #444444";
        });
    }

    function setPurpleToolCards() {
        toolCards.forEach(card => {
            card.style.animation = "glow 1s infinite alternate";
            card.style.boxShadow = "0 0 30px blue";
            card.style.backgroundColor = "#303030";
            card.style.border = "1px solid #444444";
        });
    }

    function setAutumnToolCards() {
        toolCards.forEach(card => {
            card.style.animation = "none";
            card.style.boxShadow = "0 0 10px yellow";
            card.style.backgroundColor = "#b34f1d";
            card.style.border = "2px solid yellow";
        });
    }

    // Set default theme on website load
    setDefaultTheme();
});

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


