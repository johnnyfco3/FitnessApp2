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
          <div class="heading">
            <h1>LET'S EXPLORE!</h1>
          </div>
     </header>

      <section class="posts">
          <div class="pvideo" v-for="p in post" :key="p">
            <video autoplay controls class="postvideo">
                    <source :src="p.src" type="video/mp4">
            </video>
            <div class="caption">
                <h1>{{p.username}}</h1>
                <blockquote>
                    {{p.caption}}
                </blockquote>
            </div>
          </div>
      </section>
  </main>
</template>

<script>
import { GetAll } from '../service/posts'

export default {
    data() {
        return {
            post: [],
        }
    },
    async mounted() {
        this.post = await GetAll()
    }
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
.heading{
    position: absolute;
    top: 50%;
    left: 25%;
    transform: translate(-15%,-40%);
    color: black;
}
.heading h1{
    font-size: 7rem;
    font-family: fantasy;
    color: wheat;
    font-weight: 500;
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
    color: black;
    background: rgb(248, 245, 245);
}
.pvideo .caption h1{
    font-size: 30px;
    text-align: center;
    padding-bottom: 1rem;
    font-weight: 600;
}
.pvideo .caption blockquote{
    font-size: 30px;
    font-style: italic;
    text-align: center;
}
</style>