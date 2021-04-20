import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";



const routes = Router();


/*
* Tipos de parametros
* Routes params => parametros de rotas
* Query Params => filtros e buscas
* Body Params => 
*/

const settingsControler = new SettingsController()

routes.post("/settings", settingsControler.create)

export { routes }