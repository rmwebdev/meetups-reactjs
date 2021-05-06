import { useHistory } from 'react-router-dom'
import Form from '../componnents/meetups/Form'

const NewMeetup = () => {
    const history = useHistory();
    function addMeetupHandler(newMeetup){
        fetch('https://meetup-react-5f79d-default-rtdb.firebaseio.com/meetups.json',{
                method: 'POST',
                body: JSON.stringify(newMeetup),
                header: {
                    'Content-Type': 'application/json'
                }
        });
        history.replace('/');
    }
    return (
        <section>
            <h2>Add new meetup</h2>
            <Form  addNewMeetup={addMeetupHandler}/>
        </section>
    )
}

export default NewMeetup
