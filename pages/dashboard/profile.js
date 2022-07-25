import React from 'react'
import Profile from '../../components/user/profile/Profile'

const profile = () => {
  return <Profile />
  
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

export default profile