import Joi, { ObjectSchema } from "joi";

const cardSchema: ObjectSchema = Joi.object({
  title: Joi.string().required(),
  number: Joi.string()
    .pattern(/\d{16}/)
    .required(),
  name: Joi.string().required(),
  cvv: Joi.string().pattern(/\d{3}/).required(),
  expirationDate: Joi.date().required(),
  password: Joi.string().required(),
  isVirtual: Joi.boolean().required(),
  type: Joi.string().valid("credit", "debit", "both").required(),
});

export default cardSchema;
