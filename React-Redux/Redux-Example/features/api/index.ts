import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {BASE_URL1, BASE_URL2, BASE_URL3, SWAP_BASE_URL} from "../../utils/constants";
import {RootState} from "../../app/store";


const baseQuery1 = fetchBaseQuery({
    baseUrl: BASE_URL1,
    credentials: 'include',
    prepareHeaders: (headers, {getState}) => {
        const token = (getState() as RootState).auth.token
        const address = (getState() as RootState).walletSlice.metaMaskWallet.signedAccount
        if (token && address) {
            headers.set('x-access-token', `${token}`)
            headers.set('x-visitor-address', `${address}`)
        }
        return headers
    },
})

const baseQueryGetHeaderToken1 = async (args, api, extraOptions) => {
    try {
        let result = await baseQuery1(args, api, extraOptions)
        return result
    } catch (error) {

    }
}

export const apiSlice1 = createApi({
    baseQuery: baseQueryGetHeaderToken1,
    reducerPath: 'server1',
    tagTypes: ['Cashback'],
    endpoints: builder => ({})
})

//server 2

const baseQuery2 = fetchBaseQuery({
    baseUrl: BASE_URL2,
    credentials: 'include',
    prepareHeaders: (headers, {getState}) => {
        const token = (getState() as RootState).auth.token
        const address = (getState() as RootState).walletSlice.metaMaskWallet.signedAccount
        if (token && address) {
            headers.set('x-access-token', `${token}`)
            headers.set('x-visitor-address', `${address}`)
        }
        return headers
    },
})


const baseQueryGetHeaderToken2 = async (args, api, extraOptions) => {
    try {
        let result = await baseQuery2(args, api, extraOptions)
        return result
    } catch (error) {
    }

}

export const apiSlice2 = createApi({
    baseQuery: baseQueryGetHeaderToken2,
    reducerPath: 'server2',
    tagTypes: ['collections'],
    endpoints: builder => ({})
})

//server 3

const baseQuery3 = fetchBaseQuery({
    baseUrl: BASE_URL3,
    credentials: 'include',
    prepareHeaders: (headers, {getState}) => {
        const token = (getState() as RootState).auth.token
        const address = (getState() as RootState).walletSlice.metaMaskWallet.signedAccount
        if (token && address) {
            headers.set('x-access-token', `${token}`)
            headers.set('x-visitor-address', `${address}`)
        }
        return headers
    },
})


const baseQueryGetHeaderToken3 = async (args, api, extraOptions) => {
    try {
        let result = await baseQuery3(args, api, extraOptions)
        return result
    } catch (error) {

    }
}

export const apiSlice3 = createApi({
    baseQuery: baseQueryGetHeaderToken3,
    reducerPath: 'server3',
    tagTypes: ['collections', 'transactionHistory', 'offers', 'Notifications', 'NFT_Detail', 'get_cart'],
    endpoints: builder => ({})
})


//swap server
const swapBaseQuery = fetchBaseQuery({
    baseUrl: SWAP_BASE_URL,
})

export const apiSwapSlice = createApi({
    baseQuery: swapBaseQuery,
    reducerPath: 'Swap',
    tagTypes: [],
    endpoints: builder => ({})
})
