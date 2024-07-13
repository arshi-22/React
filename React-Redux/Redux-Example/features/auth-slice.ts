import {createSlice} from '@reduxjs/toolkit'

import {SEARCH_TAB_TYPES} from "../screens/search/constants";
import {IAuth} from "../interface";

const token = localStorage.getItem('token')

const initialSate: IAuth = {
    token: token !== "null" ? token : null,
    user: null,
    mainLoading: true,
    profileSetup: true,
    showConnectionModal: false,
    showManualModal: false,
    currency: [],
    networks: [],
    categories: [],
    selectedNetwork: null,
    swapSelectedNetwork: null,
    socketConnection: false,
    searchTab: SEARCH_TAB_TYPES.collection,
    maxPrice: 0,
};

export const auth = createSlice({
    name: "auth",
    initialState: initialSate,
    reducers: {
        setTokenAction: (state, action) => {
            const {access_token = null} = action.payload;
            localStorage.setItem("token", access_token);
            state.token = access_token;
        },
        setNetworksAction: (state, action) => {
            state.networks = action.payload;
        },
        setCategoriesAction: (state, action) => {
            state.categories = action.payload;
        },
        setCredentialsAction: (state, action) => {
            const {user = null} = action.payload;
            state.user = user;
        },
        setProfileSetup: (state, action) => {
            const {acceptedTerms = null} = action.payload;
            state.profileSetup = acceptedTerms;
        },
        setCurrencyList: (state, action) => {
            state.currency = action.payload;
        },
        logOutAction: (state) => {
            localStorage.setItem("token", null);
            state.token = null;
            state.user = null;
        },
        setMainLoading: (state, action) => {
            state.mainLoading = action.payload;
        },
        setSelectedNetwork: (state, action) => {
            state.selectedNetwork = action.payload;
        },
        setSwapSelectedNetwork: (state, action) => {
            state.swapSelectedNetwork = action.payload;
        },
        setSearchTab: (state, action) => {
            state.searchTab = action.payload;
        },
        setMaxPrice: (state, action) => {
            state.maxPrice = action.payload;
        },
        setShowConnectionModal: (state, action) => {
            state.showConnectionModal = action.payload;
        },
        setShowManualModal: (state, action) => {
            state.showManualModal = action.payload;
        },
        setSocketConnection: (state, action) => {
            state.socketConnection = action.payload;
        },
    },
});

export const {
    setCredentialsAction,
    setSelectedNetwork,
    setNetworksAction,
    setCategoriesAction,
    setMainLoading,
    setCurrencyList,
    setProfileSetup,
    setTokenAction,
    logOutAction,
    setSearchTab,
    setMaxPrice,
    setSwapSelectedNetwork,
    setShowConnectionModal,
    setShowManualModal,
    setSocketConnection
} = auth.actions;

export default auth.reducer