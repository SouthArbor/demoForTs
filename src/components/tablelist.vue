<template>
  <div class="hello">
    <button @click="sortByTime(list)">按时间排序</button>
    <ul>
      <li v-for="item in list" :key="item.time">{{item.name}}</li>
    </ul>
  </div> 
</template>

<script lang="ts">
import Vue from 'vue';
import { timeData,sortByTime } from '../util/util'

type tableListDataType = {
  list: timeData[]
  
}
// export default {
//   name: "TableList",
//   data():tableListDataType { 
//     return {
//       list: [{
//         time:'1998-11-14',
//         name:'默认名字'
//       } ]
//     }
//   },
//   mounted() { 
//     setTimeout(() => {
//       this.list = [
//         {time:"1998-11-14",name:"默认名字1"},
//         {time:"1993-02-14",name:"默认名字2"},
//         {time:"1998-05-14",name:"默认名字3"},
//         {time:"1998-02-14",name:"默认名字4"},
//       ]
//     }, 1000);
//   }
// }

export default Vue.extend({
  name: "tableList",
  data():tableListDataType { 
    return {
      list: [{
        time:'1998-11-14',
        name:'默认名字'
      } ] 
    }
  },
  methods: {
    sortByTime(arr: timeData[]) { 
      this.list = sortByTime(arr)
    }
  },
  mounted() { 
    setTimeout(() => {
      this.list = [
        {time:"1998-11-14",name:"默认名字1"},
        {time:"1993-02-14",name:"默认名字2"},
        {time:"1998-05-14",name:"默认名字3"},
        {time:"1998-02-14",name:"默认名字4"},
      ]
    }, 1000);
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
