<script setup>
</script>

<template>
  <main>
    <div class="wrapper">
      <div class="info">
        <p>
          ご予約はお電話及びオンラインにてお承りいたします。<br>
          ご利用日の3か月前の00:00よりオンラインで予約を開始いたします。<br>
          ※電話予約は8：30から開始いたします。
          </p>
      </div>
      <ul class="flow">
        <li>
          <div class="icon"><span class="gg-sun01"></span></div>
          <span class="step">STEP.01</span>
          <p>&#91; 施設日程入力 &#93;</p>
        </li>
        <li>
          <div class="icon"><span class="gg-sun02"></span></div>
          <span class="step">STEP.02</span>
          <p>&#91; 情報入力 &#93;</p>
        </li>
        <li>
          <div class="icon"><span class="gg-sun03"></span></div>
          <span class="step">STEP.03</span>
          <p>&#91; 内容確認 &#93;</p>
        </li>
        <li>
          <div class="icon"><span class="gg-sun"></span></div>
          <span class="step">STEP.04</span>
          <p>&#91; 予約完了 &#93;</p>
        </li>
      </ul>
    </div>
  </main>
</template>

<style scoped>
/* ----------------------------------------
共通部分
 ----------------------------------------*/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a:link, a:visited, a:hover, a:active {
  color: #000;
  text-decoration: none;
}
a:hover {
  text-decoration: none;
  opacity: 0.5;
}
img {
  max-width: 100%;
}
li {
  list-style: none;
}
#contents {
  margin:0 auto;
  background-color: #fff;
}
/* ----------------------------------------
RESERVE01
 ----------------------------------------*/
 .wrapper {
  max-width: 1280px;
  min-width: 890px;
  width: 100%;
  margin: 0 auto;
 }
 .info {
  margin-bottom: 3vw;
 }
 .flow {
  position: relative;
  -js-display: flex;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 585px;
  margin: 110px auto 100px;
}
.flow li {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
.step {
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  font-size: 16px;
}
.icon {
  padding: 10px;
}

/* ----------------------------------------
太陽フル
 ----------------------------------------*/
.gg-sun {
 box-sizing: border-box;
 position: relative;
 display: block;
 transform: scale(var(--ggs,1));
 width: 24px;
 height: 24px;
 margin: 0 auto;
 background:
 linear-gradient(to bottom,
 currentColor 4px,transparent 0)
 no-repeat 5px -6px/2px 6px,
 linear-gradient(to bottom,
 currentColor 4px,transparent 0)
 no-repeat 5px 14px/2px 6px,
 linear-gradient(to bottom,
 currentColor 4px,transparent 0)
 no-repeat -8px 5px/6px 2px,
 linear-gradient(to bottom,
 currentColor 4px,transparent 0)
 no-repeat 14px 5px/6px 2px;
 border-radius: 100px;
 box-shadow: inset 0 0 0 2px;
 border: 6px solid transparent;
}
.gg-sun::after,
.gg-sun::before {
 content: "";
 display: block;
 box-sizing: border-box;
 position: absolute;
 width: 24px;
 height: 2px;
 border-right: 4px solid;
 border-left: 4px solid;
 left: -6px;
 top: 5px
}
.gg-sun::before {
 transform: rotate(-45deg)
}
.gg-sun::after {
 transform: rotate(45deg)
}
/* ----------------------------------------
太陽01
 ----------------------------------------*/
.gg-sun01 {
 box-sizing: border-box;
 position: relative;
 display: block;
 transform: scale(var(--ggs,1));
 width: 24px;
 height: 24px;
 margin: 0 auto;
 border-radius: 100px;
 box-shadow: inset 0 0 0 2px;
 border: 6px solid transparent;
}
/* ----------------------------------------
太陽02
 ----------------------------------------*/
.gg-sun02 {
 box-sizing: border-box;
 position: relative;
 display: block;
 transform: scale(var(--ggs,1));
 width: 24px;
 height: 24px;
 margin: 0 auto;
 background:
 linear-gradient(to bottom,
 currentColor 4px,transparent 0)
 no-repeat 5px -6px/2px 6px,
 linear-gradient(to bottom,
 currentColor 4px,transparent 0)
 no-repeat 5px 14px/2px 6px,
 linear-gradient(to bottom,
 currentColor 4px,transparent 0)
 no-repeat -8px 5px/6px 2px,
 linear-gradient(to bottom,
 currentColor 4px,transparent 0)
 no-repeat 14px 5px/6px 2px;
 border-radius: 100px;
 box-shadow: inset 0 0 0 2px;
 border: 6px solid transparent;
}
/* ----------------------------------------
太陽03
 ----------------------------------------*/
.gg-sun03 {
 box-sizing: border-box;
 position: relative;
 display: block;
 transform: scale(var(--ggs,1));
 width: 24px;
 height: 24px;
 margin: 0 auto;
 background:
 /*
 linear-gradient(to bottom,
 currentColor 4px,transparent 0)
 no-repeat 5px -6px/2px 6px,
 linear-gradient(to bottom,
 currentColor 4px,transparent 0)
 no-repeat 5px 14px/2px 6px,*/
 linear-gradient(to bottom,
 currentColor 4px,transparent 0)
 no-repeat -8px 5px/6px 2px,
 linear-gradient(to bottom,
 currentColor 4px,transparent 0)
 no-repeat 14px 5px/6px 2px;
 border-radius: 100px;
 box-shadow: inset 0 0 0 2px;
 border: 6px solid transparent;
}
.gg-sun03::after,
.gg-sun03::before {
 content: "";
 display: block;
 box-sizing: border-box;
 position: absolute;
 width: 24px;
 height: 2px;
 border-right: 4px solid;
 border-left: 4px solid;
 left: -6px;
 top: 5px
}
.gg-sun03::before {
 transform: rotate(-45deg)
}

.gg-sun03::after {
 transform: rotate(45deg)
}
</style>