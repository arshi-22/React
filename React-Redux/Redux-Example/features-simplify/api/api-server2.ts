import {apiSlice2} from './index'

import {
    setCollectionDetail,
    setCollectionDetailFirst,
    setCollectionHistory,
    setCollectionHistoryFirst, setExploreNFTs, setExploreNFTsFirst
} from "../collection-slice";
import {SEARCH_TAB_TYPES} from "../../screens/search/constants";
import {
    onCollectionQueryFullFilled,
    onNFTQueryFullFilled,
    onTokenQueryFullFilled,
    onUserQueryFullFilled
} from "./api-helper";

export const Server2_Url = {
    collectionDetail: `/user/collectionDetail/`,
    collectionHistory: `/user/collectionhistory/`,
    search: `/user/search/`,
    getTopCollections: `/user/getTopCollections/`,
    getCollectionsWithCategory: `/user/exploreCollections/`,
    getAllItems: `/user/getAllItems/`,
    getCollectionItem: `/user/getCollectionItems/`,
    getHolders: `/user/getHolders/`,
    getERC20Tokens: `/user/getERC20Tokens/`,
}

export const server1Api = apiSlice2.injectEndpoints({
    endpoints: (builder) => ({
        collectionDetail: builder.query({
            query: (data) => ({
                url: Server2_Url.collectionDetail,
                method: "POST",
                body: data,
            }),
            async onQueryStarted(request, {queryFulfilled, dispatch}) {
                const {page = 1, collectionId = ""} = request;
                if (page === 1) {
                    dispatch(setCollectionDetailFirst({collectionId}));
                }
                try{
                    const {data: result} = await queryFulfilled;
                    const {data = null} = result || {};
                    if (!!data) {
                        const {meta} = data
                        const {currentPage=1} = meta || {}
                        if(currentPage === 1 ){
                            dispatch(setCollectionDetailFirst({collectionId}));
                            dispatch(setCollectionDetail(data));
                        }else{
                            dispatch(setCollectionDetail(data));
                        }
                    }
                }catch (e){

                }

            },
        }),
        collectionHistory: builder.query({
            query: (data) => ({
                url: Server2_Url.collectionHistory,
                method: "POST",
                body: data,
            }),
            async onQueryStarted(request, {queryFulfilled, dispatch}) {
                try {
                    const {page = 1, collection_id = ""} = request || {};
                    if (page === 1) {
                        dispatch(setCollectionHistoryFirst({collectionId: collection_id}));
                    }
                    const {data: result} = await queryFulfilled;
                    const {data = null} = result || {};
                    if (!!data) {
                        dispatch(setCollectionHistory(data));
                    }
                } catch (e) {

                }
            }
        }),
        search: builder.query({
            query: (data) => ({
                url: Server2_Url.search,
                method: 'POST',
                body: data
            }),
            async onQueryStarted(payload, {dispatch, queryFulfilled}) {
                const {type} = payload
                if (type === SEARCH_TAB_TYPES.collection) {
                    await onCollectionQueryFullFilled(payload, {dispatch, queryFulfilled})
                } else if (type === SEARCH_TAB_TYPES.users) {
                    await onUserQueryFullFilled(payload, {dispatch, queryFulfilled})
                } else if (type === SEARCH_TAB_TYPES.nfts) {
                    await onNFTQueryFullFilled(payload, {dispatch, queryFulfilled})
                }else if (type === SEARCH_TAB_TYPES.erc20) {
                    await onTokenQueryFullFilled(payload, {dispatch, queryFulfilled})
                }
            }
        }),
        searchFew: builder.query({
            query: (data) => ({
                url: Server2_Url.search,
                method: 'POST',
                body: data
            }),
        }),
        getTopCollections: builder.query({
            query: (data) => ({
                url: Server2_Url.getTopCollections,
                method: "POST",
                body: data,
            }),
        }),
        getCollectionsWithCategory: builder.query<any, any>({
            query: (data) => ({
                url: Server2_Url.getCollectionsWithCategory,
                method: "POST",
                body: data,
            }),
            async onQueryStarted(payload, {dispatch, queryFulfilled}) {
                await onCollectionQueryFullFilled(payload, {
                    dispatch,
                    queryFulfilled,
                });
            },
            providesTags: ["collections"],
        }),
        getAllItems: builder.query({
            query: (data) => ({
                url: Server2_Url.getAllItems,
                method: "POST",
                body: data,
            }),
            async onQueryStarted(request, {queryFulfilled, dispatch}) {
                try {
                    const {page = 1} = request;
                    if (page === 1) {
                        dispatch(setExploreNFTsFirst({}));
                    }
                    const {data: result} = await queryFulfilled;
                    const {data = null} = result || {};
                    if (!!data) {
                        dispatch(setExploreNFTs(data));
                    }
                } catch (error) {
                    console.log(error);
                }

            },
        }),
        getCollectionItem: builder.query({
            query: (data) => ({
                url: Server2_Url.getCollectionItem,
                method: "POST",
                body: data,
            }),
        }),
        getHolders: builder.query({
            query: (data) => ({
                url: Server2_Url.getHolders,
                method: "POST",
                body: data,
            }),
        }),
        getERC20Tokens: builder.query({
            query: (data) => ({
                url: Server2_Url.getERC20Tokens,
                method: "POST",
                body: data,
            }),
        }),
    }),
})

export const {
    useGetERC20TokensQuery,
    useCollectionDetailQuery,
    useCollectionHistoryQuery,
    useSearchQuery,
    useSearchFewQuery,
    useGetTopCollectionsQuery,
    useGetCollectionsWithCategoryQuery,
    useGetAllItemsQuery,
    useGetCollectionItemQuery,
    useGetHoldersQuery
} = server1Api

