const Joi = require('@hapi/joi')
const { Schema } = require('mongoose')

const validateParam = (schema,name) =>{
    return (req, res, next) => {
        const validatorResult = schema.validate(req.body)

        if (validatorResult.error) {
            return res.status(400).json(validatorResult.error)
        } else {
            if (!req.value) req.value = {}
            if (!req.value['params']) req.value.params = {}

            req.value.body = validatorResult.value
            next()
        }
    }
}
const schemas = {
    idSchema: Joi.object().keys({
        param:Joi.string().regex(/^[0-9a-fA-F]{24}/).required()
    })
}

module.exports = {
    validateParam,
    schemas
}