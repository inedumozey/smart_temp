import { Signin } from "../components/public/auth/Signin.jsx"

export default function signin({userInfo}) {  

  return <Signin userInfo={userInfo}/>
}

// handle redirect if user sign up,
export const getServerSideProps =(context)=>{
  const cookies = context.req.cookies;
  const refreshtoken = cookies.refreshtoken;
  const type = cookies.type;

  const handlePath=()=>{
    if(refreshtoken && type === 'admin'){
      return '/admin'
    }
    else if(refreshtoken && type !== 'admin'){
      return '/dashboard'
    }else{
      
    }
  }
  const path = handlePath();

  if(refreshtoken){
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