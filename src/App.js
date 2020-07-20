import './App.css';
import React, {Component} from 'react';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: 'chihuahua',
      loading: true,
      dogUrl: null,
       
    };

    this.handleDropdownChange = this.handleDropdownChange.bind(this);

    
  }

 
  componentDidUpdate(){
   console.log("Component updated");
  
    
if(this.state.selectValue){
  
}

  }

  async componentDidMount(){
    console.log("Component Mounted")
    
    this.fetchApi();
    
    
   
  }


//index as a key is bad practice



 
 



handleDropdownChange(e) {
  this.setState({ selectValue: e.target.value }, this.handleSubmit);
  console.log("On change b4 fetch"+this.state.selectValue);
  
  this.setState({selectValue: e.target.value}, () => {
    console.log("After fetching ree"+this.state.selectValue);
    console.log(this.state.selectValue);
    this.fetchApi();
  });
  
  

 
}


 fetchApi = async () => {
 
    const urlS=  this.state.selectValue;
    console.log('This is the b4 the call'+this.state.selectValue)
    const  url= await ('https://dog.ceo/api/breed/'+urlS+'/images/random/3');
    const response=  await fetch(url);
    const data= await response.json();

    
    
    this.setState({dogUrl: data.message, loading: false})
    //console.log( await this.state.selectValue);
    //console.log(urlS);
    //console.log(selectValueF);
    console.log(url);
    

 }


  render () {
    
     


    const selectValueF =  this.state.selectValue;
    console.log(selectValueF);
  

    if(this.state.loading || !this.state.dogUrl){
      return <div>loading...</div>
    }

    
    const doggos = <div> 
      {this.state.dogUrl.map((dogUrl,index)=>(
      <div key = {index}><img src= {dogUrl}/> </div>
      ))} </div>



       switch (this.state.selectValue) {
         case 'affenpinsche':
         
           break;
           case 'beagle':
            
            break;
            case 'chihuahua':
              
              break;
              case 'shiba':
                
                break;
                case 'shihtzu':
                  
                  break;
            
         default:
           break;
       }
       /*
      if(this.state.selectValue){

        this.state.selectValue
        return <div>your chosen dog is {selectValueF}</div>
      } */
  
      //Coding breed
  
       
      
    
    //Coding breed end

    return (
     <div>
      
       {doggos}


          <div>
          <div>
            <select id="dropdown" onChange={this.handleDropdownChange}>
              <option value="N/A">N/A</option>
              <option value="affenpinscher">affenpinscher</option>
              <option value="beagle">beagle</option>
              <option value="chihuahua">chihuahua</option>
              <option value="shiba">shiba</option>
              <option value="shihtzu">shihtzu</option>
            </select>
          </div>

          <div>Selected value is : {this.state.selectValue}</div>
        </div>
     </div>


   

    );
  } // END OF RENDER
} //end of component

export default App;
