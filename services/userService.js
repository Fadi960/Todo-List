const userModel = require("../models/userModel");
const { hash } = require("bcryptjs");
const { v4: uuid } = require("uuid");
const { 
    getUser
        /*createUser,
        getAllUsers,
        deleteUser,
        updateUser*/
    } = require("../controller/authController");

module.exports = {
    createUser: async (body) => {
        try {
            body.password = await hash(body.password, 10);
            body.userId = uuid();

            const user = await userModel.createUser(body);

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


    getAllUsers: async () => {
        try {
            const users = await userModel.getAllUsers();
            if (users.error) {
                return {
                    error: users.error,
                };
            }
            return {
                response: users.response,
            };
        } catch (error) {
            return {
                error: error,
            };
        }
    },

    deleteUser: async (userId) => {
        try {
            const deleteUser = await userModel.deleteUser(userId);
            if (deleteUser.error || deleteUser.response) {
                return {
                    error: {
                        message: "unable to delete",
                        error: deleteUser?.error || deleteUser.response,
                    },
                };
            }
            return {
                response: {
                    message: "User is deleted!",
                    response: deleteUser.response,
                },
            };
        } catch (error) {
            return {
                error: error,
            };
        }
    },

    updateUser: async (body) => {
        try {
            const updateUser = await userModel.updateUser(body);
            if (updateUser.error || !updateUser.response[0]) {
                return {
                    error: {
                        message: "unable to update",
                        error: updateUser?.error || updateUser.response,
                    },
                };
            }
            return {
                response: {
                    message: "user is updated",
                    response: updateUser.response,
                },
            };
        } catch (error) {
            console.log("error from service",error);
            return {
                error: error,
            };
        }
    },
};