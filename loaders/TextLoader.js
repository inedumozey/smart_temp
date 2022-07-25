import Spinner from "./Spinner";

export default function TextLoader({iconSize, textSize}) {
  return (
    <span style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontSize: textSize ? textSize : '1.5rem'
    }}>
        <span style={{marginRight: '5px'}}>
            Loading...
        </span>
        <Spinner size={iconSize ? iconSize : '20px'}/>
    </span>
  )
}
