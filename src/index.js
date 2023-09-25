// 今は使ってない

const targetDate = new Date('2023-11-04T09:00:00');

function countdown() {
  const currentDate = new Date(); // 現在の日時を取得
  const timeDifference = targetDate - currentDate;

  // 残りの日数、時間、分、秒を計算
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  // カウントダウン要素に値をセット
  const daysElement = document.getElementById('days');

  daysElement.querySelector('span').style.setProperty('--value', days);

  if (timeDifference <= 0) {
    clearInterval(interval);
    // カウントダウンが終了した際に行う任意の処理を追加できます
  }
}

countdown();