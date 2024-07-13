import {toastMsg} from "../../components/toast";
import {setUserList} from "../user-slice";
import {setFavouriteNFTList, setMigrateNFTList, setNFTList} from "../nft-slice";
import {
    logOutAction, setCategoriesAction,
    setCredentialsAction,
    setCurrencyList,
    setMainLoading,
    setMaxPrice,
    setNetworksAction,
    setProfileSetup, setShowConnectionModal
} from "../auth-slice";
import {
    setCollectionList,
    setCollectionListFirst,
    setFavoriteCollectionList,
    setFavoriteCollectionListFirst,
    setMigrateCollectionList,
    setMigrateCollectionListFirst,
    setMyCollectionList,
    setMyCollectionListFirst, setTokenList, setTokenListFirst
} from "../collection-slice";

import {IAccessInfo} from "../../interface";

export const errorHandler = (code, dispatch) => {
    if (code === 30002 || code === 30000 || code === 30003) {
        toastMsg('Session Expired.', true)
        dispatch(logOutAction())
        window.location.reload();
    }
}


export const onQueryStarted = async (id, {dispatch, queryFulfilled}) => {
    try {
        const {data: result} = await queryFulfilled
        const {data = {}} = result || {}
        const {acceptedTerms = null, user = null} = data as IAccessInfo
        dispatch(setMainLoading(false))
        dispatch(setProfileSetup({acceptedTerms}))
        dispatch(setCredentialsAction({user}))
        dispatch(setShowConnectionModal(false))
    } catch (err) {
        console.log({err})
        errorHandler(err.error?.data?.code, dispatch)
    }
}

export const onQueryStartedConfig = async (id, {dispatch, queryFulfilled}) => {
    try {
        const {data: result} = await queryFulfilled
        const {data = {}} = result || {}
        const {maxPrice = 0} = data || {}
        dispatch(setMaxPrice(maxPrice))
    } catch (err) {
        console.log({err})
        errorHandler(err.error?.data?.code, dispatch)
    }
}

export const onNetworkQueryFullFilled = async (id, {dispatch, queryFulfilled}) => {
    try {
        const {data: result} = await queryFulfilled
        const {data = {}} = result || {}
        const {networks = [], category = [], currency = []} = data
        dispatch(setNetworksAction(networks))
        dispatch(setCategoriesAction(category))
        dispatch(setCurrencyList(currency))
    } catch (err) {
        console.log({err})
    }
}

export const onCollectionQueryFullFilled = async (payload, {dispatch, queryFulfilled}) => {
    try {
        const {page = 1} = payload
        if (page === 1) {
            dispatch(setCollectionListFirst([]))
        }
        const {data: result} = await queryFulfilled
        const {data} = result || {}
        dispatch(setCollectionList(data))
    } catch (err) {
        console.log({err})
    }
}
export const onTokenQueryFullFilled = async (payload, {dispatch, queryFulfilled}) => {
    try {
        const {page = 1} = payload
        if (page === 1) {
            dispatch(setTokenListFirst([]))
        }
        const {data: result} = await queryFulfilled
        const {data} = result || {}
        dispatch(setTokenList(data))
    } catch (err) {
        console.log(err)
    }
}

export const onMyCollectionQueryFullFilled = async (payload, {dispatch, queryFulfilled}) => {
    try {
        const {page = 1} = payload
        if (page === 1) {
            dispatch(setMyCollectionListFirst([]))
        }
        const {data: result} = await queryFulfilled
        const {data} = result || {}
        dispatch(setMyCollectionList(data))
    } catch (err) {
        console.log(err)
    }
}
export const onFavoriteCollectionQueryFullFilled = async (payload, {dispatch, queryFulfilled}) => {
    try {
        const {page = 1} = payload
        if (page === 1) {
            dispatch(setFavoriteCollectionListFirst([]))
        }
        const {data: result} = await queryFulfilled
        const {data} = result || {}
        dispatch(setFavoriteCollectionList(data))
    } catch (err) {
        console.log(err)
    }
}

export const onMigrationCollectionQueryFullFilled = async (payload, {dispatch, queryFulfilled}) => {
    try {
        const {page = 1} = payload
        if (page === 1) {
            dispatch(setMigrateCollectionListFirst([]))
        }
        const {data: result} = await queryFulfilled
        const {data} = result || {}
        dispatch(setMigrateCollectionList(data))
    } catch (err) {
        console.log(err)
    }
}

export const onUserQueryFullFilled = async (payload, {dispatch, queryFulfilled}) => {
    try {
        const {page = 1} = payload
        if (page === 1) {
            dispatch(setUserList([]))
        }
        const {data: result} = await queryFulfilled
        const {data} = result || {}
        const {users = [], meta} = data || {}
        const {currentPage = 1} = meta || {}
        dispatch(setUserList({users, page: currentPage}))
    } catch (err) {
        console.log(err)
    }
}

export const onNFTQueryFullFilled = async (payload, {dispatch, queryFulfilled}) => {
    try {
        const {page = 1} = payload
        if (page === 1) {
            dispatch(setNFTList([]))
        }
        const {data: result} = await queryFulfilled
        const {data} = result || {}
        const {nft = [], meta} = data || {}
        const {currentPage = 1} = meta || {}
        dispatch(setNFTList({nft, page: currentPage}))
    } catch (err) {
        console.log(err)
    }
}

export const onFavouriteNFTQueryFullFilled = async (payload, {dispatch, queryFulfilled}) => {
    try {
        const {page = 1} = payload
        if (page === 1) {
            dispatch(setFavouriteNFTList([]))
        }
        const {data: result} = await queryFulfilled
        const {data} = result || {}
        const {nft = [], meta} = data || {}
        const {currentPage = 1} = meta || {}
        dispatch(setFavouriteNFTList({nft, page: currentPage}))
    } catch (err) {
        console.log(err)
    }
}

export const onMigrateNFTQueryFullFilled = async (payload, {dispatch, queryFulfilled}) => {
    try {
        const {page = 1} = payload
        if (page === 1) {
            dispatch(setMigrateNFTList([]))
        }
        const {data: result} = await queryFulfilled
        const {data} = result || {}
        const {nft = [], meta} = data || {}
        const {currentPage = 1} = meta || {}
        dispatch(setMigrateNFTList({nft, page: currentPage}))
    } catch (err) {
        console.log(err)
    }
}