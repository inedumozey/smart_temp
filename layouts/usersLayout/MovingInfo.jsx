function MovingInfo({movingInfo}){
    return(
        <marquee
            behavior="smooth"
            direction=""
            style={{fontSize: '.8rem', fontWeight: '400'}}>
            {
                movingInfo.map((info, i)=>{
                    return(
                    <span key={i} style={{marginRight: '5px', display: 'inline-block', fontSize: '.8rem'}}>
                        {info}
                    </span>
                    )
                })
            }
        </marquee>
    )
}

export default MovingInfo