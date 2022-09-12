import { Router, IRouter } from "express";
import validateSchema from "../middlewares/schemaMiddleware";
import authSchema from "../schemas/authSchema";
import { createUser, userLogin } from "../controllers/authControllers";

const authRouter: IRouter = Router();

authRouter.post("/users/sign-up", validateSchema(authSchema), createUser);
authRouter.post("/users/login", validateSchema(authSchema), userLogin);

export default authRouter;
