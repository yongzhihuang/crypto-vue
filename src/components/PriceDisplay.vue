<template>
  <div class="price-display">
    <select class="price-options">
      <option value="eth-usd">eth-usd</option>
      <option value="eth-eur">eth-eur</option>

      <option value="btc-usd">btc-usd</option>
      <option value="btc-eur">btc-eur</option>

      <option value="ltc-usd">ltc-usd</option>
      <option value="ltc-eur">ltc-eur</option>
    </select>

    <div class="currency-type"></div>
    <div class="price">{{price}}</div>
  </div>
</template>

<script>
export default {
  name: 'PriceDisplay',
  data() {
    return {
      price: 0
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .price-display {
    display: flex;           /* establish flex container */
    flex-direction: column;  /* make main axis vertical */
    justify-content: center; /* center items vertically, in this case */
    align-items: center;     /* center items horizontally, in this case */
    height: 100%;
  }

  .price {
    color: white;
    font-size: 200px;
    width: 100%;
    margin: 5px;
    text-align: center;     /* will center text in <p>, which is not a flex item */
  }

  .price-options {
    background: white;
    padding: 0px;
    font-size: 15px;
    color: black;
    border: none;
    text-transform: uppercase;
    font-weight: bold;
  }
</style>
