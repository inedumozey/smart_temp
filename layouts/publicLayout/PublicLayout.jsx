import { Main, Header, Footer } from '../../styles/globalStyle'
import Header_ from './Header';
import { CopyRight } from '../../styles/globalStyle';
import { useState, useEffect } from "react";
import { mobileAndTabletCheck } from '../../utils/mobileAndTabletCheck';

export default function PublicLayout({children, userInfo}) {

    const [isMobile, setIsMobile] = useState(false);
    useEffect(()=>{
      setIsMobile(mobileAndTabletCheck(window))
    }, [])

    return (
      <>
        <Header headerHeight="90px">
          <Header_ userInfo={userInfo}/>
        </Header>

        <Main userInfo={userInfo} height={{headerHeight: '90px', footerHeight: '50px'}}>
            {children}
        </Main>

        {
          <Footer style={{background: isMobile ? '' : 'var(--major-color-purest)', display: 'flex', justifyContent: 'center', alignItems: 'center'}} footerHeight='50px'>
            {
              isMobile ? '' :
              (
              <CopyRight>
                  &copy; {new Date().getFullYear() > 2022 ? '2021 - ' + new Date().getFullYear() : 2022} Smart Earners
              </CopyRight>
              )
            }
          </Footer> 
        }
      </>
    )
}

