import React from 'react'
import Transfer from '../../components/user/transfer/Transfer'

export default function transfer() {
  return <Transfer />
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