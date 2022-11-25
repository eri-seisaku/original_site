<script setup>
</script>

<template>
  <div id="home" class="big-bg">
         <header class="page-header wrapper">
         <h1 class="logo"><a href="#">LOGO</a></h1>
         <nav>
             <ul class="main-nav">
                 <li><a href="news.html">News</a></li>
                 <li><a href="menu.html">Menu</a></li>
                 <li><a href="contact.html">Contact</a></li>
             </ul>
          </nav>
      </header>
      
         <div class="home-content wrapper">
            <p>text text text text</p>
         </div><!-- /.home-content -->
      </div><!-- /.home-content -->
</template>

<style scoped>
/* 共通部分
----------------------------------*/
html{
    font-size:100%;
}/* 100%にすることでデフォルト16px */
body{
    font-family: "Yu Gothic Medium", "游ゴシック Medium","YuGothic", "游ゴシック体", "ヒラギノ角ゴ Pro M3", sans-serif;
    line-height: 1.7;
    color:#432;
}
li {
  list-style: none;
}
a{
    text-decoration: none;
    color:#432;
}/* <a>に初期CSSを解除 */
img{
    max-width: 100%;
}/* 画像が親要素より大きくなることを防ぐ */
.wrapper{
    max-width: 1100px;/* 横幅最大で1100px */
    margin:0 auto;
    padding:0 4%;/* スマホ用のスペース */
}

/* HEADER
----------------------------------*/
.page-header{
    display: flex;
    justify-content: space-between;
}
.logo{
    width: 210px;
    margin-top: 14px;
}
.main-nav{
    display: flex;
    font-size: 1.25rem;/* 16×1.25=20px */
    text-transform: uppercase;/* すべての文字を大文字に変換させる */
    margin-top:34px;
    list-style: none;
}
.main-nav li{
    margin-left: 36px;
}
.main-nav a{
    color:#432;
}
.main-nav a:hover{
    color:#0bd;
}

/* HOME
----------------------------------*/
.home-content{
    text-align: center;/* Q 親要素、子要素どっちでもいい？ */
    margin-top: 10%;
}
.home-content p{
    font-size: 1.125rem;/* 16×1.125=18px */
    margin: 10px 0 42px;
}
/* 見出し */
.page-title{
    font-size: 5rem;/* 16×5=80px */
    font-family: 'Philosopher', sans-serif;
    text-transform: uppercase;/* すべての文字を大文字に変換させる */
    font-weight: normal;
}

/* ボタン */
.button{
    font-size: 1.375rem;/* 16×1.375=22px */
    background: #0bd;
    color:#fff;
    border-radius: 5px;
    padding: 18px 32px;
}
.button:hover{
    background: #0099aa;
}

/* 大きな背景画像 */
#home{
    background-color: #fff;
    min-height: 100vh;
}
#home .page-title{
    text-decoration: none;/* Q 
    なんでいる？ */
}
</style>