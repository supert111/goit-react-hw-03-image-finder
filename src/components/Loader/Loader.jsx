import { Component } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import LoaderSpiner from "react-loader-spinner";

class Loader extends Component {
  //other logic
  render() {
    return (
      <LoaderSpiner
        type="ThreeDots"
        color="#00BFFF"
        height={80}
        width={80}
        // timeout={3000} //3 secs
      />
    );
  }
}

export default Loader;

