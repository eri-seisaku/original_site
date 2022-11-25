<script setup>
</script>

<template>
  <div css="wrapper">
    <div class="home-content">
      <h1>Welcome to the Sky Village</h1>
      <div class="lang-box">
        <a class="button" href="home">Japanese</a>
        <a class="button" href="fr">French</a>
        <a class="button" href="en">English</a>
      </div>
    </div><!-- /.home-content -->
    <div class="video-area">
      <video id="video" poster="../../assets/movie.jpg" webkit-playsinline playsinline muted autoplay loop>
        <source src="../../assets/movie/sample-movie.mp4" type="video/mp4">
        <!--
        <source src="../../assets/movie/sample-movie.ogv" type="video/ogv">
        <source src="../../assets/movie/movie.webm" type="video/webm">
        -->
        <p>動画を再生できる環境ではありません。</p>
      </video>
    </div>
  </div>
</template>

<style scoped>
/* 共通部分
----------------------------------*/
html {
    font-size:100%;
}/* 100%にすることでデフォルト16px */
body {
    font-family: "Hiragino Sans", "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", "游ゴシック", YuGothic, "メイリオ", Meiryo, sans-serif;
    line-height: 1.7;
    color:#432;
}
li {
  list-style: none;
}
a{
    text-decoration: none;
}/* <a>に初期CSSを解除 */
img{
    max-width: 100%;
}/* 画像が親要素より大きくなることを防ぐ */

/* 動画
----------------------------------*/
.wrapper {
  position: fixed;
  z-index: -1;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
}
#video {
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 177.77777778vh;
  height: 56.25vw;
  min-height: 100%;
  min-width: 100%;
}
.home-content{
  widows: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}
.lang-box {
  display: flex;
  justify-content: space-between;
}

/* 見出し */
h1 {
  font-family: 'Kaushan Script', cursive;
  text-align: center;
  color: #fff;
}
/* ボタン */
.button{
  text-align: center;
  display: inline-block;
  width: 220px;
  font-size: 1.375rem;/* 16×1.375=22px */
  background: #000;
  color:#fff;
  padding: 18px 32px;
  margin: 20px 5px 0 5px;
}
.button:hover{
    background: #666;
}
/* モバイル版
----------------------------------*/
@media (max-width: 600px) {
  .lang-box {
    flex-direction: column;
  }
  .button {
    margin: 0 0 10px 0;
  }
}
</style>