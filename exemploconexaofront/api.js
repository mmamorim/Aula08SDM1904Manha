
const port = "4000";
const path = '/api/v1'
export default {

    get(rota) {
        return axios.get('http://localhost:' + port + path + '/' + rota);
    },

    post(rota, dados) {
        let bodyFormData = new URLSearchParams();
        for (let key in dados)
            bodyFormData.append(key, dados[key]);
        return axios({
            method: "post",
            url: 'http://localhost:' + port + path + '/' + rota,
            data: bodyFormData,
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        });
    },

    put(rota, dados) {
        let bodyFormData = new URLSearchParams();
        for (let key in dados)
            bodyFormData.append(key, dados[key]);
        return axios({
            method: "put",
            url: 'http://localhost:' + port + path + '/' + rota,
            data: bodyFormData,
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        });
    },

    delete(rota, id) {
        let bodyFormData = new URLSearchParams();
        bodyFormData.append("id", id);
        return axios({
            method: "delete",
            url: 'http://localhost:' + port + path + '/' + rota,
            data: bodyFormData,
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        });
    }
}