<template>
  <div class="Top">
    <h2 class="top-title-label">Crypto Currency Ranking</h2>
    <table class="table table-hover top-table">
      <thead>
        <tr>
          <td>Rank</td>
          <td>Name</td>
          <td>Price (USD)</td>
          <td>%Change 24 hr</td>
          <td>Market Cap (USD)</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="coin in coins">
          <td>{{ coin.rank }}</td>
          <td>{{ coin.name }}</td>
          <td>${{ coin.price_usd }}</td>
          <td>
            <span v-if="coin.percent_change_24h > 0">+</span>{{ coin.percent_change_24h }}%
          </td>
          <td>${{ numberWithCommas(coin.market_cap_usd) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import { numberWithCommas } from '../utils/priceFormatter';

export default {
  name: 'Top',
  created() {
    this.getCoins();

    setInterval(() => {
      this.getCoins();
    }, 10000);
  },
  data() {
    return {
      COINMARKETCAP_API_URI: 'https://api.coinmarketcap.com',
      coins: []
    };
  },
  methods: {
    getCoins() {
      axios.get(`${this.COINMARKETCAP_API_URI}/v1/ticker/?limit=10`)
      .then((resp) => {
        this.coins = resp.data;
      })
      .catch((err) => {
        console.error(err);
      });
    },
    numberWithCommas(price) {
      return numberWithCommas(price);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .top-title-label {
    text-align: center;
    color: white;
  }

  .top-table {
    color: white;
  }
</style>
