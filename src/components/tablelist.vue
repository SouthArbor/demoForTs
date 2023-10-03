<template>
  <div class="hello">
    <ul>
      <li v-for="item in list" :key="item.time">{{item.name}}</li>
    </ul>
  </div> 
</template>

<script lang="ts">
// import Vue from 'vue';
import { timeData} from '../util/util'

type tableListDataType = {
  list: timeData[]
  
}
export default {
  name: "table-list",
  data():tableListDataType { 
    return {
      list: [{
        time:'1998-11-14',
        name:'默认名字'
      } ]
    }
  },
  mounted() { 
    setTimeout(() => {
      this.list = [
        {time:"1998-11-14",name:"默认名字1"},
        {time:"1993-2-14",name:"默认名字2"},
        {time:"1998-5-14",name:"默认名字3"},
        {time:"1998-2-14",name:"默认名字4"},
      ]
    }, 1000);
  }
}

// export default Vue.extend({
//   name: 'HelloWorld',
//   props: {
//     msg: String,
//   },
// });
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
