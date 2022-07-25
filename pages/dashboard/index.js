import Index from "../../components/user/home/Index";

export default function index({userInfo}) {
  return <Index userInfo={userInfo}/>
}


// handle redirect if user sign up
export function getServerSideProps(context){
  const cookies = context.req.cookies;
  const refreshtoken = cookies.refreshtoken;

  if(!refreshtoken){
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
      props: {}
    }
  }else{
    return {
      props: {}
    }
  }
}