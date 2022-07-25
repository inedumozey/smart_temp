import React from 'react'
import Referrals from '../../components/user/referrals/Referrals'

export default function referrals() {
  return <Referrals />
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