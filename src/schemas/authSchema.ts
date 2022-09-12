import Joi, { ObjectSchema } from "joi";

const authSchema: ObjectSchema = Joi.object({
  email: Joi.string()
    .pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    .required(),
  password: Joi.string().min(10).required(),
});

export default authSchema;
