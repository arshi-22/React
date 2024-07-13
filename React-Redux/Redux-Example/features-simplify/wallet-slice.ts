import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import {IWalletInitialState} from "../interface";

const signedAddress = localStorage.getItem('signedAddress')

const initialSate: IWalletInitialState = {
    metaMaskWallet: {
        type: 'metaMask',
        selectedAccount: null,
        signedAccount: signedAddress !== 'null' ? signedAddress : null
    },
    amountLimit: 0,
    showCommunicatingBlocked: false,
    networkChanged: false

}

export const walletSlice = createSlice({
    name: 'walletSlice',
    initialState: initialSate,
    reducers: {
        addSelectedAccount: (state, action: PayloadAction<string>) => {
            state.metaMaskWallet.selectedAccount = action.payload
        }, addSignedSelectedAccount: (state, action: PayloadAction<string>) => {
            localStorage.setItem('signedAddress', action.payload)
            state.metaMaskWallet.signedAccount = action.payload
        },
        toggleShowCommunicatingBlocked: (state, action: PayloadAction<boolean>) => {
            state.showCommunicatingBlocked = action.payload
        },
        toggleNetworkChanged: (state, action: PayloadAction<boolean>) => {
            state.networkChanged = action.payload
        },
        amountLimitAction: (state, action: PayloadAction<number | string>) => {
            state.amountLimit = action.payload
        }
    },
})

export const {
    addSelectedAccount,
    toggleShowCommunicatingBlocked,
    addSignedSelectedAccount,
    toggleNetworkChanged,
    amountLimitAction
} = walletSlice.actions

export default walletSlice.reducer