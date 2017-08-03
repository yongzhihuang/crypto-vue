<template>
  <div class="askbids">
    <div class="asks"></div>
    <div class="bids"></div>
  </div>
</template>

<script>
export default {
  name: 'AskBids',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .askbids {
    background: white;
    padding: 5px;
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
