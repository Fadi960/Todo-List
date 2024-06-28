/*const { compare } = require("bcryptjs");

const userModel = require("../models/userModel");

module.exports = {
    login: async (body) => {
        try{
            const user = await userModel.getUser(body.username);
            console.log("user object:",user);
            if(user.error || !user.response){
                return{
                    error: {
                        message: "user not found",
                        error: user?.error || user.response,
                    },
                };
            }

            const isValid = await compare(body.password,
                user.response.datavalues.password
            );
            if(!isValid){
                return {
                    response : {
                      message: "invalid credentials",
                      response: false,
                    },
                };
            }

            return {
                response : {
                  message: "logged in successfully",
                  response: true,
                },
            };
        } catch (error) {
            console.log("error from service",error);
            return {
                error: error,
            };
        }
    },
    getUser: async (username) => {
        try {
            body.password = await hash(body.password, 10);
            body.userId = uuid();


            const user = await userModel.getUser(body);

            if (user.error) {
                return {
                    error: user.error,
                };
            }
            delete user.response.dataValues.password;
            return {
                response: user.response,
            };
        } catch (error) {
            return {
                error: error,
            };
        }
    },
};*/
require("dotenv").config();

const userModel = require("../models/userModel");
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

module.exports = {
  login: async (body) => {
    try {
      const isUser = await userModel.findByUserName(body.userName);
      if (isUser.error || !isUser.response) {
        return {
          error: {
            error: isUser?.error || isUser.response,
            message: "User Not Found!",
          },
        };
      }
      const isValid = await compare(
        body.password,
        isUser.response.dataValues.password
      );

      if (!isValid) {
        return {
          response: {
            token: "undefined",
            message: "invalid credentials",
          },
        };
      }

      delete isUser.response.dataValues.password;
      const token = sign(isUser.response.dataValues, process.env.SECRET, {
        expiresIn: 30,
      });

      //store in session table

      return {
        response: {
          token: token,
          message: "logged in successfully!",
        },
      };
    } catch (error) {
        console.log("error from service", error);
      return {
        error: error,
      };
    }
  },
};
