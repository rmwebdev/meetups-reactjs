import { useState, useEffect } from 'react'
import MeetupList from '../componnents/meetups/MeetupList';

const AllMeetups = ()   => {
  const [loading, setLoading ] = useState(true);
  const [meetups, setMeetups] = useState([])

  useEffect(() => {
      fetch('https://meetup-react-5f79d-default-rtdb.firebaseio.com/meetups.json')
      .then(response => {
        return response.json();
      }).then((data) => {
        const loadMeetups = [];
        for ( const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          }
          loadMeetups.push(meetup);
        }
        setLoading(false);
        setMeetups(loadMeetups);
      });
    }, []);
       
      if (loading) {
        return (
          <section>
            <h4>Loading...</h4>
          </section>
        )
      }
    return (
        <section>
            <h2>All Meetups</h2>
           <MeetupList meetups={meetups}/>
        </section>
    )
}

export default AllMeetups
