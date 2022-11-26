<script setup>
</script>

<template>
  <footer>
    <nav>
      <ul>
        <li><a href="#">個人情報保護方針</a></li>
        <li><a href="#">利用規約</a></li>
      </ul>
    </nav>
    <p><small>&copy; 2022 Sky Village</small></p>
  </footer>
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
FOOTER
 ----------------------------------------*/
 footer {
  background-color: #fff;
  color: #000;
  border-top: solid 2px #ddd;
  font-size: 0.75em;
  padding: 2vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
 }
 footer nav ul {
  display: flex;
  align-items: center;
 }
 footer nav ul li {
  display: flex;
  align-items: center;
  margin: 0 20px 0 0;
 }
</style>