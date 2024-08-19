import { combineReducers } from '@reduxjs/toolkit';

import uiSlice from './slices/uiSlice'

const reducers = combineReducers({
    ui: uiSlice,
})

export default reducers;