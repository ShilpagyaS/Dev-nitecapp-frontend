import UserAuthWrapper from "./UserAuthWapper"

export default function AuthWrapper({ children }) {
  if (process.env.NEXT_PUBLIC_APP_TYPE === "user") {
    return <UserAuthWrapper>
      {children}
    </UserAuthWrapper>
  }

  if (process.env.NEXT_PUBLIC_APP_TYPE === "admin") {
    return <>
      {children}
    </>
  }

  if (process.env.NEXT_PUBLIC_APP_TYPE === "superAdmin") {
    return <>
      {children}
    </>
  }

}