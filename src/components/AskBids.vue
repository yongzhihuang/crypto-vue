<template>
  <div class="askbids">
    <div class="asks">Sells: {{asksPrice}} / {{asksAmount}} Orders</div>
    <div class="bids">Buys: {{bidsPrice}} / {{bidsAmount}} Orders</div>
  </div>
</template>

<script>
export default {
  name: 'AskBids',
  data() {
    return {
      asksPrice: 0,
      asksAmount: 0,
      bidsPrice: 0,
      bidsAmount: 0
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .askbids {
    background: white;
    padding: 5px;
    margin: 5px;
    font-weight: bold;
    border-radius: 5px;
  }

  .bids {
    color: green;
  }

  .asks {
    color: red;
  }

  .bids,
  .asks {
    margin: 3px;
    font-family: arial;
  }
</style>
