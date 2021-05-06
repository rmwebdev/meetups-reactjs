import React from 'react'
import MeetupItem from './MeetupItem'

const MeetupList = (props) => {
    return (
        <ul style={{ listStyle: 'none', margin: '0', padding: '0'  }}>
          { props.meetups.map(meetup =>  (
          <MeetupItem 
          key={meetup.id } 
          id={meetup.id}
          title={meetup.title}
          description={meetup.description}
          image={meetup.image}
          /> 
          ))}
        </ul>
    )
}

export default MeetupList
