// 初期設定
let count = 0;
let explosionNumber = generateExplosionNumber(); // 初回の爆発数を設定
let isExploded = false; // 爆発フラグを追加

// DOM要素の取得
const counterElement = document.getElementById('counter');
const messageElement = document.getElementById('message');
const tapButton = document.getElementById('tapButton');
const resetButton = document.getElementById('resetButton');

// タッチイベントのズーム防止
document.addEventListener('gesturestart', (e) => {
    e.preventDefault();
});

// タッチイベントを利用して連打を改善
tapButton.addEventListener('touchstart', (e) => {
    e.preventDefault(); // タッチイベントのデフォルト動作を防止
    if (!isExploded) { // 爆発していない場合にカウントを増加
        count++;
        counterElement.textContent = count;

        if (count === explosionNumber) {
            messageElement.style.visibility = 'visible'; // メッセージを表示
            isExploded = true; // 爆発フラグを設定
            tapButton.disabled = true; // タップボタンを無効化
            resetButton.style.display = 'block'; // リセットボタンを表示
        }
    }
});

// リセットボタンのクリックイベント
resetButton.addEventListener('click', () => {
    // カウントをリセット
    count = 0;
    counterElement.textContent = count;

    // 新しい爆発数を再計算
    explosionNumber = generateExplosionNumber();

    // メッセージを非表示
    messageElement.style.visibility = 'hidden';

    // 爆発フラグをリセット
    isExploded = false;

    // タップボタンを有効化
    tapButton.disabled = false;

    // リセットボタンを非表示
    resetButton.style.display = 'none';
});

// 爆発数を生成する関数
function generateExplosionNumber() {
    return Math.floor(Math.random() * 120) + 1;
}
