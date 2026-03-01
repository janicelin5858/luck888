// ---------- 輪播功能 ----------
let full = document.getElementsByClassName("full")[0];
let x = 0;  // 用來儲存當前顯示的圖片索引

// 點擊 "prev" 按鈕切換上一張圖片
document.getElementById("prev").addEventListener("click", function() {
    x = (x === 0) ? 2 : x - 1;  // 當 x 為 0 時切換到最後一張圖片
    full.style.transform = "translateX(" + (-100 / 3) * x + "%)";  // 移動圖片
});

// 點擊 "next" 按鈕切換下一張圖片
document.getElementById("next").addEventListener("click", function() {
    x = (x === 2) ? 0 : x + 1;  // 當 x 為 2 時切換到第一張圖片
    full.style.transform = "translateX(" + (-100 / 3) * x + "%)";  // 移動圖片
});

// 自動輪播，每 2500 毫秒切換一次圖片
let slideRun = setInterval(function() {
    x = (x === 2) ? 0 : x + 1;  // 當 x 為 2 時切換到第一張圖片
    full.style.transform = "translateX(" + (-100 / 3) * x + "%)";  // 移動圖片
}, 2500);


