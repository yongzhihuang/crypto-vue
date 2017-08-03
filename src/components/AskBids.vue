<template>
  <div class="askbids">
    <div class="asks">Sells: {{asksPrice}} / {{asksAmount}} Orders</div>
    <div class="bids">Buys: {{bidsPrice}} / {{bidsAmount}} Orders</div>
  </div>
</template>

<script>
import axios from 'axios';
import { round } from '../utils/priceFormatter';

export default {
  name: 'AskBids',
  data() {
    return {
      asksPrice: 0,
      asksAmount: 0,
      bidsPrice: 0,
      bidsAmount: 0,
      currencyType: 'eth-usd'
    };
  },
  methods: {
    loadAskBids() {
      axios.get(`https://api.gdax.com/products/${this.currencyType}/book`)
        .then((res) => {
          const data = res.data;
          if (data) {
            this.asksPrice = round(data.asks[0][0]);
            this.asksAmount = round(data.asks[0][1]);
            this.bidsPrice = round(data.bids[0][0]);
            this.bidsAmount = round(data.bids[0][1]);
          }
        })
        .catch((error) => {
          this.price = error;
        });
    }
  },
  created() {
    this.loadAskBids();

    setInterval(() => {
      this.loadAskBids();
    }, 10000);
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
