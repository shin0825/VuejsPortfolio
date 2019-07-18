<template>
  <div class="kakeibo">
    <h1 class="title mb-1">
      <p class="fadeInDown">
        Web家計簿
      </p>
    </h1>
    <h3>
      個人的に使いたくて作成したRailsアプリ
    </h3>
    <h5>
      <span class="text-primary">2019.06~</span>
    </h5>
    <span class="badge badge-primary">HTML</span>
    <span class="badge badge-primary">CSS</span>
    <span class="badge badge-primary">Chart.js</span>
    <span class="badge badge-primary">Bootstrap4</span>
    <span class="badge badge-primary">RubyonRails</span>
    <span class="badge badge-primary">PostgreSQL</span>
    <div class="section">
      <div class="row mt-4 mb-2">
        <div class="col-lg-6 col-sm-12">
          <div class="p-3 bg-white">
            <h3 class="no-margin-bottom">
              日々の出費を記録
            </h3>
          </div>
        </div>
        <div class="col-lg-6 col-sm-12 border-left border-right">
          <div class="p-3 bg-white">
            <figure>
              <img class="img-fluid img-thumbnail"
                src="../static/kakeibo-spend.png" >
              <figcaption>
                <p>
                  よく使う財布と出費理由は<br>
                  先頭になるようにソート<br>
                  使った金額を毎日入力。
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      <div class="row mt-4 mb-2">
        <div class="col-lg-6 col-sm-12">
          <div class="p-3 bg-white">
            <h3 class="no-margin-bottom">
              予算を記録
            </h3>
          </div>
        </div>
        <div class="col-lg-6 col-sm-12 border-left border-right">
          <div class="p-3 bg-white">
            <figure>
              <img class="img-fluid img-thumbnail"
                src="../static/kakeibo-budget.png" >
              <figcaption>
                <p>
                  年月と出費理由ごとに<br>
                  いくら使うか予算を立てられる
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      <div class="row mt-4 mb-2">
        <div class="col-lg-6 col-sm-12">
          <div class="p-3 bg-white">
            <h3 class="no-margin-bottom">
              出費と収入を確認
            </h3>
          </div>
        </div>
        <div class="col-lg-6 col-sm-12 border-left border-right">
          <div class="p-3 bg-white">
            <figure>
              <img class="img-fluid img-thumbnail"
                src="../static/kakeibo-summaries.png" >
              <figcaption>
                <p>
                  出費理由ごとに出費額を表示<br>
                  収入理由ごとに収入額も表示<br>
                  出費は予算を立てれば比較可能
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      <div class="row mt-4 mb-2">
        <div class="col-lg-6 col-sm-12">
          <div class="p-3 bg-white">
            <h3 class="no-margin-bottom">
              お財布ごとの残額
            </h3>
          </div>
        </div>
        <div class="col-lg-6 col-sm-12 border-left border-right">
          <div class="p-3 bg-white">
            <figure>
              <img class="img-fluid img-thumbnail"
                src="../static/kakeibo-wallets.png" >
              <figcaption>
                <p>
                  出費は財布マスタに紐づけ<br>
                  正しく記録すれば残額がわかる
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      <div class="row mt-4 mb-2">
        <div class="col-lg-6 col-sm-12">
          <div class="p-3 bg-white">
            <h3 class="no-margin-bottom">
              お財布間のお金の移動
            </h3>
          </div>
        </div>
        <div class="col-lg-6 col-sm-12 border-left border-right">
          <div class="p-3 bg-white">
            <figure>
              <img class="img-fluid img-thumbnail"
                src="../static/kakeibo-trans.png" >
              <figcaption>
                <p>
                  振替機能もあるので<br>
                  お金の移動も記録可能
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style>
figure {
}
figure h3 {
  margin: 1rem;
  text-align: right;
}
figure p {
  margin: 1rem;
  text-align: right;
}
</style>
