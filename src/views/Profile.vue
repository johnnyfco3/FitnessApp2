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

     <section class="links">
         <div class="tabs is-centered is-fullwidth">
            <ul>
                <li class="is-active">
                <a>
                    <span class="icon is-small"><i class="fas fa-film" aria-hidden="true"></i></span>
                    <span>Videos</span>
                </a>
                </li>
                <li>
                <a>
                    <span class="icon is-small"><i class="fas fa-image" aria-hidden="true"></i></span>
                    <span>Pictures</span>
                </a>
                </li>
            </ul>
            </div>
     </section>

      <section class="posts">
          <video autoplay controls id="postvideo">
                <source src="../assets/istockphoto-1318449016-640_adpp_is.mp4" type="video/mp4">
          </video>
          <video autoplay controls id="postvideo">
                <source src="../assets/KettlebellTraining-12697.mp4" type="video/mp4">
      </video>
      </section>
  </main>
</template>

<script>
export default {

}
</script>

<style scoped>
header{
    height: 55vh;
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
    color:black;
    text-decoration: none;
    font-size: 18px;
    font-weight: 400;
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
.posts{
    padding-top: 10px;
}
#postvideo{
    width: 100%;
}
.tabs span{
    font-size: 20px;
}
</style>