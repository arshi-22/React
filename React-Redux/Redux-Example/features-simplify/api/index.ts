import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {BASE_URL3} from "../../utils/constants";
import {RootState} from "../../app/store";

//server 3

const baseQuery3 = fetchBaseQuery({
    baseUrl: BASE_URL3,
    credentials: 'include',
    prepareHeaders: (headers, {getState}) => {
        const token = (getState() as RootState).auth.token
        if (token) {
            headers.set('x-access-token', `${token}`)
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
