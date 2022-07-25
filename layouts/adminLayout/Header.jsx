import Image from 'next/image';
import Link from 'next/link'
import NavAuthBtn from '../../components/navAuthBtn/NavAuthBtn';
import {useState} from 'react'
import styled from 'styled-components'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const logo = '/onboadinglogo.png';


export default function Header_({userInfo, showMenuLargeScreen, setShowMenuLargeScreen, setShowMenuSmallScreen, showMenuSmallScreen}) {
    const [showMenu, setShowMenu] = useState(false);
    

    return (
        <Header>
            {/* top nave bar */}
            <div className="top-nav-bar">
                <div className="toggle-btn">
                    <div onClick={()=>setShowMenuLargeScreen(!showMenuLargeScreen)} className="toggle toggle-large-screen">
                        {
                            showMenuLargeScreen ? <NavigateNextIcon /> : < NavigateBeforeIcon/>
                        }
                    </div>

                    <div onClick={()=>setShowMenuSmallScreen(!showMenuSmallScreen)} className="toggle toggle-small-screen">
                        {
                            showMenuSmallScreen ? <NavigateBeforeIcon /> : <NavigateNextIcon />
                        }
                    </div>

                </div>
                {/* logo */}
                <div className="col1 logo">
                    <Link  href='/' passHref>
                        <a><Image width='100' height='65' alt='logo' src={logo}/></a>
                    </Link>
                </div>

                {/* nav link btn */}
                <div className='col3'>
                    <NavAuthBtn setShowMenu={setShowMenu} userInfo={userInfo}/>
                </div>
            </div>        
        </Header>
    )
}


const Header = styled.div`
    width: 100%;
    height: 60px;
    background: var(--major-color-purest);
    position: fixed;
    color: #fff;
    z-index: 1000;
    padding: 0px 30px;
    color: #fff;
    user-select: none;
    --webkit-user-select: none;

    .logo {
        width: 100px;
        height: 100%;
        margin-left: 20px;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (min-width: 980px){
            margin-left: 10px;
        }
    }

    .top-nav-bar{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

            small {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: #12ed1b;
                position: absolute;
                top: -0;
                right: 0;
            }
        }

        .navLink {
            display: flex;

            .navLinkWrapper{
                margin: 0 4px;
            }
        }
    }

    .toggle-btn{
        position: absolute;
        left: 3px;
        height: 100%;
        width: 30px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: cneter;

        .toggle{
            height: 100%;
            width: 100%;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
        
        }

        .toggle-large-screen{
            display: flex;

            @media (max-width: 980px){
                display: none;
            }
        }

        .toggle-small-screen{
            display: flex;

            @media (min-width: 980px){
                display: none;
            }
        }
    }
`
