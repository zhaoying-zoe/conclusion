<template>
  <div class="todolist">
    <Head></Head>
    <List></List>
  </div>
</template>

<script>
import Head from "../../components/head";
import List from "../../components/list";
export default {
  name: "TodoList",
  components: {
    Head,
    List,
  },
  methods: {},
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.todolist {
  width: 800px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
}
</style>