<template>
  <div class="daily-stats">
    <p><u><b>24 Hour Stats</b></u></p>
    <p><b>Open:</b> {{open}}</p>
    <p><b>High:</b> {{high}}</p>
    <p><b>Low:</b> {{low}}</p>
    <p><b>Volume:</b> {{volume}}</p>
  </div>
</template>

<script>
import axios from 'axios';
import { round } from '../../utils/priceFormatter';

export default {
  name: 'DailyStats',
  data() {
    return {
      open: 0,
      high: 0,
      low: 0,
      volume: 0,
      currencyType: 'eth-usd'
    };
  },
  methods: {
    loadDailyStats() {
      axios.get(`https://api.gdax.com/products/${this.currencyType}/stats`)
        .then((res) => {
          const data = res.data;
          if (data) {
            this.open = round(data.open);
            this.high = round(data.high);
            this.low = round(data.low);
            this.volume = round(data.volume);
          }
        })
        .catch((error) => {
          this.price = error;
        });
    }
  },
  created() {
    this.loadDailyStats();

    setInterval(() => {
      this.loadDailyStats();
    }, 10000);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .daily-stats {
    margin: 3px;
    font-family: arial;
    color: white;
    font-size: 14px;
    text-align: center;
  }

</style>
