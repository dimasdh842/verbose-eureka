<template>
  <div class="container2 bg-main">
    <nav class="nav">
      <a class="menu" id="menu1">Bak 1</a>
      <a class="menu" id="menu2">Bak 2</a>
      <a class="menu" id="menu3">Bak 3</a>
    </nav>

    <div class="jumbotron">
      <div class="active" id="1">
        <img src="../assets/ico.png" alt="termometer ico" class="jumbotron-img">
        <h2 class="suhu-title" id="suhu1">40 C</h2>
      </div>
      <div class="active" id="2">
        <img src="../assets/ico.png" alt="termometer ico" class="jumbotron-img">
        <h2 class="suhu-title" id="suhu2">28 C</h2>
      </div>
      <div class="active" id="3">
        <img src="../assets/ico.png" alt="termometer ico" class="jumbotron-img">
        <h2 class="suhu-title" id="suhu3">10 C</h2>
      </div>
    </div>

    <div class="content">
      <h2>Motor 1</h2>
      <div class="container-content">
        <img src="../assets/ico2.png" alt="motor ico" class="content-img">
        <a href="" class="btn">Off</a>
      </div>
    </div>
    <div class="content">
      <h2>Motor 2</h2>
      <div class="container-content">
        <img src="../assets/ico2.png" alt="motor ico" class="content-img">
        <a href="" class="btn">Off</a>
      </div>
    </div>
    <div class="content">
      <h2>Motor 3</h2>
      <div class="container-content">
        <img src="../assets/ico2.png" alt="motor ico" class="content-img">
        <a href="" class="btn">Off</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {

    }
  },
  mounted() {

    let activeId;
    activeId = 1

    document.querySelectorAll('.active').forEach(e => {
      if (e.getAttribute("id") == activeId) {
        e.classList.add("block");
      }

      e.classList.add("hide")
    })

    document.querySelectorAll('.menu').forEach(e => {


      e.addEventListener("click", (f) => {
        f.preventDefault()
        switch (f.target.getAttribute("id")) {
          case "menu1":
            activeId = 1
            break;
          case "menu2":
            activeId = 2
            break;
          case "menu3":
            activeId = 3
            break;

        }


        let i = 1;
        while (i < 4) {
          let str = 'menu' + i
          if (i == activeId) {
            document.getElementById(i).classList.add("block")
            e.classList.add("active-menu")
          } else {
            document.getElementById(i).classList.remove("block")
            document.getElementById(str).classList.remove("active-menu")
          }
          i++;
        }





      })

    })

    document.querySelectorAll(".btn").forEach(element => {

      element.addEventListener("click", e => {
        e.preventDefault()
        e.target.classList.toggle("btn-active")
        if (e.target.classList.contains("btn-active")) {
          e.target.textContent = "On"
        } else {
          e.target.textContent = "Off"
        }
      })
    });
  }
}


</script>

<style scoped>
/* main */
.container2 {
  width: 428px;
  min-height: 100vh;
  background-color: #FCF8E8;
  margin: 0 auto;
  box-sizing: border-box;
  text-align: center;
  padding: 7% 5%;
}

.bg-main {
  background: #94B49F;
}

.nav {
  width: 100%;
  margin: 0 auto;
  padding: 10px;
}

.menu {
  text-decoration: none;
  color: white;
  background-color: #DF7861;
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
}

.menu:hover {
  background-color: #FBC701;
  font-weight: 600;
}

.jumbotron {
  background-color: #FCF8E8;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* margin: 0 5%; */
}

.jumbotron-img {
  width: 35%;
  height: 100%;
}

.suhu-title {
  font-size: 75px;
}

/* content */

.content {
  text-align: left;
}

.container-content {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.hide {
  display: none;
}

.block {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.active-menu {
  background-color: #FBC701;
  font-weight: 600;
}

.deactive-menu {
  background-color: #DF7861;
  font-weight: normal;

}

.btn {
  width: 111px;
  height: 55px;
  background: #DF7861;
  font-weight: 700;
  font-size: 24px;
  line-height: 60px;
  text-align: center;
  color: #FFFFFF;
  text-decoration: none;
}

.btn-active {
  background: #FBC701;

}
</style>
