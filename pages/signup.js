import { Signup } from "../components/public/auth/Signup.jsx"

export default function signup({userInfo}) {

  return <Signup userInfo={userInfo}/>
}

// handle redirect if user sign up,
// get user info from cookie
export const getServerSideProps =(context)=>{
  const cookies = context.req.cookies;
  const accesstoken = cookies.accesstoken;
  const type = cookies.type;

  const handlePath=()=>{
    if(accesstoken && type === 'admin'){
      return '/admin'
    }
    else if(accesstoken && type !== 'admin'){
      return '/dashboard'
    }else{
      
    }
  }
  const path = handlePath();

  if(accesstoken){
    return {
      redirect: {
        destination: path,
        permanent: false
      }
    }
  }else{
    return {
      props: {}
    }
  }
}