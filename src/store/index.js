import  { configureStore } from "@reduxjs/toolkit";

import {
    carsReducer,
    addCar,
    removeCar,
    changeSearchTerm
} from './slices/carsSlice';

import {
    formReducer,
    changeName,
    changeCost
} from './slices/fomslice';

const store =configureStore({
    reducer:{
        cars: carsReducer,
        form: formReducer
    }
});

export {
    store,
    changeName,
    changeCost,
    addCar,
    removeCar,
    changeSearchTerm
};