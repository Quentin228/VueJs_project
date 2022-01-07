<template>
  <div id="menu">
    <p id="cross">x</p>
    <nav id="nav-menu">
      <img src="../src/assets/menu-image.jpg">
      <ul class="nav-menu-liste">
        <li><a href="" class="nav-menu-item">ACCUEIL</a></li>
        <li><a href="" class="nav-menu-item">GROUPE</a></li>
        <li><a href="" class="nav-menu-item">MUSIQUES</a></li>
        <li><a href="" class="nav-menu-item">MERCH</a></li>
      </ul>
    </nav>
    <img class="nav-menu-img" src="../src/assets/yellowSquare2_jaune.png">
  </div>
  <!--
  <nav>
    <ul id="nav">
      <li><a><img src="../src/assets/yellowSquare2_black.png"></a></li>
      <li><a id="menu-btn">MENU</a></li>
    </ul>
  </nav>-->
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  })
};
</script>

<style>
#nav{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1em 2em;
  color: #ffe88b;
}
#menu-btn{
  font-weight: normal;
  font-size: 20px;
}
#menu{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url("../src/assets/menu-background.jpg");
  min-height: 100vh;
}
.nav-menu-img{
  width: 15%;
  margin: 2vh;
  align-self: flex-start;
}
#nav-menu{
  align-self: center;
  display: flex;
  justify-content: space-between;
  height: 70vh;
}
#cross{
  align-self: end;
  color: white;
  font-size: 20px;
  margin: 2vh;
}
.nav-menu-item{
  color: white;
  font-size: 3em;
}
.nav-menu-liste{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
</style>