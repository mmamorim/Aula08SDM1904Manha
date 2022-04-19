import controller from "../controllers/bandas.js"

const rotaNome = "bandas";

export default function(app,config) {

    const rota = config.get("server.path_root")+rotaNome;
    console.log("rota configurada: ",rota);

    app.route(rota).get(controller.list)
    app.route(rota).post(controller.add)
    app.route(rota).put(controller.update)
    app.route(rota).delete(controller.remove)
}
