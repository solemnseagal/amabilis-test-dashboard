<template>
  <div class="flex layout">
    <side-bar>
      <template #links>
        <sidebar-link name="Dashboard" destination="/dashboard" icon="">
          <template #navIcon>
            <img src="../assets/icons/dashboard-icon.svg" alt="dashicon" />
          </template>
        </sidebar-link>
        <sidebar-link
          name="Sales"
          destination="/sales"
          icon="tim-icons icon-atom"
        >
          <template #navIcon>
            <img
              src="../assets/icons/online-meeting-icon.svg"
              alt="dashicon"
            /> </template
        ></sidebar-link>
        <sidebar-link name="Contacts management" icon="tim-icons icon-pin">
          <template #navIcon>
            <img src="../assets/icons/contactIcon.svg" alt="dashicon" />
          </template>
        </sidebar-link>
        <sidebar-link name="Branch" icon="tim-icons icon-bell-55">
          <template #navIcon>
            <img src="../assets/icons/branchIcon.svg" alt="dashicon" />
          </template>
        </sidebar-link>
        <sidebar-link name="Departments" icon="tim-icons icon-single-02">
          <template #navIcon>
            <img src="../assets/icons/depIcon.svg" alt="dashicon" />
          </template>
        </sidebar-link>
        <sidebar-link name="Schedule & Reports" icon="tim-icons icon-puzzle-10">
          <template #navIcon>
            <img src="../assets/icons/Repots-icon.svg" alt="dashicon" />
          </template>
        </sidebar-link>
        <sidebar-link name="Messaging" icon="tim-icons icon-align-center">
          <template #navIcon>
            <img src="../assets/icons/messageIcon.svg" alt="dashicon" />
          </template>
        </sidebar-link>
        <sidebar-link name="Conferencing" icon="tim-icons icon-world">
          <template #navIcon>
            <img src="../assets/icons/confIcon.svg" alt="dashicon" />
          </template>
        </sidebar-link>
        <sidebar-link name="Settings" icon="tim-icons icon-world">
          <template #navIcon>
            <img src="../assets/icons/Settings-icon.svg" alt="dashicon" />
          </template>
        </sidebar-link>
      </template>
    </side-bar>

    <div class="right-section body-container">
      <div class="top-nav">
        <div class="left">
          <div class="input">
            <img src="../assets/icons/search.svg" alt="" />
            <input type="text" placeholder="search" />
          </div>
        </div>
        <div class="right flex align-center">
          <img src="../assets/icons/bell.svg" alt="" />

          <p>Hi, Olayinka</p>

          <div class="profile-div">
            <img src="../assets/icons/man.png" alt="" />
          </div>
        </div>
      </div>

      <div class="sub-nav">
        <div class="route-brand">
          {{ routeName }}
        </div>
        <div>
          <button v-if="routeName === 'Dashboard'" id="show-modal" @click="showModal = true">Show Modal</button>

          <modal v-if="showModal" @close="showModal = false">
      <template v-slot:body>
        <form-field></form-field>
      </template>
    </modal>
        </div>
      </div>

      <!-- contents -->
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import FormField from '@/components/FormField.vue';

export default {
  name: "DashboardLayout",
    data: function() {
    return {
      showModal: false
    }
  },

  components: {
    FormField
  },
  computed: {
    routeName() {
      const { name } = this.$route;
      return this.capitalizeFirstLetter(name);
    },
  },
  methods: {
    capitalizeFirstLetter(string = "Dashboard") {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
  },
};
</script>

<style lang="scss" scoped>
.sub-nav {
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.right-section {
  min-width: calc(100% - var(--sidebar-width));
  width: auto;

  @media only screen and (max-width: 920px) {
      width: 100%;
      }
}

.route-brand{
  color: #404690;
  font-size: 1.12rem;
  font-weight: 700;
}

.content {
  height: 100%;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.top-nav {
  display: flex;
  align-items: center;
  margin-top: 1rem;
  min-height: 4rem;
  justify-content: space-between;

   @media only screen and (max-width: 625px) {
      flex-direction: column;
      }
}

.profile-div {
  width: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  border-radius: 50%;
  overflow: hidden;
}

.left .input {
  width: 26.4375rem;
  background-color: white;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.672);
  outline: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  height: 2.5rem;

  input {
    border: 0;
    outline: none;
  }

  @media only screen and (max-width: 920px) {
      width: 100%;
      }
}

.right {
  width: 12rem;
  height: 4rem;
  justify-content: space-between;
  word-wrap: break-word;
  gap: 0.5rem;

  p {
    font-weight: 700;
  }
}
</style>