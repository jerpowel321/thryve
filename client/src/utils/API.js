import axios from "axios";


export default {
    getAllFoods() {
        return axios.get("http://localhost:5000/foods")
    },
    // getCertainFoods: function (protein, fat, carb, sugar) {
    //     return axios.get("/foods")
    // }

};