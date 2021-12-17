<template>
  <main>
      <header>
          <nav>
              <img src="" alt="Website Logo">
              <ul>
                  <li><a href="">SIGN UP</a></li>
                  <li><a href="">LOGIN</a></li>
                  <li><a href="">ABOUT US</a></li>
                  <li><a href="">CONTACT</a></li>
              </ul>
          </nav>
          <div class="heading">
            <h1>Fitness App</h1>
            <p>An Instagram for Fitness</p>
          </div>
      </header>

      <section class="features">
          <div class="row">
              <div class="features-col">
                  <h1>Mind, Body, Spirit</h1>
                  <p>We want this app to improve your physical health as well as your mental health.
                    Working out does not have to be your place of escape, it can be a place of enjoyment
                    and interaction
                  </p>
              </div>
              <div class="features-col">
                  <h1>Share with the World</h1>
                  <p>Share your journey with us. We encourage progressive videos, photos or short clips.
                      What better way is there to learn from others and to view your progression throughout
                      time.
                  </p>
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

}
</script>

<style scoped>
header{
    height: 50vh;
    width: 100%;
    background-image: url('https://marmotamaps.com/de/fx/wallpaper/download/faszinationen/Marmotamaps_Wallpaper_Inntal_Desktop_1920x1080.jpg');
    background-position: center;
    background-size: cover;
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
    color: black;
    text-decoration: none;
    font-size: 17px;
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
.features{
    width: 80%;
    margin: auto;
    padding-top: 50px;
    text-align: center;
}
.row{
    margin-top: 5%;
    display: flex;
    justify-content: space-between;
}
.features-col{
    flex-basis: 42%;
    border-radius: 10px;
    margin-bottom: 5%;
    text-align: center;
    background: #b1d0e4;
    padding: 35px;
}
.features-col p{
    padding: 0;
}
.features-col h1{
    margin-bottom: 15px;
}
footer{
    width: 100%;
    text-align: center;
    padding: 30px 0;
}
footer h4{
    margin-bottom: 15px;
    margin-top: 20px;
    font-size: 25px;
}
footer p{
    font-size: 16px;
    line-height: 2;
}
footer .icons .fab{
    padding: 5px 10px;
    font-size: 22px;
    color: rgb(111, 192, 219);
}
footer .fa{
    color:#f44336;
}
</style>