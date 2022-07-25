import styled from 'styled-components'


const UserWrapper = styled.div`
    
    
`

const ProfileContainer = styled.div`
        width: 100%;
        height: 100vh;
        margin: 0px;
        /* background: #00415d30; */
        color: #00415d;
        /* border: 2px solid transparent; */
        
        .central-column{
            width: 100%;
            height: 150px;
            background: whitesmoke;
            margin: 0px auto;
            border-radius: 4px;
            .user-bio{
                height: 100%;
                display: flex;
                align-items: stretch;
                justify-content: space-between;
                .user-avatar{
                    width: 100px;
                    height: 100px;
                    border-radius: 100%;
                    border: 2px solid gray;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: var(--major-color-purest);
                    color: white;
                    font-size: 3rem;
                    font-weight: 400;
                    border: 2px solid var(--bright-color);
                    /* position: fixed;
                    top: 150px;
                    left: 150px; */
                }
                .user-info{
                    display: flex;
                    width: 80%;
                    margin: 100px auto;
                    font-size: 1.3rem;
                    justify-content: space-between;
                    align-items: center;
                    height: 20% ;
                    /* border: 2px solid blue; */
                    span{
                        display: flex;
                        justify-content: center;
                        align-items: center ;
                        /* border: 2px solid red; */
                       h3 {
                        margin-top: 60px;
                       }
                        b{
                            margin-left: 50px;
                            display: flex;
                            align-items: center ;
                            flex-wrap: wrap ;
                        }
                        
                    }
                    /* padding: 50px 70px; */
                    p{
                        font-size: 1rem;
                        b{
                            font-size: 1.3rem;
                        }
                    }
                   
                }
            }
        }
        .central-column-second{
                width: 80%;
                height: fit-content;
                display: flex;
                align-items: center;
                margin: 80px auto;
                border-radius: 4px;
                
                .container{
                    width: 74%;
                    margin: 5px auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    h3 {
                        padding: 15px 0;
                        font-weight: 600;
                        font-size: 1.3rem;
                       
                    } 
                    span p{
                        margin: 13px 0;
                        b{
                            font-size: 1.1rem;
                            font-weight: 400;
                        }
                    }
                   
                  
        }
   
    }   
`

export {
    UserWrapper,
    ProfileContainer
}