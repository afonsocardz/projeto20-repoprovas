import Joi from 'joi';

export const UserSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(3).max(15).required().label('Password'),
    confirmPassword: Joi.any().equal(Joi.ref('password'))
    .required()
    .label('Confirm password')
    .messages({ 'any.only': '{{#label}} does not match' })
});