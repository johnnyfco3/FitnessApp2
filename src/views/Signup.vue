<template>
  <main>
      <header>
          <img src="" alt="website logo">
      </header>

      <section class="page-content">
            <div class="card">
                <div class="card-content">
                    <div class="media-content">
                        <h1>Sign Up</h1>
                    </div>

                    <div class="card-content">
                        <form @submit.prevent="signup()">
                            <div class="field">
                                <label class="label">Full Name</label>
                                <div class="control has-icons-left">
                                    <input class="input" type="text" v-model="users.user">
                                    <span class="icon is-small is-left">
                                    <i class="fas fa-signature"></i>
                                    </span>
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">Create a Username</label>
                                <div class="control has-icons-left">
                                    <input class="input" type="text" v-model="users.username">
                                    <span class="icon is-small is-left">
                                    <i class="fas fa-user"></i>
                                    </span>
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">Create a Password</label>
                                <div class="control has-icons-left">
                                    <input class="input" type="password" v-model="users.password">
                                    <span class="icon is-small is-left">
                                    <i class="fas fa-lock"></i>
                                    </span>
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">Primary Email</label>
                                <div class="control has-icons-left">
                                    <input class="input" type="email" v-model="users.email">
                                    <span class="icon is-small is-left">
                                    <i class="fas fa-envelope"></i>
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
import router from '../router'
import {Add} from '../service/users'


export default {
    data() {
        return {
            users: [],
            toRoute: '/login'
        }
    },
    methods: {
        signup(){
            const response = Add(this.users)
            if(response){
                alert('Thank you! Now you can login with your credentials.')
                router.push(this.toRoute)
            }
        }
    }

}
</script>

<style scoped>
main{
    background: url('https://iphonewallpaperblack.files.wordpress.com/2019/04/dark-iphone-wallpaper-ashueffects-1-1.jpg?w=640');

}
.page-content{
    height: 110vh;
    width: 100vh;
    margin: auto;
    padding: 60px 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.page-content .card{
    width: 90%;
    height: 100%;
    border-radius: 2rem;
    background-color:rgb(218, 210, 210);
}

.media-content h1{
    text-align: center;
    font-size: 50px;
    font-weight: 700;
    color: black;
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