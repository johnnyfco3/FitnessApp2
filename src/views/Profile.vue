<template>
  <main>
      <header>
          <nav>
              <img src="" alt="Website Logo">
              <ul>
                  <li><a>HOME</a></li>
                  <li><a>PROFILE</a></li>
                  <li><a>CONNECTIONS</a></li>
                  <li><a>ACCOUNT</a></li>
              </ul>
          </nav>
          <div class="profile-pic">
             <img src="https://upload.wikimedia.org/wikipedia/commons/6/68/Joe_Biden_presidential_portrait.jpg" alt="Profile Picture">
             <div class="info">
                 <p class="user">Username</p>
                 <p class="bio">Presidents workout too!</p>
             </div>
          </div>
     </header>

      <section class="posts">
          <div class="pvideo">
            <video autoplay controls class="postvideo">
                    <source :src="posts.src" type="video/mp4">
            </video>
            <div class="caption">
                <h1>{{posts.username}}</h1>
                <blockquote>
                    {{posts.caption}}
                </blockquote>
            </div>
          </div>
      </section>
  </main>
</template>

<script>
import { GetByUser } from '../service/posts'
import Session from '../service/session'

export default {
    data() {
        return {
            posts: [],
            Session
        }
    }, 
    async mounted() {
        this.posts = await GetByUser(this.Session.user)
        console.log(this.posts)
    },

}
</script>

<style scoped>
main{
    background-image: url('https://marmotamaps.com/de/fx/wallpaper/download/faszinationen/Marmotamaps_Wallpaper_Inntal_Desktop_1920x1080.jpg');
    background-position: center;
    background-size: cover;
    color: white;
}
header{
    height: 55vh;
    width: 100%;
    position: relative;
}
nav {
  display: flex;
  justify-content: space-between;
  flex: 1;
  text-align: right;
  padding: 25px 40px;
}
nav ul li {
  list-style: none;
  display: inline-block;
  position: relative;
  padding: 0 14px;
}
nav ul li a {
    color:white;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
}
nav ul li::after {
  content: "";
  width: 0%;
  height: 2px;
  background: #f44336;
  display: block;
  margin: auto;
  transition: 0.5s;
}
nav ul li:hover::after {
  width: 100%;
}
header .profile-pic{
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
}
header .profile-pic img{
    height: 250px; 
    border-radius: 40%; 
    border: 5px solid lightgreen;
    justify-content: center;
}
.info{
    padding: 0 50px;
}
header .profile-pic .info .user{
    font-size: 45px;
    color: white
}
.info .bio{
    font-style: italic;
    font-size: 30px;
    color: white;
}
.pvideo{
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    padding: 20px;
    margin: auto;
    color: black;
}
.pvideo .postvideo{
    width: 40%;
    flex-basis: 60%;
}
.pvideo .caption{
    flex-basis: 38%;
    line-height: 2;
    padding: 0 2rem;
    border: 10px solid lightblue;
    border-radius: 1rem;
    padding-top: 3rem;
    background: rgb(248, 245, 245);
}
.pvideo .caption h1{
    font-size: 30px;
    text-align: center;
    padding-bottom: 0.5rem;
    font-weight: 600;
}
.pvideo .caption blockquote{
    font-size: 20px;
    font-style: italic;
    padding: 1.5rem 0.5rem;
}
</style>