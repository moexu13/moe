<template>
  <div class="nav">
    <div class="nav__icon" id="nav__icon" @click="toggleMenu">
      <font-awesome-icon :icon="['fal', 'bars']" />
    </div>
    <div class="nav__links" id="nav__links">
      <ul>
        <li><n-link to="/">Home</n-link></li>
        <li><n-link to="/#work">My Work</n-link></li>
        <li><n-link to="/blog">Blog</n-link></li>
        <li><n-link to="/#contact">Contact Me</n-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      let state = document.getElementById("nav__links");
      console.log(state);
      // if (state.display === "none") {
      //   state.display = "block";
      // } else {
      //   state.display = "none";
      // }
    }
  }
}
</script>