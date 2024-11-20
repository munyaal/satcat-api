import * as Joi from "joi";

export const validationSchema = Joi.object ({
    DATABASE_URL: Joi.string().uri().required(),
    DB_NAME: Joi.string().required()
})