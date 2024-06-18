import { configureStore } from '@reduxjs/toolkit'
import {testApi} from "./api.ts";

export const store = configureStore({
    reducer: {
        [testApi.reducerPath]: testApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(testApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>