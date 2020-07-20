import './App.css';
import React, {Component} from 'react';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: 'chihuahua',
      loading: true,
      dogUrl: null,
       news: [],
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

    //News api testing
    this.fetchNews();
    
   // does not work check stuff  console.log(this.state.news.articles[0].content);
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

 fetchNews = async () => {
 
  const newsUrl=  'https://newsapi.org/v2/top-headlines?country=mx&apiKey=a92ff2b8cb314667a0262fca609fe4c5';
  console.log('This is the b4 the call'+newsUrl)
  const  urlF= await (newsUrl);
  const responseNews=  await fetch(urlF);
  const news= await responseNews.json();
 
  
  
  this.setState({news: news.articles})
  //console.log( await this.state.selectValue);
  //console.log(urlS);
  //console.log(selectValueF);
  console.log( this.state.news);
  console.log("trying read articles"+this.state.news);

}

 

  render () {
    
     


    const selectValueF =  this.state.selectValue;
    console.log(selectValueF);
  

    if(this.state.loading || !this.state.dogUrl ){
      return <div>loading...</div>
    }

    
    const doggos = <div> 
      {this.state.dogUrl.map((dogUrl,index)=>(
      <div key = {index}><img src= {dogUrl}/> </div>
      ))} </div>

      const news = <div> 
      {this.state.news.map((news,index)=>(
      <div key = {index}style = {{marginLeft:'auto', marginRight:'auto'}} ><a href={news.url}  ><img  style = {{width:720, height:480, marginLeft:'auto', marginRight:'auto'}} src= {news.urlToImage}/></a><div>{news.description} {news.title} </div></div>
      ))} </div>

    
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
        {news}

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
