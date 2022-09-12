import { Router, IRouter } from "express";
import validateSchema from "../middlewares/schemaMiddleware";
import credentialsSchema from "../schemas/credentialsSchema";
import { validateToken } from "../middlewares/authMiddleware";
import {
  deleteCredential,
  getCredentialById,
  getCredentials,
  postCredential,
} from "../controllers/credentialsControllers";

const credentialsRouter: IRouter = Router();

credentialsRouter.post(
  "/credentials",
  validateSchema(credentialsSchema),
  validateToken,
  postCredential
);

credentialsRouter.get("/credentials", validateToken, getCredentials);

credentialsRouter.get("/credentials/:id", validateToken, getCredentialById);

credentialsRouter.delete("/credentials/:id", validateToken, deleteCredential);

export default credentialsRouter;
