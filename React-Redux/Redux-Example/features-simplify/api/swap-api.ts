import {apiSwapSlice} from './index'

export const Swap_Url = {
    fetchNetwork: `fetch_all_network/`,
    pendingDetails: `pending_details/`,
    swap: `swap/`,
}

export const configApi = apiSwapSlice.injectEndpoints({
    endpoints: (builder) => ({
        fetchNetwork: builder.query({
            query: (data) => ({
                url: Swap_Url.fetchNetwork,
                method: 'POST',
                body: data
            })
        }),
        pendingDetails: builder.query({
            query: (data) => ({
                url: Swap_Url.pendingDetails,
                method: 'POST',
                body: data
            })
        }),
        swap: builder.mutation({
            query: (data) => ({
                url: Swap_Url.swap,
                method: 'POST',
                body: data
            })
        }),

    }),
})

export const {
    useFetchNetworkQuery,
    useSwapMutation,
    usePendingDetailsQuery
} = configApi