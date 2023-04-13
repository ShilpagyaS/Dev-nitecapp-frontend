import useNavDetails from "@/Hooks/useNavDetails";
import { getLogo, logout, setUserRelogin } from "@/store/slices/Auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onlyUnAuthpages } from "./guestRoutes";
import { errortoast } from "../tostify";

export default function AdminAuthWrapper({ children }) {
    const { user, firstTimeLogin } = useSelector((state) => state.auth);
    const { path } = useNavDetails()
    const router = useRouter();
    console.log(router);

    const dispatch = useDispatch();
    const isguestroute = onlyUnAuthpages.includes(path)
    useEffect(() => {
        dispatch(getLogo())

    }, [])
    useEffect(() => {
        if (Boolean(user) && user.role == 6) {
            dispatch(logout())
            router.push("/signin")
            errortoast({ message: "You Are Not Allow To login" })
        } else if (!Boolean(user) && !isguestroute) {
            const token = localStorage.getItem("nightcpp-token");
            if (token) {
                dispatch(setUserRelogin());
            } else router.push("/signin")
        }
        else if (isguestroute && Boolean(user)) {

            if (firstTimeLogin)
                router.push("/signin")
            else router.push("/specs");
        }
        else if (Boolean(user) && firstTimeLogin) {
            router.push("/signin")
        }


    }, [user]);

    if (isguestroute || Boolean(user))
        return <>{children}</>
    else return <></>
}
