import Image from 'next/image'
import {useSnap} from '@mozeyinedu/hooks-lab'
import {useRouter} from 'next/router'

import {
    HeroSectionWrapper,
    HeroSection,
    HeroButton,
    HeroSectionTitle,
    HeroSectionSubTitle,
    HeroSectionText,
} from './styles';



const Hero = () => {
    const {snap} = useSnap(.5)
    const router = useRouter();

    return (
        <HeroSectionWrapper type='hero' bg='#00415D30'>
            <HeroSection padd="pad">

                <HeroSectionTitle>SmartEarners' <span>Investment</span></HeroSectionTitle>

                <HeroSectionSubTitle>We Trade it, You Learn & Earn it</HeroSectionSubTitle>

                <HeroSectionText>
                    SmartEarner is a trustworthy platform that has been in existence for years serving several financial institutions across the world.
                </HeroSectionText>
            
                <HeroButton {...snap()} onClick={()=>router.push(`/dashboard/investment/`)} >INVEST NOW</HeroButton>

            </HeroSection>
    
            <HeroSection>
                    <Image src={"/hero.png"} alt="Hero" width="350" height="250"/>
            </HeroSection>    
        </HeroSectionWrapper>
    )
}
export default Hero