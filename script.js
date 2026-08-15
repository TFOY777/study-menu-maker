function makeMenu(level) {

  const result = document.getElementById("result");

  if (level === "high") {
    result.innerHTML = `
      <h3>🔥 しっかり勉強コース</h3>
      <p>数学：3問</p>
      <p>英単語：20語</p>
      <p>理科：30分</p>
      <p>最後に今日の内容を復習しよう！</p>
    `;
  }

  else if (level === "normal") {
    result.innerHTML = `
      <h3>😊 バランスコース</h3>
      <p>数学：2問</p>
      <p>英単語：10語</p>
      <p>理科：15分</p>
      <p>無理せず進めよう！</p>
    `;
  }

  else if (level === "low") {
    result.innerHTML = `
      <h3>😴 ゆっくりコース</h3>
      <p>数学：1問</p>
      <p>英単語：5語</p>
      <p>昨日の内容を10分復習</p>
      <p>今日は少しだけでもOK！</p>
    `;
  }
}


function randomMenu() {

  const menus = [
    "📖 英単語を10語覚える",
    "✏️ 数学の問題を2問解く",
    "🔬 理科を20分勉強する",
    "📝 今日習ったことを復習する",
    "📚 教科書を15分読む"
  ];

  const randomNumber = Math.floor(Math.random() * menus.length);

  document.getElementById("result").innerHTML = `
    <h3>🎲 今日のランダムメニュー</h3>
    <p>${menus[randomNumber]}</p>
  `;
}
