import Joi, { ObjectSchema } from "joi";

const urlRegex =
  /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

const credentialsSchema = Joi.object({
  url: Joi.string().pattern(urlRegex).required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
  title: Joi.string().required(),
});

export default credentialsSchema;
