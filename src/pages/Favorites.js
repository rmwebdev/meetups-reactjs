import React, { useContext } from 'react'
import { useHistory } from 'react-router';
import MeetupList from '../componnents/meetups/MeetupList';
import FavoritesContext from '../store/favorites-context'

const Favorites = () => {
    const history = useHistory();
    // const {favorites} = useContext(FavoritesContext);
    const favoriteCtx = useContext(FavoritesContext);
    let content;
    if(favoriteCtx.totalFavorites === 0){
        content = <p>You got no favorites yet. Start adding some? 
            <button className="btn" onClick={handlerBack}>Start adding</button></p>
    } else {
        content = <MeetupList meetups={favoriteCtx.favorites} />
    }
    function handlerBack (){
            history.replace('/');
    }
    return (
        <section>
            <h2>My Favorites</h2>
            {/* { favorites.length > 0 ? <MeetupList meetups={ favorites } /> : <h4>No meetup favorite</h4> } */}
            { content }
        </section>
    )
}

export default Favorites
