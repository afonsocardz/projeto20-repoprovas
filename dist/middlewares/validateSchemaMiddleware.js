"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateSchema(schema) {
    return (req, res, next) => {
        const data = req.body;
        const { error } = schema.validate(data);
        if (error) {
            return res.status(422).send(error.details);
        }
        next();
    };
}
exports.default = validateSchema;
