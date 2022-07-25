import axios from 'axios';
import Cookies from 'js-cookie';


const resolveApi = {
    generateAccesstoken: async()=>{
        try{
            if(Cookies.get('refreshtoken')){

                const res = await axios.get(`/auth/generate-accesstoken`, {
                    headers: {
                        "Authorization": `Bearer ${Cookies.get('refreshtoken')}`
                    }
                })

                return;
            }
            else{
                return
            }
        }
        catch(err){
            return
        }
    },

    authorize: async()=>{
        try{
            if(Cookies.get('accesstoken')){

                const res = await axios.get(`/auth/authorize`, {
                    headers: {
                        "Authorization": `Bearer ${Cookies.get('accesstoken')}`
                    }
                })
                return;
            }
            else{
                return 
            }
        }
        catch(err){
            return
        }
    }
}

export {resolveApi}