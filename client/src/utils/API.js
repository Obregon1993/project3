import axios from "axios";

export default {
  
    addUser: function(userData) {
        return axios.post("/api/users/add", userData);
    },
    logUser: function(userData) {
        return axios.post("/api/users/login", userData);
    },
    Auth: function(Token) {
        return axios.post("/auth", Token);
    },
};