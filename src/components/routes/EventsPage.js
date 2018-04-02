import React, { Component } from 'react';
import EventsList from '../events/EventsList'

class EventsPage extends Component {
  render() {
    return (
      <div>
        <h1>
          Events Page
        </h1>
        <EventsList />
      </div>
    );
  }
}

export default EventsPage;