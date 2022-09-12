import { Router, IRouter } from "express";
import authRouter from "./authRouter";
import credentialsRouter from "../routers/credentialsRouter";
import notesRouter from "./notesRouter";
import cardsRouter from "./cardsRouter";
import networksRouter from "./networksRouter";

const router: IRouter = Router();

router.use(authRouter);
router.use(credentialsRouter);
router.use(notesRouter);
router.use(cardsRouter);
router.use(networksRouter);

export default router;
