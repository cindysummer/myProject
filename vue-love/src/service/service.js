const addService = async (obj) => await fetch(`/service/addServices`, {
    method: "post",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(obj)
}).then(response => response.json());
export default {
    addService
}