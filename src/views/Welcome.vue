<template>
  <main>
      <header>
          <nav>
              <img src="" alt="Website Logo">
              <ul>
                  <li><a @click="signup">SIGN UP</a></li>
                  <li><a @click="login">LOGIN</a></li>
                  <li><a href="">ABOUT US</a></li>
                  <li><a href="">CONTACT</a></li>
              </ul>
          </nav>
          <div class="heading">
            <h1>Fitness App</h1>
            <p>An Instagram for Fitness</p>
          </div>
      </header>

        <section class="mission">
                <div class="left">
                    <img src="../assets/pinpng.com-vision-png-26422.png" alt="">
                </div>
                <div class="right">
                    <h1>Our Mission</h1>
                    <p>We want this app to improve your physical health as well as your mental health.
                        Working out does not have to be your place of escape, it can be a place of enjoyment
                        and interaction
                    </p>
                </div>
        </section>

        <section class="share">
                <div class="share-left">
                    <h1>Share with Others</h1>
                    <p>Share your journey with us. We encourage progressive videos, photos or short clips.
                        What better way is there to learn from others and to view your progression throughout
                        time.
                    </p>
                </div>
                <div class="share-right">
                    <img src="../assets/pngaaa.com-1392320.png" alt="">
                </div>
        </section>

        <section class="stats">
            <nav class="level">
                <div class="level-item has-text-centered">
                    <div>
                    <i class="fas fa-user-friends 3x"></i><p>Employees</p>
                    <p class="title">3,456</p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                    <i class="fas fa-comments"></i><p>Reviews</p>
                    <p class="title">723</p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                    <i class="fas fa-user-plus"></i><p>Active Users</p>
                    <p class="title">456K</p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                    <i class="fas fa-cloud-download-alt"></i><p>Downloads</p>
                    <p class="title">789</p>
                    </div>
                </div>
            </nav>
        </section>

        <section class="information">
            <div class="content">
                <p>Let's get Started</p>
                <div class="row">
                        <a href="" class="hero-btn sign">SIGN UP</a>
                        <a href="" class="hero-btn log">LOGIN</a>
                </div>
            </div>
        </section>


      <footer>
          <h4>About Us</h4>
          <p>This is a small project of a fitness App using Vue. It is designed by Johnny Tejada</p>
          <div class="icons">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-linkedin"></i>
                <p>Made with <i class="fa fa-heart"></i></p>
            </div>
      </footer>
  </main>
</template>

<script>

export default {
    methods: {
        signup(){
            this.$router.push('/signup')
        },
        login(){
            this.$router.push('/login')
        }
    },
}
</script>

<style scoped>
header{
    height: 70vh;
    width: 100%;
    background-image: url('https://marmotamaps.com/de/fx/wallpaper/download/faszinationen/Marmotamaps_Wallpaper_Inntal_Desktop_1920x1080.jpg');
    background-position: center;
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
    color:black;
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
.heading{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    color: black;
}
.heading h1{
    font-size: 62px;
}
.heading p{
    font-size: 25px;
    padding: 10px;
}
.mission{
    height: 70vh;
    padding-top: 90px;
    width: 100%;
    position: relative;
    margin: auto;
    display: flex;
    text-align: center;
}
.left{
    flex-basis: 60%;
    padding-top: 70px;
    padding-left: 120px;
    width: 90%;
}
.left img{
    width: 90%;
}
.right{
    flex-basis: 50%;
    margin: 60px 130px;
}
.right h1{
    font-size: 55px;
    font-weight: 600;
    color:cadetblue;
}
.right p{
    font-size: 20px;
}
.share{
    height: 60vh;
    padding-top: 70px;
    width: 100%;
    position: relative;
    margin: auto;
    display: flex;
    text-align: center;
}
.share-left{
    flex-basis: 50%;
    margin: 60px 130px;
}
.share-left h1{
    font-size: 55px;
    font-weight: 600;
    color:cadetblue;
}
.share-left p{
    font-size: 20px;
}
.share-right{
    flex-basis: 60%;
    padding-top: 70px;
    padding-right: 120px;
}
.share-right img{
    width: 80%;
}
.stats{
    position: relative;
    padding-top: 90px;
    font-size: 20px;
    color:#f44336;
    font-weight: 500;
}
.stats .fas{
    font-size: 30px;
}
.information{
    height: 60vh;
    padding-top: 100px;
    width: 100%;
    position: relative;
    margin: auto;
    text-align: center;
}
.information .row{
    display: flex;
    justify-content: center;
}
.information .row a{
    flex-basis: 10%;
    padding-top: 20px;
}
.information .content p{
    font-size: 55px;
    color: cadetblue;
    font-weight: 600;
}
.hero-btn{
    display: inline-block;
    text-decoration: none;
    color: black;
    border: 1px solid black;
    padding: 20px 34px;
    font-size: 15px;
    background: transparent;
    position: relative;
    cursor: pointer;
}
.hero-btn:hover{
    border: 1px solid cadetblue;
    background: cadetblue;
    transition: 0.5s;
    color: white;
}
.sign{
    margin-right: 50px;
}
footer{
    width: 100%;
    text-align: center;
    padding: 30px 0;
    background-color:midnightblue;
    color: white;
}
footer h4{
    margin-bottom: 15px;
    margin-top: 20px;
    font-size: 35px;
    font-weight: 600;
}
footer p{
    font-size: 16px;
    line-height: 2;
}
footer .icons .fab{
    padding: 5px 10px;
    font-size: 22px;
}
footer .fa{
    color:#f44336;
}
</style>