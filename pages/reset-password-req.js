import { ResetPasswordRequest } from "../components/public/auth/ResetPasswordRequest"


export default function resetPasswordReq({userInfo}) {
  return <ResetPasswordRequest userInfo={userInfo}/>
}