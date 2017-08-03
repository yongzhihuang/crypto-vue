<template>
  <div id="app">
    <Core></Core>
  </div>
</template>

<script>
import Core from './components/Core';

export default {
  name: 'app',
  components: {
    Core,
  },
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
