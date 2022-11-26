<script setup>
</script>

<script>
import Header from '../modules/Header.vue'
import Footer from '../modules/Footer.vue'
import Reserve01 from '../modules/Reserve01.vue'
// import Reserve from './Reserve01.vue'
export default {
  components: {
    Header,
    Footer,
    Reserve01,
  }
}
</script>

<template>
<div id="contents">
  <Header />
    <main>
      <Reserve01 />
      <section>
        <img src="https://docomemo.sub.jp/sample-image/img01.jpg" alt="">
        <p>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
      </section>
      <section>
        <img src="https://docomemo.sub.jp/sample-image/img01.jpg" alt="">
        <p>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
      </section>
    </main>
    <Footer />
  </div>
</template>


<style scoped>
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
    padding: 5vw;
  }
  main p {
    padding: 40px 0 20px 0;
  }
  section {
    height: 100vh;
  }
</style>