const cookies = document.cookie.split(";").map(cookie => cookie.trim());
    let passCookieFound = false;
    
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split("=");
      if (cookieName === "passcookie" && cookieValue === "true") {
        passCookieFound = true;
        break;
      }
    }

    if (!passCookieFound) {
      window.location.href = "index.html";
    }
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
    const titleText = "您的 GPT 工具";
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
    const subtitleText = "您的 GPT 动力工具一站式资源。";
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

//这个是主题按钮设置
document.addEventListener("DOMContentLoaded", function() {
    const themeButton = document.getElementById("themeButton");
    const themeModal = document.getElementById("themeModal");
    const defaultThemeButton = document.getElementById("defaultThemeButton");
    const purpleThemeButton = document.getElementById("purpleThemeButton");
    const backgroundVideo = document.querySelector(".background-video");
    const toolCards = document.querySelectorAll(".tool-card"); // Select all tool cards

    themeButton.addEventListener("click", function() {
        themeModal.style.display = "block";
    });

    defaultThemeButton.addEventListener("click", function() {
        themeModal.style.display = "none";
        backgroundVideo.style.display = "none";

        // Loop through all tool cards and remove glow animation and shadow
        toolCards.forEach(card => {
            card.style.animation = "none";
            card.style.boxShadow = "none";
        });
    });

    purpleThemeButton.addEventListener("click", function() {
        themeModal.style.display = "none";
        backgroundVideo.style.display = "block";

        // Loop through all tool cards and re-add glow animation and shadow
        toolCards.forEach(card => {
            card.style.animation = "glow 1s infinite alternate";
            card.style.boxShadow = "0 0 30px blue";
        });
    });
});

   
