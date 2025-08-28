// 簡單的測試案例
const { getCurrentStatus } = require('../src/app.js');

describe('App Tests', () => {
    test('getCurrentStatus should return initial status', () => {
        expect(getCurrentStatus()).toBe('正常運行');
    });

    test('應用應該正常載入', () => {
        expect(true).toBe(true); // 基本測試確保測試環境正常
    });
});