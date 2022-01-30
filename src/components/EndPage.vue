<template>
  <footer>
    <a href="https://github.com/ozJSey">Open-source in Github</a>
    <h2>
      Made with <span class="red m">❤️</span> by&nbsp;<span class="red">Oz</span
      >J<span class="red">Sey</span>
    </h2>
  </footer>
</template>

<style lang="scss">
footer {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 0;
  background-color: white;
  font-family: "Poppins", sans-serif;
  .red {
    color: #ff0102;
    &.m {
      margin: 0 1px;
    }
  }
  a {
    width: 100%;
    text-decoration: none;
    text-align: center;
  }
}
</style>
