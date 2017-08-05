<template>
  <div class="core">
      <PriceDisplay></PriceDisplay>
      <AskBids></AskBids>
      <DailyStats></DailyStats>
      <PriceTarget></PriceTarget>
      <Contact></Contact>
  </div>
</template>

<script>
import PriceDisplay from './PriceWidget/PriceDisplay';
import AskBids from './PriceWidget/AskBids';
import DailyStats from './PriceWidget/DailyStats';
import PriceTarget from './PriceWidget/PriceTarget';
import Contact from './PriceWidget/Contact';


export default {
  name: 'Core',
  components: {
    PriceDisplay,
    AskBids,
    DailyStats,
    PriceTarget,
    Contact
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

  .core {
    display: flex;           /* establish flex container */
    flex-direction: column;  /* make main axis vertical */
    justify-content: center; /* center items vertically, in this case */
    align-items: center;     /* center items horizontally, in this case */
    height: 100%;
  }
</style>
