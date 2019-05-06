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
            goods: "",
            pets: "",
            service: ""
        }
    },
    mutations: {
        // getMessage: (state, payload) => {
        //     //一定不能解构state赋值，这样会破坏掉vue原本的响应式原理
        //     Object.assign(state, { message: payload });
        // }
    },
    actions: {
        // async getMessageAsync({ commit }) {
        //     const data = await MesService.getMessage();
        //     commit("getMessage", data);
        // },
        async addShopAsync({ dispatch }, payload) {
            console.log(payload)
            const data = await ShopService.addShop(payload);
            // if (data) {
            //     dispatch("getMessageAsync")
            // }
        }
    }
}