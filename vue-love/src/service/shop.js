const addShop = async (obj) => await fetch(`/shop/addShop`, {
    method: "post",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(obj)
}).then(response => response.json());
export default {
    addShop
}