import {createSlice} from '@reduxjs/toolkit'

import {INFT, INFTOffers} from "../interface";

const default_offer: INFTOffers = {
    tokenAddress: '',
    tokenId: '',
    id: '',
    offerList: [],
}

const initialSate: INFT = {
    INFTDetail: null,
    showCart: false,
    nftList: [],
    favouriteNFTList: [],
    migrateNFTList: [],
    offerList: default_offer,
    sweepList: []
}

export const auth = createSlice({
    name: 'NFT',
    initialState: initialSate,
    reducers: {
        setNFTDetail: (state, action) => {
            if (!!action && !!action.payload) {
                state.INFTDetail = action.payload
            }
        },

        setNFTList: (state, action) => {
            const payload = !!action && !!action.payload ? action.payload : undefined
            const {nft = [], page = 1} = payload || {}
            if (page === 1) {
                state.nftList = nft
            } else {
                state.nftList = [...state.nftList, ...nft]
            }
        },
        setFavouriteNFTList: (state, action) => {
            const payload = !!action && !!action.payload ? action.payload : undefined
            const {nft = [], page = 1} = payload || {}
            if (page === 1) {
                state.favouriteNFTList = nft
            } else {
                state.favouriteNFTList = [...state.favouriteNFTList, ...nft]
            }
        },
        setMigrateNFTList: (state, action) => {
            const payload = !!action && !!action.payload ? action.payload : undefined
            const {nft = [], page = 1} = payload || {}
            if (page === 1) {
                state.migrateNFTList = nft
            } else {
                state.migrateNFTList = [...state.migrateNFTList, ...nft]
            }
        },
        setNFTListOffers: (state, action) => {
            const payload = !!action && !!action.payload ? action.payload : default_offer
            state.offerList = {...state.offerList, ...payload}
        },

        addInSweepList: (state, action) => {
            const payload = action.payload
            state.sweepList = payload
        },
        showCartAction: (state, action) => {
            const payload = action.payload
            state.showCart = payload
        },
        removeCartAction: (state, action) => {
            const payload = action.payload
            state.sweepList = state.sweepList.filter(item => item.uuid !== payload)
        },
        removeCartMultipleAction: (state, action) => {
            const {network, currency, collection} = action.payload
            state.sweepList = state.sweepList.filter(item => !( item.network === network && item.currency === currency && item.collection_id === collection))
        },
    },
})

export const {
    setNFTList,
    setNFTDetail,
    setNFTListOffers,
    setFavouriteNFTList,
    setMigrateNFTList,
    addInSweepList,
    showCartAction,
    removeCartAction,
    removeCartMultipleAction
} = auth.actions

export default auth.reducer