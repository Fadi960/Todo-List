const joi = require('joi');

const loginSchema = joi.object().keys({
  username: joi.string().email().required(),
  password: joi.string().min(6).max(18).required(),
})

const updateUserSchema = joi.object().keys({
  username: joi.string().email(),
  password: joi.string().min(6).max(18),
});

const createUserSchema = joi.object().keys({
  username: joi.string().email().required(),
  password: joi.string().min(6).max(18).required(),
});

const deleteUserSchema = joi.object()

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

   updateUser: async (req, res) => {
  try{
  const validate = await updateUserSchema.validateAsync(req.body);
  console.log(req.body);
    return res.send({
    message: "update user Api",
    data: validate,
    });
  }catch(error){
      return res.status(400).send({
        message: error.message,
      });
    }
},

createUser: async (req, res) => {
  try {
    const validate = await createUserSchema.validateAsync(req.body);
    console.log(req.body);
    return res.send({
      message: "create user Api",
      data: validate,
    });
  } catch (error) {
    return res.status(400).send({
      message: error.message,
    });
  }
},

deleteUser: async (req, res) => {
  try {
    const validate = await deleteUserSchema.validateAsync(req.query);
    console.log(req.query);
    return res.send({
      message: "Delete user Api",
      data: validate,
    });
  } catch (error) {
    return res.status(400).send({
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
    console.log(req.query);
    return res.send({
        message: "reset password Api",
        data: req.query
    });
  }
}