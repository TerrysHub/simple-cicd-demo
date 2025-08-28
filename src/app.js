// 簡單的狀態管理
let currentStatus = '正常運行';

function updateStatus() {
    const statuses = ['正常運行', '更新中', '維護中', '已就緒'];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    currentStatus = randomStatus;
    document.getElementById('status').textContent = `狀態：${currentStatus}`;
}

function getCurrentStatus() {
    return currentStatus;
}

// 導出給測試使用（Node.js環境）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { getCurrentStatus, updateStatus };
}