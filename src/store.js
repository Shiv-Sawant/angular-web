import { configureStore } from "@reduxjs/toolkit";
import CreateDealSlice from "./content/Dashboards/CreateDeal/CreateDealSlice";

export const store = configureStore({
    reducer: {
        app: CreateDealSlice
    }
})