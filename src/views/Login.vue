<template>
  <main>
      <header>
          <img src="" alt="website logo">
      </header>

      <section class="page-content">
            <div class="card">
                <div class="card-content">
                    <div class="media-content">
                        <h1>Login</h1>
                    </div>

                    <div class="card-content">
                        <form @submit.prevent="login()">
                            <div class="field">
                            <label class="label">Username</label>
                            <div class="control has-icons-left has-icons-right">
                                <input class="input" type="text" v-model="username">
                                <span class="icon is-small is-left">
                                <i class="fas fa-user"></i>
                                </span>
                            </div>
                            </div>

                            <div class="field">
                            <label class="label">Password</label>
                            <div class="control has-icons-left has-icons-right">
                                <input class="input" type="password" v-model="password">
                                <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i>
                                </span>
                            </div>
                            </div>

                            <div class="field">
                            <div class="control">
                                <label class="checkbox">
                                <input type="checkbox">
                                Remember me
                                </label>
                            </div>
                            </div>

                            <footer class="card-footer">
                                <button type="submit" class="button is-link card-footer-item">Login</button>
                            </footer>
                        </form>
                    </div>
                </div>
            </div>
      </section>
  </main>
</template>

<script>
import Session from '../service/session'

export default {
    data() {
        return {
            username: null,
            password: null,
            Session
        }
    },
    methods: {
        login(){
            this.Session.Login(this.username, this.password)
        }
    },
}
</script>

<style scoped>
main{
    background: url('https://iphonewallpaperblack.files.wordpress.com/2019/04/dark-iphone-wallpaper-ashueffects-1-1.jpg?w=640');

}
.page-content{
    height: 100vh;
    width: 100vh;
    margin: auto;
    padding: 60px 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.page-content .card{
    width: 90%;
    height: 80%;
    border-radius: 2rem;
    background-color:rgb(218, 210, 210);
}

.media-content h1{
    text-align: center;
    font-size: 50px;
    font-weight: 700;
    color: cadetblue;
}
form input, form button{
    border-radius: 1rem;
}
form label, form button{
    font-size: 18px;
}
form label{
    padding-top: 15px;
}
</style>