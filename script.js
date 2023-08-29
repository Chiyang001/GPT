
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


// 从指定 URL 获取页面内容
// 从指定 URL 获取页面内容
async function fetchPageContent(url) {
    const response = await fetch(url);
    const text = await response.text();
    return text;
}

// 从页面内容中提取日期和时间信息并计算经过的时间
async function displayUptime() {
    const pageContent = await fetchPageContent('http://www.timebie.com/cn/beijing.php');
    
    // 查找当前日期和时间信息的位置
    const currentDateIndex = pageContent.indexOf('Current Date:');
    const currentTimeIndex = pageContent.indexOf('Current Time:');
    
    if (currentDateIndex !== -1 && currentTimeIndex !== -1) {
        // 提取当前日期和时间信息
        const currentDateInfo = pageContent.substring(currentDateIndex, currentTimeIndex);
        const currentTimeInfo = pageContent.substring(currentTimeIndex);
        
        // 解析日期和时间信息
        const currentDateMatch = currentDateInfo.match(/\w+\s*,\s*(\w+)\s+(\d+)\s+(\d{4})/);
        const currentTimeMatch = currentTimeInfo.match(/(\d+):(\d+):(\d+)\s+(AM|PM)/);
        
        if (currentDateMatch && currentTimeMatch) {
            const [, month, day, year] = currentDateMatch;
            const [, hours, minutes, seconds] = currentTimeMatch;
            
            const currentTime = new Date(`${month} ${day}, ${year} ${hours}:${minutes}:${seconds}`);
            const startTime = new Date(Date.UTC(2023, 7, 14, 3, 30));
            const uptimeMillis = currentTime - startTime;

            const secondsElapsed = Math.floor(uptimeMillis / 1000);
            const minutesElapsed = Math.floor(uptimeMillis / (1000 * 60));
            const hoursElapsed = Math.floor(uptimeMillis / (1000 * 60 * 60));
            const daysElapsed = Math.floor(uptimeMillis / (1000 * 60 * 60 * 24));

            const uptimeElement = document.getElementById('uptime-value');
            uptimeElement.textContent = `${daysElapsed} 天, ${hoursElapsed} 小时, ${minutesElapsed} 分钟, ${secondsElapsed} 秒`;
        }
    }
}

window.onload = function() {
    displayUptime();
    setInterval(displayUptime, 1000); // 每秒更新一次计时器
};






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
    const autumnThemeButton = document.getElementById("autumnThemeButton");
    const backgroundVideo = document.querySelector(".background-video");
    const toolCards = document.querySelectorAll(".tool-card"); // Select all tool cards

    themeButton.addEventListener("click", function() {
        themeModal.style.display = "block";
    });

    defaultThemeButton.addEventListener("click", function() {
        themeModal.style.display = "none";
        backgroundVideo.style.display = "none";

        toolCards.forEach(card => {
            card.style.animation = "none";
            card.style.boxShadow = "none";
        });
    });

    purpleThemeButton.addEventListener("click", function() {
        themeModal.style.display = "none";
        backgroundVideo.style.display = "block";

        toolCards.forEach(card => {
            card.style.animation = "glow 1s infinite alternate";
            card.style.boxShadow = "0 0 30px blue";
        });
    });

    autumnThemeButton.addEventListener("click", function() {
        themeModal.style.display = "none";
        backgroundVideo.style.display = "block";
        backgroundVideo.src = "https://gitcode.net/qq_37688711/gpt/-/raw/main/autumn.mp4?inline=false"; // Update the video source

        toolCards.forEach(card => {
            card.style.animation = "none";
            card.style.boxShadow = "0 0 10px yellow";
            card.style.backgroundColor = "#b34f1d";
            card.style.border = "2px solid yellow";
        });
    });
});
