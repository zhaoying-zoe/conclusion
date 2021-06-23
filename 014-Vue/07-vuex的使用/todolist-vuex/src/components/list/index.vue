<template>
  <div>
    <transition-group class="list" tag="ul" name="fade" appear>
      <!-- 没用vuex辅助函数
      <li
        class="item"
        v-for="(item, index) in this.$store.state.list"
        :key="index"
        @click="delItem(item.id)"
      > 
      -->
      <li
        class="item"
        v-for="(item, index) in list"
        :key="index"
        @click="delItem(item.id)"
      >
        {{ item.task }}
      </li>
    </transition-group>
    <!-- 未使用辅助函数的 -->
    <!-- <p class="footer">共计{{ this.$store.getters.total }}个项目</p> -->
    <p class="footer">共计{{ total }}个项目</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "List",
  computed: {
    // 把store上的list映射到组件中
    // ...mapState(["list"]),// 接收字符串数组
    ...mapState({
      list: (state) => state.list, // 接收对象 可以重新定义数据名字
    }),

    // 把store上的getters映射到组件中
    // ...mapGetters(["total"]),// 接收字符串数组
    ...mapGetters({
      total: "total",
    }),
  },
  mounted() {
    // console.log(this.$store);
    // this.$store.dispatch(type, payload);//
    this.$store.dispatch("loadItem");
  },
  methods: {
    // 使用辅助函数
    // ...mapMutations(["delItem"]),
    ...mapMutations({
      delItem: "delItem",
    }),
    // delItem(id) {
    //   this.$store.commit("delItem", id);
    // },
  },
};
</script>

<style lang="less" scoped>
.item {
  width: 100%;
  line-height: 40px;
  padding: 5px 0;
  border-bottom: 1px dashed #ccc;
  cursor: pointer;
}
.item:hover {
  background-color: #eee;
}
.footer {
  margin-top: 15px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>