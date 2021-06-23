<template>
  <div class="head">
    <input type="text" v-model="task" />
    <button @click="handleAddItem">提交</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Head",
  data() {
    return {
      task: "",
    };
  },
  methods: {
    ...mapMutations(["addItem"]),
    handleAddItem() {
      let payload = {
        id: new Date(),
        task: this.task,
      };
      if (this.task == "") return;
      // this.$store.commit("addItem", payload);
      this.addItem(payload);
      this.task = "";
    },
  },
};
</script>

<style lang="less" scoped>
.head {
  display: flex;
  height: 40px;
  margin-bottom: 10px;
}
.head input {
  width: 700px;
  outline: none;
  padding: 10px;
  font-size: 28px;
}
.head button {
  width: 100px;
}
</style>