import {toastMsg} from "../../components/toast";
import {
    logOutAction,
    setCredentialsAction,
    setMainLoading,
    setProfileSetup, setShowConnectionModal
} from "../auth-slice";


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