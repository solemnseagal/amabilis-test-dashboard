<template>
  <div>
    <div class="flex justify-between flex-wrap gap-2">
      <icon-box
        v-for="sale in dashStats"
        :key="sale.title"
        :title="sale.title"
        :amount="sale.amount"
      >
        <template #icon>
          <img
            v-if="sale.title === 'Product'"
            src="../../assets/icons/carton.svg"
            alt="carton svg"
          />
          <img
            v-else-if="sale.title === 'Sales'"
            src="../../assets/icons/stats.svg"
            alt="carton svg"
          />
          <img
            v-else-if="sale.title === 'Users'"
            src="../../assets/icons/people.svg"
            alt="carton svg"
          />
          <img v-else src="../../assets/icons/dep.svg" alt="carton svg" />
        </template>
      </icon-box>
    </div>

    <div class="main-section">
      <div class="chart-section">
        <chart-box></chart-box>
       
      </div>
      <div class="feeds">
        <div class="search-section">
          <h2>Recent Feeds</h2>
          <div class="input">
            <img src="../../assets/icons/search.svg" alt="" />
            <input type="text" placeholder="search" />
          </div>
        </div>
        <div class="chat-section">
          <div v-for="user in users" :key="user.email" class="chat-item">
            <div class="profile">
              <h4>{{ user.name }}</h4>
              <h5>{{ user.email }}</h5>
            </div>

            <div class="chat-text">
              <p>
                {{ user.message }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChartBox from '@/components/charts/ChartBox.vue';

export default {
  components: { ChartBox },
  data() {
    return {
      dashStats: [
        {
          title: "Product",
          amount: "39",
        },
        {
          title: "Sales",
          amount: "16,345.00",
        },
        {
          title: "Users",
          amount: "107",
        },
        {
          title: "Departments",
          amount: "9",
        },
      ],

      chartData: {
        FEB: 2,
        MARCH: 6,
        APRIL: 3,
      },
      users: [
        {
          name: "Tobechukwu Haruna",
          email: "mosesolaniyi@gmail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus et facilisis mi id ultrices. Tortor eleifend diam ut aenean eget diam. Nullam et facilisi non venenatis. Molestie lectus facilisi sed laoreet faucibus.onsectetur adipiscing elit. Faucibus et facilisis mi id ultrices. Tortor eleifend diam ut aenean eget diam. ",
        },
        {
          name: "Blessing Uchenna",
          email: "blessingiiiidh@gmail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus et facilisis mi id ultrices. Tortor eleifend diam ut aenean eget diam. Nullam et facilisi non venenatis. Molestie lectus facilisi sed laoreet faucibus.onsectetur adipiscing elit. ",
        },
        {
          name: "Bola Kafayat",
          email: "mosesolaniyi@gmail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus et facilisis mi id ultrices. Tortor eleifend diam ut aenean eget diam. Nullam et facilisi non venenatis. Molestie lectus facilisi sed laoreet faucibus.onsectetur adipiscing elit. Faucibus et facilisis mi id ultrices. Tortor eleifend diam ut aenean eget diam. ",
        },
        {
          name: "Tobechukwu Haruna",
          email: "mosesolaniyi@gmail.com",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus et facilisis mi id ultrices. Tortor eleifend diam ut aenean eget diam. Nullam et facilisi non venenatis. Molestie lectus facilisi sed laoreet faucibus.onsectetur adipiscing elit. Faucibus et facilisis mi id ultrices. Tortor eleifend diam ut aenean eget diam. ",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

.main-section{
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 625px) {
      flex-direction: column;
      }
}
.chat-section {
  padding: 1.8rem;

  .chat-item {
    padding: 1.6rem 0;
    border-bottom: 1px solid #00000051;
  }

  .chat-text {
    margin-top: 0.5rem;
  }
}

.chart-section{
  height: 20rem;
  width: 50%;

   @media only screen and (max-width: 625px) {
      width: 100%;
      }
}

.feeds {
  width: 45%;
  background: #fff;
  border-radius: 8px;

   @media only screen and (max-width: 625px) {
      width: 100%;
      margin-top: 2rem;
      }
}

.search-section {
  width: 100%;
  background-color: var(--secondary);
  padding: 1rem;
  border-radius: 8px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.input {
  width: 50%;
  background-color: white;
  border-radius: 8px;
  border: 0;
  outline: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  height: 2.5rem;

  input {
    border: 0;
    outline: none;
    width: 80%;
  }
}
</style>