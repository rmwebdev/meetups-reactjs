import { useRef } from 'react'
import Card from '../ui/Card'

import styles from './Form.module.css'
const Form = (props) => {
    const title = useRef();
    const image = useRef();
    const address = useRef();
    const description = useRef();

    function submitHandler (e) {
        e.preventDefault();
        const newTitle = title.current.value;
        const newImage = image.current.value;
        const newAddress = address.current.value;
        const newDesc = description.current.value;

        const newMeetup = {
            title: newTitle,
            image: newImage,
            address: newAddress,
            description: newDesc
        }
        props.addNewMeetup(newMeetup);
    }
    return (
        <Card>
            <form className={ styles.form} onSubmit={submitHandler}>
                <div className={ styles.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" required id="title" ref={title}/>
                </div>
                <div className={ styles.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" required id="image" ref={image} />
                </div>
                <div className={ styles.control}>
                    <label htmlFor="address">Meetup address</label>
                    <input type="text" required id="address" ref={address} />
                </div>
                <div className={ styles.control}>
                    <label htmlFor="description">Meetup Description</label>
                    <textarea required id="description" rows="4" ref={description}></textarea>
                </div>
               <div className={styles.actions}>
               <button>Add Meetup</button>
               </div>
            </form>
        </Card>
    )
}

export default Form
