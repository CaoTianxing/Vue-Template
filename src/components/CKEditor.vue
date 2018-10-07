<template>
  <div id="video">
    video
    <textarea id="editor" rows="10" cols="80"></textarea>

  </div>
</template>

<script>
  import CKEDITOR from "CKEDITOR"
  export default{
    mounted() {
      CKEDITOR.replace("editor", {height: "300px", width: "100%", toolbar: "Full"});
      var editor = CKEDITOR.instances.editor2;
    },
  }
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
