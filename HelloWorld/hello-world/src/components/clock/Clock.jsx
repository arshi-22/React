class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return <h1>The time is {this.state.date.toLocaleTimeString()} </h1>;
  }
}

export default Clock;
