<template>
  <div id="Dashboard">
    <h1>Hello</h1>

    <router-link to="collections/Collections">Collections</router-link>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {
      title: 'Collections Manager'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h1, h2 {
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
} */
</style>
