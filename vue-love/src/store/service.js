import serviceService from "../service/service";
export default {
    namespaced: true,
    state: {
        form: {
            // 名称
            serviceName: '',
            // 服务类型
            serviceType: '',
            // 服务时间
            serviceSchedule: '',
            // 适用规格
            serviceCanFor: '',
            // 服务规格
            serviceDetial: '',
            //    耗时
            serviceTime: '',
            // 服务员等级
            serviceLevel: "",
            // 价格
            servicePrice: ``,
        }
    },
    mutations: {
    },
    actions: {
        async addServiceAsync({ dispatch }, payload) {
            console.log(payload)
            const data = await serviceService.addService(payload);
        }
    }
}