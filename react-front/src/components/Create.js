import React, {Component} from 'react';
import axios from "axios";




class Create extends Component {
  constructor(){
    super()
    this.state = {
        name:'',
        capital: ''

    }
  }



  submit=()=>{
    axios.post('http://localhost:3001/api/country',
    this.state
    )
    .then(
        res=>{
            console.log(res)
        }
    )

  }

  updateinputName = e =>{
      this.setState({name: e.target.value})
  }

  updateCapital = e =>{
    this.setState({capital: e.target.value})
}



  render(){
    return (

      <div className="create">
          <form>
            <h1>Input Country Name</h1>
            <input type="text" name="countryname" onChange={this.updateinputName} ></input> <br/>
            <h1>Input Country Capital</h1>
            <input type="text" name="capital" onChange={this.updateCapital}></input> <br/><br/>
            <button onClick={this.submit}>Submit</button>
            <p>{this.state.name}</p>
            <p>{this.state.capital}</p>
         </form>
      </div>
    );
  }
  
}

export default Create;