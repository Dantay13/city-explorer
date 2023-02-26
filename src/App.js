import React from "react";
// import axios from "axios";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import './App.css';

class App extends React.Component{
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     something: [],
  //   }
  // }

  // get = async ()=>{
  //   const url = `${process.env.REACT_APP_SERVER}/weather`
  //   const response = await axios.get(url);

  //   this.setState({
  //     something: response.data
  //   });
  // }

  render(){
    return(
    <>
      <Header/>
      <Main/>
      <Footer/>
      {/* <button onClick={this.get}>Get </button>
      <ul>
        {this.state.something.map((item, idx) =>
          <li key={idx}>
            <p>My</p>
            <p>{item.name}: {item.description}</p>
          </li>
        )}
      </ul> */}
    </>
    )
  }
}

export default App;