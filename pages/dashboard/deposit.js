import React from 'react'
import Deposit from '../../components/user/deposit/Deposit'

export default function deposit() {
  return <Deposit />
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