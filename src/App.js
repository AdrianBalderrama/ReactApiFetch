import './App.css';
import React, {Component} from 'react';



class App extends Component {

  state= {
    loading: true,
    dogUrl: null,

  }


  async componentDidMount(){
    const url= 'https://dog.ceo/api/breeds/image/random/3';
    const response=  await fetch(url);
    const data= await response.json();
    console.log(data);
    this.setState({dogUrl: data.message, loading: false})
    console.log(this.state.dogUrl);
  }




  render () {
    return (
     <div>
       <div>
       {this.state.loading || !this.state.dogUrl ? (
        <div>loading...</div>
       ) : ( 
        <div> 
          <img src= {this.state.dogUrl[0]}/>
          <img src= {this.state.dogUrl[1]}/>
          <img src= {this.state.dogUrl[2]}/>
        </div>
       )}
       </div>
     

     </div>
   

    );
  }
}

export default App;
