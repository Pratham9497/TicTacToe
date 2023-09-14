import Icon from "../Icon/Icon";
import './card.css'

function Card({ player, onPlay, index }) {
    let disicon = <Icon />
    if(player == 'X') disicon = <Icon name="cross"/>
    else if(player=='O') disicon = <Icon name="circle"/> 
    return (
        <div className="card" onClick={() => onPlay(index)}>
            {disicon}
        </div>
    )
}

export default Card