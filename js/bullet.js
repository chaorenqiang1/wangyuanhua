// 函数用于创建新的弹幕
function createDanmaku(text) {
    // Create a new danmaku element
    var danmaku = document.createElement("div");
    danmaku.classList.add("danmaku");
    danmaku.innerText = text;

    // 设置danmaku位置到容器的右边缘
    danmaku.style.right = "0";

    // 设置danmaku顶部位置为0到容器高度之间的随机值
    var container = document.querySelector(".danmaku-container");
    danmaku.style.top = Math.floor(Math.random() * container.offsetHeight) + "px";

    // 添加danmaku到容器
    container.appendChild(danmaku);

    // 将danmaku动画到容器的左边缘
    var animationDuration = 5000; // 5 秒
    var danmakuWidth = danmaku.offsetWidth;
    var containerWidth = container.offsetWidth;
    var distance = containerWidth + danmakuWidth;
    var duration = (distance / containerWidth) * animationDuration;
    danmaku.style.transition = "transform " + duration + "ms linear";
    danmaku.style.transform = "translateX(-" + distance + "px)";

    // 动画完成后从容器中移除弹幕
    setTimeout(function() {
        danmaku.remove();
    }, duration);
}

// 函数生成随机弹幕文本
function generateDanmakuText() {
    var texts = ["王元化故居，历史与现代的交融", "故居修缮，保留历史痕迹，赞！", "感受学术泰斗的生活气息", "优秀古迹遗址，值得一游", "追寻王元化的学术足迹", "武康路100弄，岁月静好的见证", "一座充满故事的花园洋房","感受老上海的风情万种","学术与艺术的完美结合","海派建筑，独具特色","故居游览，受益匪浅","感受历史建筑的韵味"," 古宅新颜，魅力依旧"," 体验老上海的生活","老洋房，新视野","感受学术大家的气息"];
    var index = Math.floor(Math.random() * texts.length);
    return texts[index];
}

// 每2秒生成一个新的弹幕
setInterval(function() {
    var text = generateDanmakuText();
    createDanmaku(text);
}, 1000);