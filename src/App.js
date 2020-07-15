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


//index as a key is bad practice



 

  render () {


    if(this.state.loading || !this.state.dogUrl){
      return <div>loading...</div>
    }

    
    const doggos = <div> 
      {this.state.dogUrl.map((dogUrl,index)=>(
      <div key = {index}><img src= {dogUrl}/> </div>
      ))} </div>

    

    return (
     <div>
      
       {doggos}
          

     </div>
   

    );
  }
}

export default App;
