const joi = require('joi');

const loginSchema = joi.object().keys({
  username: joi.string().email().required(),
  password: joi.string().min(6).max(18).required(),
})

module.exports = {
    login: async (req, res) => {
      try{
      const validate = await loginSchema.validateAsync(req.query);
      console.log(req.query);
        return res.send({
        message: "login Api",
        data: validate,
        });
      }catch(error){
          return res.send({
            message: error.message,
          });
        }
},
  
  logout: (req, res) => {
    console.log(req.body);
    return res.send({
        message: "logout Api",
        data: req.body
    });
  },

  resetPassword: (req,res) => {
    return res.send({
        message: "reset password Api",
    });
},
  };
