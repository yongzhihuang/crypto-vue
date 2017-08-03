<template>
  <div class="price-target-container">
    <div class="set-target">Set Price Target</div>
    <div class="target"></div>
  </div>
</template>

<script>
export default {
  name: 'PriceTarget',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .price-target-container {
    text-align: center;
    margin: 20px 0;
  }

  .set-target {
    cursor: pointer;
    width: 200px;
    margin: 0 auto;
    padding: 5px;
    border: solid 1px white;
    border-radius: 5px;
    color: white;
  }

  .set-target:hover {
    background: black;
    color: white;
    border-color: black;
  }

  .target {
    margin-top: 10px;
    color: white;
  }

</style>
