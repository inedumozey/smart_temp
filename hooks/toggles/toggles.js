import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

import { useState } from "react";
const useToggle=()=>{
    const [light, setLight] = useState(true);
    const [toggleState, setToggleState] = useState(true);

    const toggle =()=>{
        setLight(!light);

        if(localStorage.getItem('toggleState') == null){
            localStorage.setItem('toggleState', false);
        }else{
            if(localStorage.getItem('toggleState') == "true"){
                localStorage.setItem('toggleState', false)
            }else{
                localStorage.setItem('toggleState', true)
            }
        }

        setToggleState(false)
    }
  
    useIsomorphicLayoutEffect(()=>{
        if(localStorage.getItem('toggleState') !== null){
            setToggleState(localStorage.getItem('toggleState') == "true" ? true : false);
        } 
        
    }, [light]);

    return {
        toggle,
        toggleState
    }
}

export default useToggle;