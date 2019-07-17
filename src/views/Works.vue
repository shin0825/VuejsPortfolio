<template>
  <div class="container">
    <div class="row mt-4 mb-2">
      <div class="col-lg-6 col-sm-12">
        <div class="p-3 bg-white">
          <h3 class="no-margin-bottom">
            業務
          </h3>
        </div>
      </div>
      <div class="col-lg-6 col-sm-12 border-left border-right">
        <div class="p-3 bg-white">
          <p class="card-context">
            <span class="text-primary">2007.04 - <nowDate /></span>
            - <span>設計・製造</span>
            <br>
            <br>
            <span class="badge"><router-link to="/about">About</router-link></span>
            <span class="badge"><router-link to="/skills">Skills</router-link></span>
            の項にて記載
            <br>
            詳細は、別途問合せ願います
          </p>
        </div>
      </div>
    </div>
    <div class="row mt-4 mb-2">
      <div class="col-lg-6 col-sm-12">
        <div class="p-3 bg-white">
          <h3 class="no-margin-bottom">
            個人製作
          </h3>
        </div>
      </div>
      <div class="col-lg-6 col-sm-12 border-left border-right">
        <div class="p-3 bg-white">
          <p class="card-context">
            <span class="text-primary">2019.06</span>
            <br>
            <span class="badge badge-primary">HTML</span>
            <span class="badge badge-primary">CSS</span>
            <span class="badge badge-primary">Chart.js</span>
            <span class="badge badge-primary">Bootstrap4</span>
            <span class="badge badge-primary">RubyonRails</span>
            <span class="badge badge-primary">PostgreSQL</span>
            <br>
          </p>
          <figure>
            <img class="img-fluid img-thumbnail mx-auto mt-2 mb-2" src="../assets/kakeibo.png" alt="">
            <figcaption>
              <h3>Web家計簿</h3>
              <p>簡単な家計簿です。お財布ごとに出費・収入ログを集計しているので、財布の状況をみることもできます。</p>
            </figcaption>
          </figure>
          <p class="card-context mt-1">
            <span class="text-primary">2019.04 - 2019.05</span>
              - <span>Railsチュートリアル</span>
            <br>
            <a href="https://railstutorial.jp/"><span class="badge badge-primary">RailsTutorial(学習サイト) <i class="fas fa-external-link-alt"></i></span></a>
            <img class="img-fluid img-thumbnail mx-auto mt-2 mb-2" src="../assets/railstutorial.png" alt="">
            <br>
            Rails Tutorial完走により完成したMicropost投稿アプリです。
          </p>

          <p class="card-context mt-1">
            <span class="text-primary">2019.01</span>
              - <span>ポートフォリオ</span>
            <br>
            <span class="badge badge-primary">HTML</span>
            <span class="badge badge-primary">CSS</span>
            <span class="badge badge-primary">Bootstrap4</span>
            <span class="badge badge-primary">AwesomeFont</span>
            <a href="https://startbootstrap.com/template-overviews/resume/"><span class="badge badge-primary">Resume(テンプレート) <i class="fas fa-external-link-alt"></i></span></a>
            <img class="img-fluid img-thumbnail mx-auto mt-2 mb-2" src="../assets/template-portfolio.png" alt="">
            <br>
            テンプレートを元に作成した、私のポートフォリオV1です
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
figure {
  position: relative;
  overflow: hidden;
  width: 400px;
}
figcaption {
  text-align: right;
  vertical-align: bottom;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.6);
  transition: .3s;
  opacity: 0;
}
figcaption h3,
figcaption p {
  color: blue;
  position: absolute;
  left: -100%;
  width: 360px;
  transition: .3s;
}
figcaption h3 {
  top: 30px;
}
figcaption p {
  top: 75px;
}
figure:hover figcaption {
  opacity: 1;
}
figure:hover figcaption h3,
figure:hover figcaption p {
  color: white;
  left: 20px;
}
figure:hover figcaption h3 {
  transition-delay: .2s;
}
figure:hover figcaption p {
  transition-delay: .5s;
}
</style>
