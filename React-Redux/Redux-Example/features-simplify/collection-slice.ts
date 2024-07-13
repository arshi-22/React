import {createSlice} from '@reduxjs/toolkit'

import {ICollectionSlice} from "../interface";

const initialSate: ICollectionSlice = {
    collection: undefined,
    meta: {},
    nft: [],
    statePage: 1,
    collectionId: '',
    hasMorePages: true,
    collections: [],
    collectionHistoryId: '',

    homeNftsSection: {
        nft: [],
        category: 0
    },

    historyList: [],
    historyMeta: {},
    historyFirstLoading: true,
    historyHasMorePages: true,

    searchTokenSection: {
        collectionList: [],
        currentPage: 1,
        hasMorePages: true,
        meta: {}
    },
    exploreCollectionSection: {
        collectionList: [],
        currentPage: 1,
        hasMorePages: true,
        meta: {}
    },

    myCollectionSection: {
        collectionList: [],
        currentPage: 1,
        hasMorePages: true,
        meta: {}
    },

    favoriteCollectionSection: {
        collectionList: [],
        currentPage: 1,
        hasMorePages: true,
        meta: {}
    },

    migratedCollectionSection: {
        collectionList: [],
        currentPage: 1,
        hasMorePages: true,
        meta: {}
    },


    exploreNftSection: {
        nftList: [],
        currentPage: 1,
        hasMorePages: true,
        meta: {}
    }  ,
    sweepNftSection: {
        nftList: [],
        currentPage: 1,
        hasMorePages: true,
        meta: {}
    }
}

export const collectionSlice = createSlice({
    name: 'collectionDetail',
    initialState: initialSate,
    reducers: {
        setCollectionSweepFirst: (state, action) => {
            const {collectionId} = action.payload
            const {uuid = ''} = state?.collection || {}
            state.sweepNftSection.hasMorePages = true
            state.sweepNftSection.nftList = []
            state.sweepNftSection.currentPage = 1
            if(!!collectionId && !!uuid && collectionId !== uuid ){
                state.collection = undefined
            }
            state.collectionId = collectionId
        },
        setCollectionSweep: (state, action) => {
            const payload = !!action && !!action.payload ? action.payload : undefined
            if (!!payload) {
                const {meta = {}, nfts = []} = payload || {}
                const {hasMorePages = false, currentPage = 1} = meta
                if (currentPage === 1) {
                    state.sweepNftSection.nftList = nfts
                } else {
                    if (currentPage >  state.sweepNftSection.currentPage) {
                        state.sweepNftSection.nftList = [...state.sweepNftSection.nftList, ...nfts]
                    }
                }
                state.sweepNftSection.currentPage = currentPage
                state.sweepNftSection.meta = meta
                state.sweepNftSection.hasMorePages = hasMorePages
            }
        },
        setCollectionDetailFirst: (state, action) => {
            const {collectionId} = action.payload
            const {uuid = ''} = state?.collection || {}
            state.hasMorePages = true
            state.nft = []
            state.statePage = 1
            if(!!collectionId && !!uuid && collectionId !== uuid ){
                state.collection = undefined
            }
            state.collectionId = collectionId
        },
        setCollectionDetail: (state, action) => {
            const payload = !!action && !!action.payload ? action.payload : undefined
            if (!!payload) {
                const {collection, meta = {}, nft = []} = payload || {}
                const {uuid = ''} = collection || {}
                const {hasMorePages = false, currentPage = 1} = meta
                if (currentPage === 1) {
                    state.nft = nft
                    state.collection = {...state.collection , ...collection}
                } else {
                    if (currentPage > state.statePage) {
                        state.nft = [...state.nft, ...nft]
                    }
                }
                if (uuid !== state.collectionId) {
                    state.collection = collection
                }

                state.statePage = currentPage
                state.meta = meta
                state.hasMorePages = hasMorePages
            }
        },
        setExploreNFTsFirst: (state, action) => {
            state.exploreNftSection.nftList = []
            state.exploreNftSection.currentPage = 1
            state.exploreNftSection.hasMorePages = true
        },
        setExploreNFTs: (state, action) => {
            const payload = !!action && !!action.payload ? action.payload : undefined
            if (!!payload) {
                const {meta, all_images = []} = payload || {}
                const {hasMorePages = false, currentPage = 1} = meta || {}
                if (currentPage === 1) {
                    state.exploreNftSection.nftList = all_images
                } else {
                    if (currentPage > state.exploreNftSection.currentPage) {
                        state.exploreNftSection.nftList = [...state.exploreNftSection.nftList, ...all_images]
                    }
                }
                state.exploreNftSection.meta = meta
                state.exploreNftSection.currentPage = currentPage
                state.exploreNftSection.hasMorePages = hasMorePages
            }
        },
        setCollectionListFirst: (state, action) => {
            state.exploreCollectionSection.collectionList = []
            state.exploreCollectionSection.currentPage = 1
            state.exploreCollectionSection.hasMorePages = true
        },
        setCollectionList: (state, action) => {
            const payload = !!action && !!action.payload ? action.payload : undefined
            if (!!payload) {
                const {collections = [], meta} = payload || {}
                const {currentPage = 1, hasMorePages = false} = meta || {}
                if (currentPage === 1) {
                    state.exploreCollectionSection.collectionList = collections
                } else {
                    if (currentPage > state.exploreCollectionSection.currentPage) {
                        state.exploreCollectionSection.collectionList = [...state.exploreCollectionSection.collectionList, ...collections]
                    }
                }
                state.exploreCollectionSection.meta = meta
                state.exploreCollectionSection.currentPage = currentPage
                state.exploreCollectionSection.hasMorePages = hasMorePages
            }
        },
        setTokenListFirst: (state, action) => {
            state.searchTokenSection.collectionList = []
            state.searchTokenSection.currentPage = 1
            state.searchTokenSection.hasMorePages = true
        },
        setTokenList: (state, action) => {
            const payload = !!action && !!action.payload ? action.payload : undefined
            if (!!payload) {
                const {collections = [], meta} = payload || {}
                const {currentPage = 1, hasMorePages = false} = meta || {}
                if (currentPage === 1) {
                    state.searchTokenSection.collectionList = collections
                } else {
                    if (currentPage > state.searchTokenSection.currentPage) {
                        state.searchTokenSection.collectionList = [...state.searchTokenSection.collectionList, ...collections]
                    }
                }
                state.searchTokenSection.meta = meta
                state.searchTokenSection.currentPage = currentPage
                state.searchTokenSection.hasMorePages = hasMorePages
            }
        },
        setMyCollectionListFirst: (state, action) => {
            state.myCollectionSection.collectionList = []
            state.myCollectionSection.currentPage = 1
            state.myCollectionSection.hasMorePages = true
        },
        setMyCollectionList: (state, action) => {
            const payload = !!action && !!action.payload ? action.payload : undefined
            if (!!payload) {
                const {collections = [], meta} = payload || {}
                const {currentPage = 1, hasMorePages = false} = meta || {}
                if (currentPage === 1) {
                    state.myCollectionSection.collectionList = collections
                } else {
                    if (currentPage > state.myCollectionSection.currentPage) {
                        state.myCollectionSection.collectionList = [...state.myCollectionSection.collectionList, ...collections]
                    }
                }
                state.myCollectionSection.meta = meta
                state.myCollectionSection.currentPage = currentPage
                state.myCollectionSection.hasMorePages = hasMorePages
            }
        },

        setFavoriteCollectionListFirst: (state, action) => {
            state.favoriteCollectionSection.collectionList = []
            state.favoriteCollectionSection.currentPage = 1
            state.favoriteCollectionSection.hasMorePages = true
        },
        setFavoriteCollectionList: (state, action) => {
            const payload = !!action && !!action.payload ? action.payload : undefined
            if (!!payload) {
                const {collections = [], meta} = payload || {}
                const {currentPage = 1, hasMorePages = false} = meta || {}
                if (currentPage === 1) {
                    state.favoriteCollectionSection.collectionList = collections
                } else {
                    if (currentPage > state.favoriteCollectionSection.currentPage) {
                        state.favoriteCollectionSection.collectionList = [...state.favoriteCollectionSection.collectionList, ...collections]
                    }
                }
                state.favoriteCollectionSection.meta = meta
                state.favoriteCollectionSection.currentPage = currentPage
                state.favoriteCollectionSection.hasMorePages = hasMorePages
            }
        },
        setMigrateCollectionListFirst: (state, action) => {
            state.migratedCollectionSection.collectionList = []
            state.migratedCollectionSection.currentPage = 1
            state.migratedCollectionSection.hasMorePages = true
        },
        setMigrateCollectionList: (state, action) => {
            const payload = !!action && !!action.payload ? action.payload : undefined
            if (!!payload) {
                const {collections = [], meta} = payload || {}
                const {currentPage = 1, hasMorePages = false} = meta || {}
                if (currentPage === 1) {
                    state.migratedCollectionSection.collectionList = collections
                } else {
                    if (currentPage > state.migratedCollectionSection.currentPage) {
                        state.migratedCollectionSection.collectionList = [...state.migratedCollectionSection.collectionList, ...collections]
                    }
                }
                state.migratedCollectionSection.meta = meta
                state.migratedCollectionSection.currentPage = currentPage
                state.migratedCollectionSection.hasMorePages = hasMorePages
            }
        },
        setCollectionHistoryFirst: (state, action) => {
            const {collectionId} = action.payload
            state.historyFirstLoading = true
            state.historyHasMorePages = true
            state.collectionHistoryId = collectionId
            state.historyList = []
        },
        setCollectionHistory: (state, action) => {
            const payload = !!action && !!action.payload ? action.payload : undefined
            if (!!payload) {
                const {collections_history = [], meta} = payload || {}
                const {hasMorePages = false, currentPage = 1} = meta || {}
                state.historyList = currentPage === 1 ? collections_history : [...state.historyList, ...collections_history]
                state.historyMeta = meta
                state.historyHasMorePages = hasMorePages
                state.historyFirstLoading = currentPage === 1 ? false : state.historyFirstLoading
            }
        },

        setHomeNftData: (state, action) => {
            const payload = !!action && !!action.payload ? action.payload : undefined
            if (!!payload) {
                const {category, nftList} = payload || {}
                state.homeNftsSection.nft = nftList
                state.homeNftsSection.category = category
            }
        },
        setFavoriteCollection: (state, action) => {
            const payload = !!action && !!action.payload ? action.payload : undefined
            if (!!payload) {
                const {request, response} = payload || {}
                if (request.collection_uuid === state.collectionId) {
                    state.collection = {...state.collection, ...response.data}
                }
            }
        },
    },

})

export const {
    setCollectionDetail,
    setCollectionDetailFirst,
    setCollectionList,
    setExploreNFTs,
    setExploreNFTsFirst,
    setCollectionHistoryFirst,
    setCollectionHistory,
    setCollectionListFirst,
    setHomeNftData,
    setMyCollectionListFirst,
    setMyCollectionList,
    setFavoriteCollection,
    setFavoriteCollectionListFirst,
    setFavoriteCollectionList,
    setMigrateCollectionListFirst,
    setMigrateCollectionList,
    setCollectionSweepFirst,
    setCollectionSweep,
    setTokenListFirst,
    setTokenList
} = collectionSlice.actions

export default collectionSlice.reducer