import { Router, IRouter } from "express";
import authRouter from "./authRouter";
import credentialsRouter from "../routers/credentialsRouter";
import notesRouter from "./notesRouter";
import cardsRouter from "./cardsRouter";

const router: IRouter = Router();

router.use(authRouter);
router.use(credentialsRouter);
router.use(notesRouter);
router.use(cardsRouter);

export default router;
