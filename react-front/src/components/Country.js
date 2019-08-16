import React, {Component} from 'react';
import axios from "axios";




class Country extends Component {
  constructor(){
    super()
    this.state = {
      countries : [],
      
    }
  }



  componentDidMount(){
  //make an axios request from backend
    axios.get('http://localhost:3001/api/country')
   
      .then(res =>{
        // console.log(res)
        this.setState({ countries: res.data});
        console.log(this.state.countries)

      })



  }


  delete= e =>{
    console.log(e.target)
    console.log(e.target.className)
    axios.delete('http://localhost:3001/api/country/'+ e.target.className)
    .then(res => {
      console.log(res)
    })
    
 

  }


  render(){
    return (

      <div className="country">
        <ul>
          {this.state.countries.map(country => <div><li key={country.name}>{country.name}</li><button className={country._id} onClick={this.delete}>Delete</button></div>)}
        </ul>
        
         <h1>this is the countries</h1>
      </div>
    );
  }
  
}

export default Country;