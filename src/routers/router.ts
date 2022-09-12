import { Router, IRouter } from "express";
import authRouter from "./authRouter";
import credentialsRouter from "../routers/credentialsRouter";

const router: IRouter = Router();

router.use(authRouter);
router.use(credentialsRouter);

export default router;
