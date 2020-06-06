<template>
  <div id="app">
    <div id="nav-top" class="nav mb-5">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/skills">Skills</router-link> |
      <router-link to="/kakeibo">Kakeibo</router-link> |
      <a href="https://otogemap.herokuapp.com" target="_blank" rel="noopener">IIDX DB</a> |
      <a href="https://nameless-tundra-72223.herokuapp.com/" target="_blank" rel="noopener">My RSS</a>
    </div>
    <div id="main" >
      <transition name="router-transition">
        <router-view/>
      </transition>
    </div>
    <div class="mb-1">&nbsp;</div>
    <div id="nav-bottom" class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/skills">Skills</router-link> |
      <router-link to="/kakeibo">Kakeibo</router-link> |
      <a href="https://otogemap.herokuapp.com">IIDX DB</a> |
      <a href="https://nameless-tundra-72223.herokuapp.com/">My RSS</a>
    </div>
  </div>
</template>

<style>
#app {
margin: 0 auto;
max-width: 1000px;
height: 100vh;
background: #fff;
font-family: 'Avenir', Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
padding: 30px;
}

@media screen and (min-width: 812px) {
  #nav-top {
    display: block;
    width: 100%;
    text-align: center;
    padding: 0 auto;
  }

  #nav-bottom {
    display: none;
  }
}

@media screen and (max-width: 812px) {
  #main {
    margin-bottom: 4rem;
  }

  #nav-top {
    display: none;
  }

  #nav-bottom {
    display: block;
    width: 100%;
    position: fixed;
    left: 0px;
    bottom: 0px;
    z-index: 9999;
    text-align: center;
    padding: 1rem;
    background-color: #62d9a3ee;
  }
}

.nav a {
font-weight: bold;
color: #2c3e50;
}

.nav a.router-link-exact-active {
color: #42b983;
}

/* アニメーション */
/* 表示時 */
.router-transition-enter-active {
animation: flipInY 0.5s;
animation-delay: 0.5s;
opacity: 0;
}

@keyframes flipInY {
  from {
    transform: perspective(800px) rotate3d(0, -1, 0, 180deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  to {
    transform: perspective(800px);
    opacity: 1;
  }
}

.flipInY {
  backface-visibility: visible !important;
  animation-name: flipInY;
}

/* 非表示 */
.router-transition-leave-active {
animation: flipOutY 0.5s;
}

@keyframes flipOutY {
  from {
    transform: perspective(800px);
  }

  to {
    transform: perspective(800px) rotate3d(0, 1, 0, 135deg);
    opacity: 0;
  }
}

.flipOutY {
  animation-duration: 0.75s;
  backface-visibility: visible !important;
  animation-name: flipOutY;
}

.card-context {
  text-align: left;
  margin-left: 0.5rem;
  width: 100%;
}

.no-margin-bottom
{
  margin-bottom: 0;
}

</style>
