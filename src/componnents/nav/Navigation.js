import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FavoritesContext from '../../store/favorites-context';

import styles from './Navigation.module.css'

const Navigation = () => {
    const { totalFavorites } = useContext(FavoritesContext);
    return (
        <header className={styles.header} >
            <div className={styles.logo}  style={{ fontSize: '1rem'}}>React Meetups</div>
            <nav >
                <ul>
                    <li>
                    <Link to="/"  style={{ fontSize: '0.75rem'}}>All Meetups </Link>
                    </li>
                    <li>
                    <Link to="/new-meetup"  style={{ fontSize: '0.75rem'}}>New Meetup</Link>
                    </li>
                    <li>
                    <Link to="/favorites" style={{ fontSize: '0.75rem'}}>Favorites Meetups <span className={ styles.badge}> { totalFavorites }</span></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation
