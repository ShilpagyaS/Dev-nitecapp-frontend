import { store } from "@/store/store"
import { Provider } from "react-redux"
import UserAuthWrapper from "./UserAuthWapper"

export default function AuthWrapper({ children }) {
  if (process.env.NEXT_PUBLIC_APP_TYPE === "user") {
    return  <Provider store={store}>
    <UserAuthWrapper>
      {children}
    </UserAuthWrapper>
    </Provider> 
  }

  if (process.env.NEXT_PUBLIC_APP_TYPE === "admin") {
    return <Provider store={store}>
      {children}
    </Provider>
  }

  if (process.env.NEXT_PUBLIC_APP_TYPE === "superAdmin") {
    return <Provider store={store}>
      {children}
    </Provider>
  }

}