import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";



const routes = Router();


/*
* Tipos de parametros
* Routes params => parametros de rotas
* Query Params => filtros e buscas
* Body Params => 
*/

const settingsControler = new SettingsController()
const usersController = new UsersController()
const messagesController = new MessagesController()


routes.post("/settings", settingsControler.create)

routes.post("/users", usersController.create)

routes.post("/messages", messagesController.create)
routes.get("/messages/:id", messagesController.showByUser)

export { routes }