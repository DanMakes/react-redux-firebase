import React, { Component } from "react";
import { connect } from "react-redux";
import { List } from "react-virtualized";
import {
  moduleName,
  eventsListSelector,
  loadAllPerson
} from "../../ducks/people";
import PeopleCard from "./PeopleCard";

class PeopleList extends Component {
  componentDidMount() {
    this.props.loadAllPerson();
  }

  render() {
    const { people } = this.props;
    console.log(people.length)
    return (
      <List
        width={300}
        height={200}
        rowCount={people.length}
        rowHeight={100}
        rowRenderer={this.rowRenderer}
      />
    );
  }

  rowRenderer = ({ key, index, isScrolling, isVisible, style }) => (
    <PeopleCard key={key} person={this.props.people[index]} style={style} />
  );
}

export default connect(
  state => ({
    people: eventsListSelector(state)
  }),
  { loadAllPerson }
)(PeopleList);
