<script setup>
</script>

<template>
  <div id="contents">
    <h1>LOGO</h1>
    <header class="sticky">
      <nav>
        <ul class="main-nav">
          <li><a href="#">SUR</a></li>
          <li><a href="#">MENU1</a></li>
          <li><a href="#">MENU2</a></li>
          <li><a href="#">MENU3</a></li>
          <li><a href="#">MENU4</a></li>
          <li><a href="#">MENU5</a></li>
          <li><a href="#">CONTACTEZ</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <section>
        <img src="https://docomemo.sub.jp/sample-image/img01.jpg" alt="">
        <p>
          texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte
        </p>
      </section>
      <section>
        <img src="https://docomemo.sub.jp/sample-image/img01.jpg" alt="">
        <p>
          texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte
        </p>
      </section>
    </main>
  </div>
</template>

<style scoped>
* {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    a {
      text-decoration: none;
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
    header {
      width: 100%;
      margin: 0 auto;
      text-align: center;
      background-color: #fff;
    }
    h1 {
      padding: 40px 10px;
      font-size: 1.5rem;
      line-height: 1.5;
      text-align: center;
    }
    nav {
      padding: 30px 2%;
      width: 100%;
      margin: 0 auto;
      border-bottom: 2px solid #ddd;
    }
    .main-nav {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      flex: 1;
    }
    .main-nav li a {
      padding: 0 10px;
      color: #3c3c3c;
    }
	/* ↓スクロールに応じて要素を固定↓ */
    .sticky {
		position: -webkit-sticky;
		position:sticky;
		top:0;
		z-index: 100;
    }
	/* ↓とらえずの設定あとで削除↓ */
    main {
      text-align: center;
      padding: 10%;
    }
    main p {
      padding: 40px 0 20px 0;
    }
    section {
      height: 100vh;
    }
</style>