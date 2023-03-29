<template>
  <router-link class="nav-item" :to="{ path: `${destination}` }">
    <div class="menu-item">
      <div class="nav-link">
        <div class="flex">
          <div class="icon-container">
            <slot name="navIcon" />
          </div>
          <p>
          {{ name }}
          </p>
        </div>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "sidebar-link",

  props: {
    name: String,
    icon: String,
    tag: {
      type: String,
      default: "router-link",
    },
    destination: {
      type: String,
      default: "/",
    },
  },
  methods: {
    hideSidebar() {
      if (this.autoClose) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
  mounted() {
    if (this.addLink) {
      this.addLink(this);
    }
  },

};
</script>
<style lang="scss">
.router-link-exact-active {
  background: #222766;
  width: 100%;
  height: fit-content;

  .menu-item .nav-link{
        border-left: 5px solid var(--secondary);
  }
}

.sidebar {
    height: 100vh;
    max-width: var(--sidebar-width);
    min-width: 15rem;
    width: 18%;
    background-color: #404690;
    padding: 5rem 0;
    color: #fff;

    .sidebar-wrapper .logo {

        background: transparent;
    }

    @media only screen and (max-width: 920px) {
      display: none;
      }
}

.nav {
    margin-top: 2rem;

    &-link {
        display: block;
        padding-inline: 1rem;
        display: flex;
        align-items: center;
        width: 100%;
        height: 2.5rem;
    }

    &-item {
        width: 100%;
    }
}

.icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: .5rem;

}

.menu-item {
    padding: .4rem 0;
}
</style>
