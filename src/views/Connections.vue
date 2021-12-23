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
     </header>
     <section class="search">
          <div class="field" label="Find a JS framework">
            <o-autocomplete rounded expanded v-model="name" :data="filteredDataArray" placeholder="e.g. jQuery" icon="search" clearable @select="option => selected = option">
                <template v-slot:empty>No results found</template>
            </o-autocomplete>
          </div>

     </section>
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
    background-image: url('https://previews.123rf.com/images/osman3600/osman36002012/osman3600201200734/163546679-letter-m-fitness-vector-logo-design-fitness-logo-design-dumbbell-icon-gym-logo-ideas-and-fitness-log.jpg');
    background-position: center;
    background-size: 55%;
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
.search{
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 3rem;
}
.search .field{
    width: 60%;
    border: 2px solid green;
    border-radius: 2rem;
}
</style>