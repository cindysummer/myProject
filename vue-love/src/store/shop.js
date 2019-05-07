import ShopService from '../service/shop';
export default {
    namespaced: true,
    state: {
        shopData: {
            shopName: "",
            shopLicenceNum: "",
            shopLicenceImg: "",
            shopAdd: "",
            shopCorporate: "",
            shopTel: "",
            shopImg: "",
            shopFeature: "",
            goods: [],
            pets: [],
            service: []
        }
    },
    mutations: {
        // getMessage: (state, payload) => {
        //     //一定不能解构state赋值，这样会破坏掉vue原本的响应式原理
        //     Object.assign(state, { message: payload });
        // }
    },
    actions: {
        async getUserMesByIdAsync(context, payload) {
            console.log(payload)
            const data = await ShopService.getUserMesById(payload);
            console.log(data)
            // if (data) {
            //     //触发actions用dispatch,触发方法mutations用commit
            //     context.dispatch('getStudentByPageAsync');
            // }
        },
        async addShopAsync({ dispatch }, payload) {
            console.log(payload)
            const data = await ShopService.addShop(payload);
            // if (data) {
            //     dispatch("getMessageAsync")
            // }
        }
    }
}