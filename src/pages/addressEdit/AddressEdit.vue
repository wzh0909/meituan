<template>
    <div>
        <Header :title="address"/>
        <van-address-edit
            :area-list="areaList"
            :address-info="addressInfo"
            show-delete
            show-set-default
            :area-columns-placeholder="['请选择', '请选择', '请选择']"
            @save="onSave"
            @delete="onDelete"
            />
    </div>
  
   
</template>

<script>
import Header from '../../components/Header.vue'
import { reactive } from '@vue/reactivity';
import { toRefs } from '@vue/reactivity';
import { useRoute } from 'vue-Router';
import {useStore} from 'vuex'
import { onMounted } from '@vue/runtime-core';
import { computed } from '@vue/runtime-core';
import { Toast } from 'vant';
import {useRouter} from 'vue-router'
export default {
    components:{
        Header
    },
    setup() {
        const store = useStore()
        const route = useRoute()
        const router = useRouter()
        let data = reactive({
            
            areaList:{
                province_list: {
                    110000: "浙江省",
                    120000: "广东省",
                },
                    city_list: {
                    110100: "杭州市",
                    110200: "台州市",
                    120100: "深圳市",
                    120200: "广州市",
                },
                    county_list: {
                    110101: "上城区",
                    110102: "下城区",
                    110201: "临海市",
                    120102: "天河区",
                    130102: "海珠区",
                },
            },
            addressInfo:{}
        })


        const address=computed(()=>{
            return route.query.type==='add'?'地址新增':'地址编辑'
        })
        //数据初始化
        const init=()=>{
            store.state.userAddress.forEach((item)=>{
                if(item.id === Number(route.query.id)){
                    data.addressInfo=item
                }
            })
            route
        }

        onMounted(()=>{
            init()
        })

        //保存的按钮
        const onSave = (content) => {
            if(route.query.type==='add'){
                store.commit('ADDADDRESS',content)
            }else{
                store.commit('CHANGEADDRESS',content)
            }
            Toast("保存成功")
            setTimeout(()=>{
                router.back()
            },1000)
        };

        //删除的按钮
        const onDelete = (content) => {
            store.commit('DELETEADDRESS',content)
            Toast("删除成功")
            setTimeout(()=>{
                router.back()
            },1000)
        };

       

    

        return {
            onSave,
            onDelete,
            ...toRefs(data),
            address
        };
    },
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
</style>