import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EventDetails({ match }) {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    axios.get(`/api/events/${match.params.id}`)
      .then(response => setEvent(response.data))
      .catch(error => console.error(error));
  }, [match.params.id]);

  return (
    <div>
      {event ? (
        <div>
          <h1>{event.name}</h1>
          <p>{event.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default EventDetails;

