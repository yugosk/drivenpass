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
  "/cards",
  validateSchema(networkSchema),
  validateToken,
  postNetwork
);

networksRouter.get("/cards", validateToken, getNetworks);

networksRouter.get("/cards/:id", validateToken, getNetworkById);

networksRouter.delete("/cards/:id", validateToken, deleteNetwork);

export default networksRouter;
