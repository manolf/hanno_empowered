<template>
  <b-navbar toggleable="sm" type="dark" variant="dark" sticky>
    <!-- Navbar Toggler -->
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <!-- Navbar Brand -->
    <b-navbar-brand href="#">
      <img
        src="../assets/img/icon/rudolf_glasses.png"
        alt="Rudolf Icon"
        class="icon"
      />
    </b-navbar-brand>

    <!-- Collapsible Content -->
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/" exact>Home</b-nav-item>
        <b-nav-item to="/about">Über uns</b-nav-item>
        <!-- <b-nav-item to="/calendar">Adventkalender</b-nav-item> -->
        <b-nav-item to="/team">Team</b-nav-item>
        <b-nav-item to="/sport">Special Thanks</b-nav-item>
      </b-navbar-nav>

      <!-- Right-aligned items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item>
          <img
            src="../assets/img/icon/rudolf_glasses.png"
            alt="Rudolf Icon"
            class="icon"
          />
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>


</template>

<script>
export default {
  name: "NavbarComponent",
};
</script>

<style scoped>
/* Base Styles */
nav {
  background-color: rgb(102, 102, 51) !important;
  padding: 0.5rem;
}

.container-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-middle {
  display: flex;
  gap: 1rem;
}

.navbar-right,
.navbar-left {
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.nav-link {
  color: white;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .container-nav {
    flex-direction: column;
    align-items: center;
  }

  .navbar-middle {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .navbar-left,
  .navbar-right {
    display: none;
  }

  .icon {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 576px) {
  .navbar-toggler {
    width: 100%;
    justify-content: center;
  }

  .navbar-middle {
    font-size: 0.9rem;
    gap: 0.3rem;
  }
}
</style>
