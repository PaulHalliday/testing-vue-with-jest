<template>
  <div class="hello">
    <fancy-heading title="Hello World" color="red"></fancy-heading>
  </div>
</template>

<script>
import FancyHeading from "./FancyHeading";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  components: {
    FancyHeading
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
