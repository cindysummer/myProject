import {login} from "../service/users"
export default{
    namespaced: true,
    state:{
        userAccount:"zhangsan",
        userPwd:"123123",
        userType:"0",
        userStatus:"1"
    },
    mutations:{
        login:(state,payload)=>{
            Object.assign(state,payload)
        },
    },
   
    actions:{
        async loginAsync(context){         
            const {userAccount,userPwd}=context.state
            const data = await login({userAccount,userPwd});
            context.commit("login",data)
        }
    }

}