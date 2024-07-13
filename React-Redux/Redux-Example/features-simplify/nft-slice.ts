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
        addInSweepList: (state, action) => {
            const payload = action.payload
            state.sweepList = payload
        }
    },
})

export const {
    addInSweepList,
} = auth.actions

export default auth.reducer