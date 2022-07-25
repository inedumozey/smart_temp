
const check = {
    redirectToDashboard: (router, user_info)=>{
        user_info.refreshtoken && user_info.type==='admin' ? router.push('/admin') : router.push('/dashboard');
    },
}

export default check