import { Router, IRouter } from "express";
import validateSchema from "../middlewares/schemaMiddleware";
import { validateToken } from "../middlewares/authMiddleware";
import {
  deleteNetwork,
  getNetworkById,
  getNetworks,
  postNetwork,
} from "../controllers/networkControllers";
import networkSchema from "../schemas/networkSchema";

const networksRouter: IRouter = Router();

networksRouter.post(
  "/networks",
  validateSchema(networkSchema),
  validateToken,
  postNetwork
);

networksRouter.get("/networks", validateToken, getNetworks);

networksRouter.get("/networks/:id", validateToken, getNetworkById);

networksRouter.delete("/networks/:id", validateToken, deleteNetwork);

export default networksRouter;
