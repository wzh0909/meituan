import {createStore}  from 'vuex'

export default createStore({
    //存放共享的数据
    state:{
        cartList:[],//购物车列表数据
        orderList:[],//生成订单列表数据
        edit:true, // 编辑的状态
        orderListed:[],//生成订单列表数据后
        userAddress:[//用户地址
        {
            id: 1001,
            name: '吴子豪',
            tel: '111111111111',
            province: '浙江省',
            city: '台州市',
            county: '临海区',
            addressDetail: '台州学院',
            isDefault: true,
            areaCode: '110101',
          },
          {
            id: 1002,
            name: 'XXX',
            tel: '13123456731',
            province: '广东省',
            city: '广州市',
            county: '天河区',
            addressDetail: 'XXX',
            isDefault: false,
            areaCode: '110101',
          },
        ]
    },
    //操作state中的数据
    mutations:{
        //添加购物车
        ADDCART(state,value){
            state.cartList=value
        },
        //结算按钮
        PAY(state,value){
            state.orderList=value
        },
        //删除
        DELETE(state,value){
            state.cartList=value
        },
        //生成订单
        UPDATEORDER(state){
            state.orderListed=state.orderListed.concat(state.orderList)
        },
        //编辑的按钮
        EDIT(state,value){
            if(value==='detele'){
                state.edit=true
            }else{
                state.edit=!state.edit
            }
            
        },
        //新增地址
        ADDADDRESS(state,value){
            state.userAddress.forEach((item)=>{
                if(value.isDefault){
                    item.isDefault=false
                }
                value.id=item.id+1
            })
            state.userAddress.push(value)

        },

        //编辑地址
        CHANGEADDRESS(state,value){
            state.userAddress=state.userAddress.map((item)=>{
                if(value.isDefault){
                    item.isDefault=false
                }
                return item.id ===value.id ? value:item
            })
            

        },
        //地址删除按钮
        DELETEADDRESS(state,value){
            state.userAddress=state.userAddress.filter((item)=>{
                return !(value.id===item.id)
            })
            if(value.isDefault && state.userAddress.length){
                state.userAddress[0].isDefault=true
            }
        }
       


       
    },
     //接受用户的事件
    actions:{}
})