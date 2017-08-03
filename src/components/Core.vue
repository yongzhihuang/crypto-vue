<template>
  <div class="price-display">
      <PriceDisplay></PriceDisplay>
      <AskBids></AskBids>
      <DailyStats></DailyStats>
      <PriceTarget></PriceTarget>
      <Contact></Contact>
  </div>
</template>

<script>
import PriceDisplay from './PriceDisplay';
import AskBids from './AskBids';
import DailyStats from './DailyStats';
import PriceTarget from './PriceTarget';
import Contact from './Contact';


export default {
  name: 'Core',
  components: {
    PriceDisplay,
    AskBids,
    DailyStats,
    PriceTarget,
    Contact,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
