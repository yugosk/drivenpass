import Joi, { ObjectSchema } from "joi";

const networkSchema: ObjectSchema = Joi.object({
  title: Joi.string().required(),
  name: Joi.string().required(),
  password: Joi.string().required(),
});

export default networkSchema;
