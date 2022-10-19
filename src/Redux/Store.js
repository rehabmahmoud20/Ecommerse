import {configureStore} from '@reduxjs/toolkit'
import {Counterslice} from './Counterslice'
import {shoppingslice} from './shoppingslice'

export const Store = configureStore({
 reducer :{
counter : Counterslice.reducer,
cartAmount:shoppingslice.reducer

 }
})
// console.log(Counterslice)

