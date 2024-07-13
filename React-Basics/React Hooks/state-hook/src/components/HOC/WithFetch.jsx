import React from "react";

const WithFetch = (wrappedComponent) => {
  class FetchData extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        movies: [],
      };
    }

    componentDidMount() {
      fetch("htts://json-faker.onrender.com/movies")
        .then((response) => response.json())
        .then((data) => {
          this.setState({ movies: data.movies });
        });
    }

    render() {
      return (
        <>
          {this.state.movies.length > 0 && (
            <wrappedComponent movies={this.state.movies} />
          )}
        </>
      );
    }
  }

  return FetchData;
};

export default WithFetch;
