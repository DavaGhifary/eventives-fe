import { createSlice } from '@reduxjs/toolkit';

import navs from '../../src/components/_nav'

const initSlice = {
    sidebarShow: true,
    sidebarUnfoldable: false,
    navbarGroups: navs.filter(nav => {
        if (nav.type === 'group') {
            nav.isActive = false;
            return true;
        }
        return false;
    })
}

const uiSlice = createSlice({
    name: "ui",
    initialState: initSlice,
    reducers: {
        sidebarToggle(state, action) {
            const { visible } = action.payload;
            state.sidebarShow = visible;
        },
        sidebarUnfoldableToggle(state) {
            state.sidebarUnfoldable = !state.sidebarUnfoldable;
        },
        navbarGroupToggle(state, action) {
            const { isActive, name } = action.payload;
            const index = state.navbarGroups.findIndex(group => group.name === name);

            const data = state.navbarGroups[index];
            data.isActive = isActive;
            state.navbarGroups[index] = data;
        }
    }
});

export const uiAction = uiSlice.actions;

export default uiSlice.reducer;