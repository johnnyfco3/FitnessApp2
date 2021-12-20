<template>
  <main>
      <header>
          <img src="" alt="website logo">
      </header>

      <section class="page-content">
          <div class="left">
              <h1>Fitness App</h1>
              <img src="https://marmotamaps.com/de/fx/wallpaper/download/faszinationen/Marmotamaps_Wallpaper_Inntal_Desktop_1920x1080.jpg" alt="">
          </div>
          <div class="right">
            <div class="card">
                <div class="card-content">
                    <div class="media-content">
                        <h1>Login</h1>
                    </div>

                    <div class="card-content">
                            <div class="field">
                            <label class="label">Username</label>
                            <div class="control has-icons-left has-icons-right">
                                <input class="input" type="text">
                                <span class="icon is-small is-left">
                                <i class="fas fa-user"></i>
                                </span>
                            </div>
                            </div>

                            <div class="field">
                            <label class="label">Password</label>
                            <div class="control has-icons-left has-icons-right">
                                <input class="input" type="email">
                                <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i>
                                </span>
                            </div>
                            </div>

                            <div class="field">
                            <div class="control">
                                <label class="checkbox">
                                <input type="checkbox">
                                I agree to the <a href="#">terms and conditions</a>
                                </label>
                            </div>
                            </div>

                            <div class="control">
                                <button class="button is-link">Login</button>
                            </div>
                    </div>
                </div>
            </div>
          </div>
      </section>
  </main>
</template>

<script>
export default {

}
</script>

<style scoped>
.page-content{
    width: 80%;
    margin: auto;
    padding: 60px 0;
    display: flex;
}
.page-content .left{
    flex-basis: 95%;
}
.page-content .left h1{
    text-align: center;
    font-size: 40px;
    font-weight: 600;
    padding-bottom: 10px;
    padding-right: 30px;
}
.page-content .left img{
    width: 90%;
    height: 50vh;
}
.page-content .right{
    flex-basis: 95%;
    width: 50%;
}
.page-content .right .card{
    height: 60vh;
}
.media-content h1{
    text-align: center;
    font-size: 50px;
    font-weight: 700;
    color: cadetblue;
}
</style>