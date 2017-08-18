<template lang="html">
  <div>
    {{arr}}
    <ul>
      <ctop @childChange="parenChange" v-for="(val,key) in arr" :pVal="val"></ctop>
    </ul>
  </div>
</template>
<script>
import Ctop from './components/ctop';
export default {
  name:'app',
  data(){
    return {
      arr:[
        {name:'呵呵',id:0,checked:true},
        {name:'呵呵2',id:1,checked:false}
      ]
    }
  },
  methods:{
    parenChange(val){
      this.arr.forEach(e=>{
        if(e.id == val.id){
          e.checked = val.checked;
        }
      });
    }
  },
  components:{
    Ctop
  }
}

/*
this.arr.forEach(e=>{
  if(e.id == val.id){
    e.checked = val.checked;
  }
});
 */
</script>
