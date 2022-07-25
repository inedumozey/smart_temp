import React from 'react'
import Withdrawals from '../../components/user/withdrawals/Withdrawals';

export default function withdrawals() {
  return <Withdrawals />
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