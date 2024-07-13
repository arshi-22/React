import {apiSlice3} from './index'

import {
    onMigrateNFTQueryFullFilled,
    onMigrationCollectionQueryFullFilled,
    onMyCollectionQueryFullFilled,
    onNetworkQueryFullFilled, onNFTQueryFullFilled,
    onQueryStarted, onQueryStartedConfig,
} from "./api-helper";
import {ICollectionResponse, IConfig, IUserAccess} from "../../interface";
import {addInSweepList, setNFTDetail} from "../nft-slice";
import {
    setCollectionSweep,
    setCollectionSweepFirst
} from "../collection-slice";

export const Server3_Url = {
    getNotification: `/user/getNotification/`,
    getAnalytics: `/user/getAnalytics/`,
    network: `/user/getNetworks/`,
    appConfig: `/user/appConfig/`,
    userAccess: `user/userAccess/`,
    date: `user/date/`,
    checkUrl: `/user/checkUrl/`,
    getBids: `/user/getBids/`,
    getPromo: `/user/getPromo/`,
    getBanner: `/user/getBanner/`,
    tokenId: `/user/getToken/`,
    getProfile: `/user/getProfile/`,
    getNFTs: `/user/getItems/`,
    getMyCollections: `/user/myCollections/`,
    ownerships: `/user/myOwnerships/`,
    getCollections: `/user/getCollections/`,
    getNFT: `/user/getItem/`,
    getTransactionHistory: `/user/getHistory/`,
    getTopCategories: `/user/trendingCategory/`,
    getMigrateCollections: `/user/getMigratedCollections/`,
    getMigrateNFTs: `/user/getMigratedNFTs/`,
    getMigrateTrxnFee: `/user/getMigrateTrxnFee/`,
    getItemsSweep: `/user/getItemsSweep/`,
    getCartItems: `/user/getCartItems/`,
}

export const server1Api = apiSlice3.injectEndpoints({
    endpoints: (builder) => ({
        getItemsSweep: builder.query({
            query: (data) => ({
                url: Server3_Url.getItemsSweep,
                method: 'POST',
                body: data,
            }),
            async onQueryStarted(request, {queryFulfilled, dispatch}) {
                const {page = 1, collection_uuid: collectionId = ""} = request;
                if (page === 1) {
                    dispatch(setCollectionSweepFirst({collectionId}));
                }
                try {
                    const {data: result} = await queryFulfilled;
                    const {data = null} = result || {};
                    if (!!data) {
                        const {meta} = data
                        const {currentPage = 1} = meta || {}
                        if (currentPage === 1) {
                            dispatch(setCollectionSweepFirst({collectionId}));
                            dispatch(setCollectionSweep(data));
                        } else {
                            dispatch(setCollectionSweep(data));
                        }
                    }
                } catch (e) {

                }

            },
        }),
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
        getNotification: builder.query({
            query: () => ({
                url: Server3_Url.getNotification,
                method: 'POST',
            }),
            providesTags: ['Notifications']
        }),
        getAnalytics: builder.query<any, void>({
            query: () => ({
                url: Server3_Url.getAnalytics,
                method: 'POST',
            }),
        }),
        getNetwork: builder.query<any, void>({
            query: () => ({
                url: Server3_Url.network,
                method: 'POST',
            }),
            async onQueryStarted(id, {dispatch, queryFulfilled}) {
                await onNetworkQueryFullFilled(id, {dispatch, queryFulfilled})
            }
        }),
        appConfig: builder.query({
            query: () => ({
                url: Server3_Url.appConfig,
                method: 'POST',
            }),
            async onQueryStarted(id, {dispatch, queryFulfilled}) {
                await onQueryStartedConfig(id, {dispatch, queryFulfilled})
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
        getBids: builder.query({
            query: (data) => ({
                url: Server3_Url.getBids,
                method: "POST",
                body: data,
            }),
            providesTags: ["offers"],
        }),
        getPromotionNFTs: builder.query({
            query: (data) => ({
                url: Server3_Url.getPromo,
                method: "POST",
                body: data,
            }),
        }),
        getTokenId: builder.query({
            query: (data) => ({
                url: Server3_Url.tokenId,
                method: 'POST',
                body: !!data ? data : {},
            }),
        }),
        getProfile: builder.query({
            query: (data) => ({
                url: Server3_Url.getProfile,
                method: 'POST',
                body: data
            }),
        }),
        getBanner: builder.query<any, void>({
            query: () => ({
                url: Server3_Url.getBanner,
                method: 'POST',
            }),
        }),
        getNFTs: builder.query({
            query: (data) => ({
                url: Server3_Url.getNFTs,
                method: "POST",
                body: data,
            }),
        }),
        getMyCollections: builder.query<ICollectionResponse, any>({
            query: (data) => ({
                url: Server3_Url.getMyCollections,
                method: "POST",
                body: data,
            }),
            async onQueryStarted(payload, {dispatch, queryFulfilled}) {
                await onMyCollectionQueryFullFilled(payload, {
                    dispatch,
                    queryFulfilled,
                });
            },
            providesTags: ["collections"],
        }),
        ownerships: builder.query({
            query: (data) => ({
                url: Server3_Url.ownerships,
                method: "POST",
                body: data,
            }),
            async onQueryStarted(payload, {dispatch, queryFulfilled}) {
                await onNFTQueryFullFilled(payload, {dispatch, queryFulfilled});
            },
        }),
        getCollections: builder.query({
            query: (data) => ({
                url: Server3_Url.getCollections,
                method: "POST",
                body: data,
            }),
            providesTags: ["collections"],
        }),
        getNFT: builder.query({
            query: (data) => ({
                url: Server3_Url.getNFT,
                method: "POST",
                body: data,
            }),
            providesTags: ["NFT_Detail"],
            async onQueryStarted(id, {dispatch, queryFulfilled}) {
                try {
                    const {data: result} = await queryFulfilled;
                    const {data = {}, code} = result || {};
                    dispatch(setNFTDetail(data));
                } catch (e) {

                }

            },
        }),
        getTransactionHistory: builder.query({
            query: (data) => ({
                url: Server3_Url.getTransactionHistory,
                method: "POST",
                body: data,
            }),
            providesTags: ["transactionHistory"],
        }),
        getMigrateCollections: builder.query<ICollectionResponse, any>({
            query: (data) => ({
                url: Server3_Url.getMigrateCollections,
                method: "POST",
                body: data,
            }),
            async onQueryStarted(payload, {dispatch, queryFulfilled}) {
                await onMigrationCollectionQueryFullFilled(payload, {
                    dispatch,
                    queryFulfilled,
                });
            },
        }),
        getTopCategories: builder.query<any, void>({
            query: () => ({
                url: Server3_Url.getTopCategories,
                method: "POST",
            }),
        }),
        getMigrateTrxnFee: builder.query({
            query: (data) => ({
                url: Server3_Url.getMigrateTrxnFee,
                method: "POST",
                body: data,
            }),
        }),
        getMigrateNFTs: builder.query({
            query: (data) => ({
                url: Server3_Url.getMigrateNFTs,
                method: "POST",
                body: {data},
            }),
            providesTags: ["get_cart"],
            async onQueryStarted(payload, {dispatch, queryFulfilled}) {
                await onMigrateNFTQueryFullFilled(payload, {dispatch, queryFulfilled});
            },

        }),
    }),
})

export const {
    useGetNotificationQuery,
    useGetAnalyticsQuery,
    useGetNetworkQuery,
    useAppConfigQuery,
    useGetUserAccessMutation,
    useGetConfigDataQuery,
    useCheckUrlMutation,
    useGetBidsQuery,
    useGetPromotionNFTsQuery,
    useGetTokenIdQuery,
    useGetProfileQuery,
    useGetBannerQuery,
    useGetNFTsQuery,
    useGetMyCollectionsQuery,
    useOwnershipsQuery,
    useGetCollectionsQuery,
    useGetNFTQuery,
    useGetTransactionHistoryQuery,
    useGetTopCategoriesQuery,
    useGetMigrateCollectionsQuery,
    useGetMigrateNFTsQuery,
    useGetMigrateTrxnFeeQuery,
    useGetItemsSweepQuery,
    useGetCartItemsQuery
} = server1Api

