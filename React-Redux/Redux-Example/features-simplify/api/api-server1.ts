import {apiSlice1, apiSlice3, apiSlice2} from './index'
import {
    onFavoriteCollectionQueryFullFilled,
    onFavouriteNFTQueryFullFilled,
    onQueryStarted,
} from "./api-helper";

import {ICollectionResponse, IUserUpdate, IWalletAPI} from "../../interface";
import {setFavoriteCollection} from "../collection-slice";
import {setTokenAction} from "../auth-slice";

export const Server1_Url = {
    wallet: `user/wallet/`,
    profileUpdate: `user/profileUpdate/`,
    createCollection: `/user/createCollection/`,
    updateLinks: `/user/updateLinks/`,
    verifySignature: `/user/verifySignature/`,
    mint: `/user/mint/`,
    updateNFT: `/user/updateItem/`,
    mintItem: `/user/mintItem/`,
    buyNFT: `/user/buyItem/`,
    sweepBuyItem: `/user/sweepBuyItem/`,
    transferNFT: `/user/transferItem/`,
    sweepTransferItem: `/user/sweepTransferItem/`,
    mintOnBid: `/user/mintOnBid/`,
    bidItem: `/user/bidItem/`,
    removeBid: `/user/removeBid/`,
    bulkMint: `/user/bulkMint/`,
    editNFT: `/user/editNFT/`,
    updateNotification: `/user/updateNotification/`,
    promotionBooking: `/user/promotionBooking/`,
    promotionPlan: `/user/promotionPlan/`,
    bookedSlots: `/user/bookedSlots/`,
    promotionConfirm: `/user/promotionConfirm/`,
    promotionCancel: `/user/promotionCancel/`,
    lockBid: `/user/lockBid/`,
    unlockBid: `/user/unlockBid/`,
    cashBackDetails: `/user/cashBackDetails/`,
    cashbackPendingDetails: `/user/cashbackPendingDetails/`,
    claimCashBack: `/user/claimCashBack/`,
    updateNFTListed: `/user/updateNFTListed/`,
    verifyBulkmintingfees: `/user/verifyBulkmintingfees/`,
    convertUsdToStrmFees: `/user/convertUsdToStrmFees/`,
    favouriteNFT: `/user/favouriteNFT/`,
    getFavoriteCollections: `/user/getFavouriteCollections/`,
    getFavouriteNFTs: `/user/getFavouriteNFTs/`,
    favouriteCollection: `/user/favouriteCollection/`,
    reportCollection: `/user/reportCollection/`,
    reportNFT: `/user/reportNFT/`,
    generateOTP: `/user/generateOTP/`,
    verifyOTP: "/user/verifyOTP/",
    migrationRequest: "/user/migrationRequest/",
    submitMigrationRequest: "/user/submitMigrationRequest/",
    updateViews: "/user/updateViews/",
    nftOwnerCheck: "/user/nftOwnerCheck/",
    generateByteCode: `/user/generateByteCode/`,
    updateErc20Token: `/user/updateErc20Token/`,
    addToCart: `/user/addToCart/`,
    removeFromCart: `/user/removeFromCart/`,
    updateTokenImage: `/user/tokenImageChange/`,
};

export const server1Api = apiSlice1.injectEndpoints({
    endpoints: (builder) => ({
        updateOnboardInfo: builder.mutation<IUserUpdate, any>({
            query: (data) => ({
                url: Server1_Url.profileUpdate,
                method: "POST",
                body: data,
            }),
            async onQueryStarted(id, {dispatch, queryFulfilled}) {
                await onQueryStarted(id, {dispatch, queryFulfilled});
            },
        }),
        createCollection: builder.mutation({
            query: (data) => ({
                url: Server1_Url.createCollection,
                method: "POST",
                body: data,
            }),
            async onQueryStarted(_, {dispatch, queryFulfilled}) {
                try {
                    await queryFulfilled;
                    dispatch(apiSlice3.util.invalidateTags(["collections"]));
                    dispatch(apiSlice2.util.invalidateTags(["collections"]));
                } catch (e) {
                }
            },
        }),
        nftOwnerCheck: builder.mutation({
            query: (data) => ({
                url: Server1_Url.nftOwnerCheck,
                method: "POST",
                body: data,
            }),
        }),
        updateLinks: builder.mutation({
            query: (data) => ({
                url: Server1_Url.updateLinks,
                method: "POST",
                body: data,
            }),
        }),
        migrationRequest: builder.mutation({
            query: (data) => ({
                url: Server1_Url.migrationRequest,
                method: "POST",
                body: data,
            }),
        }),
        submitMigrationRequest: builder.mutation({
            query: (data) => ({
                url: Server1_Url.submitMigrationRequest,
                method: "POST",
                body: data,
            }),
        }),
        verifySignature: builder.mutation<any, any>({
            query: (data) => ({
                url: Server1_Url.verifySignature,
                method: "POST",
                body: data,
            }),
        }),
        verifySignatureUpdateHistory: builder.mutation<any, any>({
            query: (data) => ({
                url: Server1_Url.verifySignature,
                method: "POST",
                body: data,
            }),
            async onQueryStarted(_, {dispatch, queryFulfilled}) {
                try {
                    await queryFulfilled;
                    dispatch(apiSlice3.util.invalidateTags(["transactionHistory"]));
                } catch (e) {
                }
            },
        }),
        mintNFT: builder.mutation({
            query: (data) => ({
                url: Server1_Url.mint,
                method: "POST",
                body: data,
            }),
            async onQueryStarted(_, {dispatch, queryFulfilled}) {
                try {
                    await queryFulfilled;
                    dispatch(apiSlice3.util.invalidateTags(["transactionHistory"]));
                } catch (e) {
                }
            },
        }),
        updateNFT: builder.mutation({
            query: (data) => ({
                url: Server1_Url.updateNFT,
                method: "POST",
                body: data,
            }),
            async onQueryStarted(_, {dispatch, queryFulfilled}) {
                try {
                    await queryFulfilled;
                    dispatch(apiSlice3.util.invalidateTags(["transactionHistory"]));
                } catch (e) {
                }
            },
        }),
        mintItem: builder.mutation({
            query: (data) => ({
                url: Server1_Url.mintItem,
                method: "POST",
                body: data,
            }),
        }),
        buyNFT: builder.mutation<
            any,
            {
                trxId: string;
                uuid: string;
                network: number | string;
                default: boolean;
                onBid: boolean;
                bidId?: string;
            }
        >({
            query: (data) => ({
                url: Server1_Url.buyNFT,
                method: "POST",
                body: data,
            }),
        }),
        sweepBuyItem: builder.mutation({
            query: (data) => ({
                url: Server1_Url.sweepBuyItem,
                method: "POST",
                body: data,
            }),
        }),
        transferNFT: builder.mutation<
            any,
            {
                uuid: string;
                onBid: boolean;
                bidId?: string;
            }
        >({
            query: (data) => ({
                url: Server1_Url.transferNFT,
                method: "POST",
                body: data,
            }),
            async onQueryStarted(_, {dispatch, queryFulfilled}) {
                try {
                    await queryFulfilled;
                    dispatch(apiSlice3.util.invalidateTags(["transactionHistory"]));
                    dispatch(apiSlice3.util.invalidateTags(["offers"]));
                } catch (e) {
                }
            },
        }),
        sweepTransferItem: builder.mutation({
            query: (data) => ({
                url: Server1_Url.sweepTransferItem,
                method: "POST",
                body: data,
            }),
        }),
        mintOnBid: builder.mutation({
            query: (data) => ({
                url: Server1_Url.mintOnBid,
                method: "POST",
                body: data,
            }),
            async onQueryStarted(_, {dispatch, queryFulfilled}) {
                try {
                    await queryFulfilled;
                    dispatch(apiSlice3.util.invalidateTags(["transactionHistory"]));
                } catch (e) {
                }
            },
        }),
        bidItem: builder.mutation({
            query: (data) => ({
                url: Server1_Url.bidItem,
                method: "POST",
                body: data,
            }),
            async onQueryStarted(_, {dispatch, queryFulfilled}) {
                try {
                    await queryFulfilled;
                    dispatch(apiSlice3.util.invalidateTags(["offers"]));
                } catch (e) {
                }
            },
        }),
        removeBid: builder.mutation<
            any,
            {
                uuid: string;
            }
        >({
            query: (data) => ({
                url: Server1_Url.removeBid,
                method: "POST",
                body: data,
            }),
            async onQueryStarted(_, {dispatch, queryFulfilled}) {
                try {
                    await queryFulfilled;
                    dispatch(apiSlice3.util.invalidateTags(["offers"]));
                } catch (e) {
                }
            },
        }),
        bulkMint: builder.mutation({
            query: (data) => ({
                url: Server1_Url.bulkMint,
                method: "POST",
                body: data,
            }),
        }),
        editNFT: builder.mutation({
            query: (data) => ({
                url: Server1_Url.editNFT,
                method: "POST",
                body: data,
            }),
        }),
        updateNotification: builder.mutation({
            query: (data) => ({
                url: Server1_Url.updateNotification,
                method: "POST",
                body: data,
            }),
            async onQueryStarted(_, {dispatch, queryFulfilled}) {
                try {
                    await queryFulfilled;
                    dispatch(apiSlice3.util.invalidateTags(["Notifications"]));
                } catch (e) {
                }
            },
        }),
        promotionBooking: builder.mutation({
            query: (data) => ({
                url: Server1_Url.promotionBooking,
                method: "POST",
                body: data,
            }),
        }),
        promotionPlan: builder.mutation({
            query: (data) => ({
                url: Server1_Url.promotionPlan,
                method: "POST",
                body: data,
            }),
        }),
        bookedSlots: builder.query({
            query: (data) => ({
                url: Server1_Url.bookedSlots,
                method: "POST",
                body: data,
            }),
        }),
        promotionConfirm: builder.mutation({
            query: (data) => ({
                url: Server1_Url.promotionConfirm,
                method: "POST",
                body: data,
            }),
        }),
        promotionCancel: builder.mutation({
            query: (data) => ({
                url: Server1_Url.promotionCancel,
                method: "POST",
                body: data,
            }),
        }),
        lockBid: builder.mutation({
            query: (data) => ({
                url: Server1_Url.lockBid,
                method: "POST",
                body: data,
            }),
        }),
        unlockBid: builder.mutation({
            query: (data) => ({
                url: Server1_Url.unlockBid,
                method: "POST",
                body: data,
            }),
        }),
        cashBackDetails: builder.query({
            query: () => ({
                url: Server1_Url.cashBackDetails,
                method: "POST",
            }),
            providesTags: ["Cashback"],
        }),
        cashbackPendingDetails: builder.query({
            query: () => ({
                url: Server1_Url.cashbackPendingDetails,
                method: "POST",
            }),
            providesTags: ["Cashback"],
        }),
        claimCashBack: builder.mutation({
            query: () => ({
                url: Server1_Url.claimCashBack,
                method: "POST",
            }),
            invalidatesTags: ["Cashback"],
        }),
        updateNFTListed: builder.mutation({
            query: (data) => ({
                url: Server1_Url.updateNFTListed,
                method: "POST",
                body: data,
            }),
        }),
        verifyBulkmintingfees: builder.mutation({
            query: (data) => ({
                url: Server1_Url.verifyBulkmintingfees,
                method: "POST",
                body: data,
            }),
        }),
        favouriteCollection: builder.mutation({
            query: (data) => ({
                url: Server1_Url.favouriteCollection,
                method: "POST",
                body: data,
            }),
            async onQueryStarted(payload, {dispatch, queryFulfilled}) {
                try {
                    const {data: response} = await queryFulfilled;
                    dispatch(setFavoriteCollection({request: payload, response}));
                } catch (e) {
                    console.log(e);
                }
            },
        }),
        getFavoriteCollections: builder.query<ICollectionResponse, any>({
            query: (data) => ({
                url: Server1_Url.getFavoriteCollections,
                method: "POST",
                body: data,
            }),
            async onQueryStarted(payload, {dispatch, queryFulfilled}) {
                await onFavoriteCollectionQueryFullFilled(payload, {
                    dispatch,
                    queryFulfilled,
                });
            },
        }),
        favouriteNFT: builder.mutation({
            query: (data) => ({
                url: Server1_Url.favouriteNFT,
                method: "POST",
                body: data,
            }),
            async onQueryStarted(_, {dispatch, queryFulfilled}) {
                try {
                    await queryFulfilled;
                    dispatch(apiSlice3.util.invalidateTags(["NFT_Detail"]));
                } catch (e) {
                }
            },
        }),
        getFavouriteNFTs: builder.query({
            query: (data) => ({
                url: Server1_Url.getFavouriteNFTs,
                method: "POST",
                body: data,
            }),
            async onQueryStarted(payload, {dispatch, queryFulfilled}) {
                await onFavouriteNFTQueryFullFilled(payload, {
                    dispatch,
                    queryFulfilled,
                });
            },
        }),
        reportCollection: builder.mutation({
            query: (data) => ({
                url: Server1_Url.reportCollection,
                method: "POST",
                body: data,
            }),
        }),
        reportNFT: builder.mutation({
            query: (data) => ({
                url: Server1_Url.reportNFT,
                method: "POST",
                body: data,
            }),
        }),
        getToken: builder.mutation<any, IWalletAPI>({
            query: (data) => ({
                url: Server1_Url.wallet,
                method: "POST",
                body: data,
            }),
            async onQueryStarted(id, {dispatch, queryFulfilled}) {
                try {
                    const {data: result} = await queryFulfilled;
                    const {data = {}} = result || {};
                    const {access_token = null} = data || {};
                    dispatch(setTokenAction({access_token}));
                } catch (err) {
                    console.log(err);
                }
            },
        }),
        generateOTP: builder.mutation({
            query: (data) => ({
                url: Server1_Url.generateOTP,
                method: "POST",
                body: data,
            }),
        }),
        updateTokenImage: builder.mutation({
            query: (data) => ({
                url: Server1_Url.updateTokenImage,
                method: "POST",
                body: data,
            }),
        }),
        convertUsdToStrmFees: builder.query({
            query: (data) => ({
                url: Server1_Url.convertUsdToStrmFees,
                method: "POST",
                body: data,
            }),
        }),
        verifyOTP: builder.mutation({
            query: (data) => ({
                url: Server1_Url.verifyOTP,
                method: "POST",
                body: data,
            }),
        }),
        updateViews: builder.query({
            query: (data) => ({
                url: Server1_Url.updateViews,
                method: "POST",
                body: data,
            }),
        }),
        generateByteCode: builder.mutation({
            query: (data) => ({
                url: Server1_Url.generateByteCode,
                method: "POST",
                body: data,
            }),
        }),
        updateErc20Token: builder.mutation({
            query: (data) => ({
                url: Server1_Url.updateErc20Token,
                method: "POST",
                body: data,
            }),
        }),
        addToCart: builder.mutation({
            query: (data) => ({
                url: Server1_Url.addToCart,
                method: "POST",
                body: data,
            }),
        }),
        removeFromCart: builder.mutation({
            query: (data) => ({
                url: Server1_Url.removeFromCart,
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const {
    useUpdateOnboardInfoMutation,
    useCreateCollectionMutation,
    useUpdateLinksMutation,
    useVerifySignatureMutation,
    useVerifySignatureUpdateHistoryMutation,
    useMintNFTMutation,
    useUpdateNFTMutation,
    useMintItemMutation,
    useBuyNFTMutation,
    useTransferNFTMutation,
    useMintOnBidMutation,
    useBidItemMutation,
    useRemoveBidMutation,
    useBulkMintMutation,
    useEditNFTMutation,
    useUpdateNotificationMutation,
    usePromotionBookingMutation,
    usePromotionPlanMutation,
    useBookedSlotsQuery,
    usePromotionConfirmMutation,
    usePromotionCancelMutation,
    useLockBidMutation,
    useUnlockBidMutation,
    useCashBackDetailsQuery,
    useCashbackPendingDetailsQuery,
    useClaimCashBackMutation,
    useUpdateNFTListedMutation,
    useVerifyBulkmintingfeesMutation,
    useReportCollectionMutation,
    useReportNFTMutation,
    useFavouriteCollectionMutation,
    useFavouriteNFTMutation,
    useGetFavoriteCollectionsQuery,
    useGetFavouriteNFTsQuery,
    useGetTokenMutation,
    useGenerateOTPMutation,
    useVerifyOTPMutation,
    useMigrationRequestMutation,
    useSubmitMigrationRequestMutation,
    useConvertUsdToStrmFeesQuery,
    useUpdateViewsQuery,
    useNftOwnerCheckMutation,
    useGenerateByteCodeMutation,
    useUpdateErc20TokenMutation,
    useAddToCartMutation,
    useRemoveFromCartMutation,
    useSweepBuyItemMutation,
    useSweepTransferItemMutation,
    useUpdateTokenImageMutation
} = server1Api;

