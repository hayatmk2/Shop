import { configureStore, combineReducers} from '@reduxjs/toolkit'
import {productDetailsReducer, productListReducer} from './reducers/productReducers'

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer

})
const store = configureStore({
  reducer: rootReducer,
  preloadedState: {},
  middleware:(getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
  
})

export default store
