<template>
  <div class="home">
    <h1 class="mb-1">
      <img src="../assets/shinya.svg" style="margin-right: 0.5rem;" width="180">
      <span id="my-name">NAKAMURA</span>
    </h1>

    <div id="icon" class="mb-3 mr-3">
      <a href="https://github.com/shin0825">
        <font-awesome-icon :icon="['fab', 'github']" color="white" aria-hidden="true"/>
      </a>
    </div>
    <div id="icon" class="mb-3 ml-3">
      <a href="https://twitter.com/s_nakamura_0913">
        <font-awesome-icon :icon="['fab', 'twitter']" color="white" aria-hidden="true"/>
      </a>
    </div>

    <div class="m-9 p-9" style="text-align: center; width: 100%; height: 320px;">
      <img class="img-fluid img-thumbnail mx-auto mb-2" src="../assets/qrcode.png" alt="">
    </div>
  </div>
</template>

<style>
#my-name {
  color: #42b983;
  font-family: 'Saira Extra Condensed';
  font-size: 5.2rem;
  font-weight: 700;
  line-height: 5.5rem;
  vertical-align: middle;
}
#icon {
  background-color: #42b983;
  border-radius: 20%;
  color: #a0f080;
  display: inline-block;
  font-size: 2rem;
  height: 3.5rem;
  line-height: 3.8rem;
  width: 3.5rem;
}
</style>
