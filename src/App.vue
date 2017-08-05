<template>
  <div id="app">
    <PriceWidget></PriceWidget>
    <Top></Top>
    <Contact></Contact>
  </div>
</template>

<script>
import PriceWidget from './Pages/PriceWidget';
import Top from './Pages/Top';
import Contact from './components/Contact';


export default {
  name: 'app',
  components: {
    PriceWidget,
    Top,
    Contact
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
    line-height: 10px;
  }
</style>
