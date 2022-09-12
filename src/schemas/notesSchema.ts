import Joi, { ObjectSchema } from "joi";

const noteSchema: ObjectSchema = Joi.object({
  title: Joi.string().max(50).required(),
  description: Joi.string().max(1000).required(),
});

export default noteSchema;
