const addPets = async (obj) => await fetch(`/pet/addPets`, {
    method: "post",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(obj)
}).then(response => response.json());
export default {
    addPets
}