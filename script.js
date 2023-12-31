//界面显示社会主义核心价值观的红色字体
document.addEventListener("DOMContentLoaded", function() {
    var phrases = ["富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善"];
    var isValuesEffectEnabled = true; // 默认启用红色文字效果

    var toggleValuesCheckbox = document.getElementById('toggle-values');
    toggleValuesCheckbox.checked = true; // 设置复选框为选中状态

    // 以前的红色文字动画效果代码
    document.addEventListener('click', function(e) {
        if (!isValuesEffectEnabled) return; // 如果效果被禁用，不执行任何操作

        var randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        var textElement = document.createElement('div');
        textElement.classList.add('floating-text');
        textElement.textContent = randomPhrase;
        textElement.style.left = e.clientX + 'px';
        textElement.style.top = e.clientY + 'px';

        document.body.appendChild(textElement);

        setTimeout(function() {
            textElement.style.transform = 'translateY(-100px)';
            textElement.style.opacity = '0';
        }, 0);

        setTimeout(function() {
            document.body.removeChild(textElement);
        }, 2000);
    });

    // 切换按钮逻辑
    toggleValuesCheckbox.addEventListener('change', function() {
        isValuesEffectEnabled = this.checked;
    });
});



//雪花动画
document.addEventListener("DOMContentLoaded", function() {
    var isSnowfallEnabled = true; // 默认启用雪花效果

    // 创建雪花的函数
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        document.body.appendChild(snowflake);

        const initialX = Math.random() * window.innerWidth;
        const initialY = Math.random() * window.innerHeight;
        snowflake.style.left = `${initialX}px`;
        snowflake.style.top = `-${initialY}px`;

        const fallSpeed = Math.random() * 5 + 5; // 雪花下落速度
        snowflake.style.animationDuration = `${fallSpeed}s`;

        return snowflake;
    }

    // 创建多个雪花的函数
    function createSnowfall(numSnowflakes) {
        for (let i = 0; i < numSnowflakes; i++) {
            createSnowflake();
        }
    }

    // 控制雪花效果的函数
    function toggleSnowfall() {
        isSnowfallEnabled = !isSnowfallEnabled;
        if (isSnowfallEnabled) {
            createSnowfall(25); // 启用时创建雪花
        } else {
            document.querySelectorAll('.snowflake').forEach(snowflake => {
                snowflake.remove(); // 禁用时移除所有雪花
            });
        }
    }

    // 初始创建雪花
    if (isSnowfallEnabled) {
        createSnowfall(25);
    }

    // 给复选框添加事件监听器
    var toggleSnowfallCheckbox = document.getElementById('toggle-snowfall');
    toggleSnowfallCheckbox.addEventListener('change', toggleSnowfall);
});

  
// 菜单栏代码
function toggleMenu() {
            var menu = document.getElementById('menu');
            menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
        }

        function showPopup(popupId) {
    document.getElementById(popupId).style.display = 'block';
    document.getElementById('menu').style.display = 'none';
    document.body.style.overflow = 'hidden'; // Prevent scrolling of the background content
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling of the background content
}

// 搜索框代码
function searchWebsites() {
    var searchInput = document.getElementById('search-input').value.toLowerCase();
    var toolCards = document.querySelectorAll('.tool-card');
    var searchResultsContainer = document.getElementById('search-results');
    searchResultsContainer.innerHTML = ''; // 清空之前的搜索结果

    toolCards.forEach(function(card) {
        var title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(searchInput)) {
            var listItem = document.createElement('li');
            listItem.className = 'search-result-item';
            listItem.innerHTML = card.innerHTML; // 复制卡片内容到列表项
            searchResultsContainer.appendChild(listItem);
        }
    });

    if (searchResultsContainer.children.length === 0) {
        searchResultsContainer.innerHTML = '<p>未找到匹配的结果。</p>';
    }
}



// 获取所有的 .glowing-button 元素
    var buttons = document.querySelectorAll('.glowing-button');

    // 为每个按钮添加点击事件监听器
    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            // 阻止默认的链接行为，这样就不会在当前标签页中打开链接
            event.preventDefault();

            // 获取链接的 href 属性
            var url = button.getAttribute('href');

            // 在新标签页中打开链接
            window.open(url, '_blank');
        });
    });
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
    cursor.textContent = '●';
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
    const subtitleText = "用免费的网站，换取无价的体验。";
    const cursor = document.createElement('span');
    cursor.id = 'cursor';
    cursor.textContent = '●';
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
        top: 1000, // 滚动的目标位置，这里设置为1000px
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
    const backgroundElement = document.querySelector(".background-video");
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
        setBackgroundImage("black.jpg"); // Replace with your image URL
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
        backgroundElement.style.backgroundImage = "none"; // Remove any background image
        backgroundElement.src = videoSource; 
    }

    function setBackgroundImage(imageSource) {
        backgroundElement.src = ""; // Remove the video source
        backgroundElement.style.backgroundImage = `url(${imageSource})`;
        backgroundElement.style.backgroundSize = "cover"; // Cover the entire element
        backgroundElement.style.backgroundPosition = "center"; // Center the image
        backgroundElement.style.backgroundRepeat = "no-repeat"; // Don't repeat the image
    }

    function resetToolCards() {
    toolCards.forEach(card => {
        card.style.animation = "none"; // 移除动画
        card.style.boxShadow = "none"; // 移除阴影效果
        card.style.backgroundColor = "#5D6D7E"; // 设置为冬天主题的背景色
        card.style.border = "5px solid white"; // 设置白色边框
        card.style.color = "#F7F9F9"; // 设置文字颜色，确保与背景对比
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



