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
export default {
  name: 'DailyStats',
  data() {
    return {
      open: 0,
      high: 0,
      low: 0,
      volume: 0
    };
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
