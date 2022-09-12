import { Router, IRouter } from "express";
import validateSchema from "../middlewares/schemaMiddleware";
import { validateToken } from "../middlewares/authMiddleware";
import {
  deleteCard,
  getCardById,
  getCards,
  postCard,
} from "../controllers/cardsControllers";
import cardSchema from "../schemas/cardSchema";

const cardsRouter: IRouter = Router();

cardsRouter.post("/cards", validateSchema(cardSchema), validateToken, postCard);

cardsRouter.get("/cards", validateToken, getCards);

cardsRouter.get("/cards/:id", validateToken, getCardById);

cardsRouter.delete("/cards/:id", validateToken, deleteCard);

export default cardsRouter;
