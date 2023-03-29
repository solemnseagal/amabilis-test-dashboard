<template>
  <div class="flex justify-between flex-wrap gap-2">
    <icon-box
      v-for="sale in salesStats"
      :key="sale.title"
      :title="sale.title"
      :amount="sale.amount"
    >
      <template #icon>

        <img v-if='sale.title === "Paid Invoice"' src="../../assets/icons/carton.svg" alt="carton svg" />
      </template>
    </icon-box>
  </div>
</template>
<script>
export default {
  data() {
    return {
      salesStats: [
        {
          title: "Paid Invoice",
          amount: "83,000.00",
          img: "../../assets/icons/carton.svg"
        },
        {
          title: "Unpaid Invoices",
          amount: "15,253.00",
        },
        {
          title: "Partially Paid",
          amount: "7,310.00",
        },
        {
          title: "Cancelled Invoices",
          amount: "3,200.00",
        },
      ],
    };
  },
};
</script>