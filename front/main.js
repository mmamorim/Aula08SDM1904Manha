
//API
import api from "./api.js"

// Vue
import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js"

import topo from "./topo.js"
import menuesquerdo from "./menuesquerdo.js"
import painel from "./painel.js"

createApp({
    components: {
        topo, menuesquerdo, painel
    },
    data() {
        return {
        }
    },
}).mount('#meuApp')
