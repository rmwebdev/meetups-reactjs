import { useContext } from 'react'
import FavoritesContext from '../../store/favorites-context';
import Card from '../ui/Card'


import styles from './Meetup.module.css'
const MeetupItem = (props) => {
    const favoritesCtx = useContext(FavoritesContext);
    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);
    function toggleFavoriteStatusHandler(){
            if(itemIsFavorite) {
                favoritesCtx.removeFavorite(props.id);
            } else {
                favoritesCtx.addFavorite({
                    title: props.title,
                    image: props.image,
                    address: props.address,
                    description: props.description,
                    id: props.id
                })
            }
    }
    return (
        
        <li className={ styles.item}>
            <Card>
            <div className={ styles.image}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={ styles.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={ styles.actions}>
            <button onClick={ toggleFavoriteStatusHandler }>{ itemIsFavorite ? 'Remove from Favorite' : 'To Favorite' }</button>
            </div>
            </Card>
        </li>
      
    )
}

export default MeetupItem
