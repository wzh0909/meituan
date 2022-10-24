<template>
  <div class="mine">
    <Header title="地址管理"/>
      <van-address-list
        :list="list"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
      />
    
  </div>
</template>

<script>
import { Toast } from 'vant';
import Header from '../../components/Header.vue'
import { reactive } from '@vue/reactivity';
import { toRefs } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import { useStore } from "vuex";
import {useRouter} from 'vue-router'

export default {
  components:{
    Header

  },
  setup(){
    const store = useStore()
    const router = useRouter()
    let data = reactive({
        list: []
    }) 

    //初始化数据
    const init=()=>{
        data.list=store.state.userAddress.map((item)=>{
            return{
                id:item.id,
                name:item.name,
                tel:item.tel,
                address:`${item.province}${item.city}${item.county}${item.addressDetail}`,
                isDefault:!!item.isDefault
                
            }
        })
    } 

    onMounted(()=>{
        init()
    })

    //新增地址的按钮
    const onAdd = () => {
         router.push({
          path:'./addressedit',
          query:{
            type:'add'
          }
        })
    };


    //编辑地址的按钮
    const onEdit = (item) => {
        router.push({
          path:'./addressedit',
          query:{
            id:item.id,
            type:'change'
          }
        })
    };

    

    return{

      ...toRefs(data),
      onAdd,
      onEdit,
      

    }
  }

  
}
</script>

<style lang='less' scoped>
/deep/ .van-button--danger {
  background-color: #ffc400;
  border-color: #ffc400;
}
/deep/ .van-switch--on {
  background-color: #ffc400;
}
/deep/ .van-radio__icon {
  display: none;
}
</style>