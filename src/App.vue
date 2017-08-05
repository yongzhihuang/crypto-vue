<template>
  <div id="app">
    <PriceWidget></PriceWidget>
  </div>
</template>

<script>
import PriceWidget from './Pages/PriceWidget';

export default {
  name: 'app',
  components: {
    PriceWidget
  }
};
</script>

<style>
  body {
    background: #3b5998;
    font-family: sans-serif;
  }

  a {
    color: white;
  }

  a:visited {
    color: white
  }

  p {
    line-height: 5px;
  }
</style>
