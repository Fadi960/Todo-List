/*const joi = require('joi');
const authService = require("../services/authService");
const { response } = require('express');
const { getUser } = require("../services/userService");

const loginSchema = joi.object().keys({
  username: joi.string().required(),
  password: joi.string().min(6).max(18).required(),
})

/*const updateUserSchema = joi.object().keys({
  username: joi.string().email(),
  password: joi.string().min(6).max(18),
});

const createUserSchema = joi.object().keys({
  username: joi.string().email().required(),
  password: joi.string().min(6).max(18).required(),
});*/

//const deleteUserSchema = joi.object()

/*module.exports = {
    login: async (req, res) => {
      try{
      const validate = await loginSchema.validateAsync(req.body);
      const login = await authService.login(validate);
      if(login.error){
        return res.send({
          error: login.error,
        });

      }
        return res.send({
        response: login.response,
        });
      }catch(error){
        console.log("error from controller",error);
          return res.send({
            error: error?.message || error,
          });
        }
},

getUser: async (req, res) => {
  try{
  const validate = await loginSchema.validateAsync(req.query);
  console.log(req.query);
    return res.send({
    message: "get user Api",
    data: validate,
    });
  }catch(error){
      return res.send({
        message: error.message,
      });
    }
},
};
/*
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
    //const validate = await deleteUserSchema.validateAsync(req.query);
    console.log(req.query);
    return res.send({
      message: "Delete user Api",
      //data: req.query
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
};
*/

const joi = require("joi");
const authService = require("../services/authService");

const loginSchema = joi.object().keys({
  userName: joi.string().required(),
  password: joi.string().min(6).max(18).required(),
});

module.exports = {
  login: async (req, res) => {
    try {
      const validate = await loginSchema.validateAsync(req.body);
      const login = await authService.login(validate);

      if (login.error) {
        console.log("error from controller",login.error);
        return res.send({
          error: login.error,
        });
      }

      res.cookie("auth", login.response.token, {
        maxAge: 30000,
      });
      return res.send({
        response: login.response,
      });
    } catch (error) {
      console.log("error from controller",error);
      return res.send({
        message: error.message,
      });
    }
  },

  logout: (req, res) => {
    console.log(req.body);
    return res.send({
      message: "logout Api",
      data: req.body,
    });
  },

  resetPassword: (req, res) => {
    return res.send({
      message: "reset password Api",
    });
  },
};