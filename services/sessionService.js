const sessionModel = require("../models/sessionModel");
const { v4: uuid } = require("uuid");

module.exports = {
    createSession: async (body) => {
        try {
            body.sessionId = uuid();
            body.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjMmFiMDAxNC01NGU2LTRjMjAtOGIxYS00NjRlOGM2YjI2NWUiLCJuYW1lIjoiRmFoYWQiLCJpYXQiOjE1MTYyMzkwMjJ9.7G10osyyChQqMYjUT-2pB-x2sllBeb0GDqbBqgM7Ybs"


            const session = await sessionModel.createSession(body);

            if (session.error) {
                return {
                    error: session.error,
                };
            }
            return {
                response: session.response,
            };
        } catch (error) {
            console.log("Error in service", error);
            return {
                error: error,
            };
        }
    },
};