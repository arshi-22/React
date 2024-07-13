import {apiSlice3} from './index'

import {
    onQueryStarted,
} from "./api-helper";
import { IConfig, IUserAccess} from "../../interface";
import {addInSweepList} from "../nft-slice";


export const Server3_Url = {
    userAccess: `user/userAccess/`,
    date: `user/date/`,
    checkUrl: `/user/checkUrl/`,
    getCartItems: `/user/getCartItems/`,
}

export const server1Api = apiSlice3.injectEndpoints({
    endpoints: (builder) => ({
        getCartItems: builder.query({
            query: (data) => ({
                url: Server3_Url.getCartItems,
                method: 'POST',
                body: data,
            }),
            async onQueryStarted(request, {queryFulfilled, dispatch}) {
                try {
                    const {data: result} = await queryFulfilled;
                    const {data = null} = result || {};
                    if (!!data) {
                        const {nfts = []}= data || {}
                        dispatch(addInSweepList(nfts));
                    }
                } catch (e) {

                }
            },
        }),
        getUserAccess: builder.mutation<IUserAccess, void>({
            query: () => ({
                url: Server3_Url.userAccess,
                method: 'POST',
            }),
            invalidatesTags:['get_cart'],
            async onQueryStarted(id, {dispatch, queryFulfilled}) {
                await onQueryStarted(id, {dispatch, queryFulfilled})
            }
        }),

        getConfigData: builder.query<IConfig, void>({
            query: () => ({
                url: Server3_Url.date,
                method: 'POST',
            }),
        }),

        checkUrl: builder.mutation({
            query: (data) => ({
                url: Server3_Url.checkUrl,
                method: 'POST',
                body: data,
            })
        }),
    }),
})

export const {
    useGetUserAccessMutation,
    useGetConfigDataQuery,
    useCheckUrlMutation,
    useGetCartItemsQuery
} = server1Api

