
import { Component } from 'react';
import './components/app.css';
import Nav from './components/Nav';
import Pagecontent from './components/PageContent';

class App extends Component {
    constructor() {
        super()
        this.state = {
            gif: "",
        }
    }

    guardarEstado = (data)=>{
      this.setState({
        gif : data
      })
    }

    async apiCall(guardar){
       try {
        let response = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=Zt0SFw83CKHyNCUAnSRKgsFhkO83V5M5')
        let result = await response.json()
        guardar(result)
       } catch (error) {
         console.log(error)
       }
     }
    componentDidMount(){
      this.apiCall(this.guardarEstado)

    }

    componentDidUpdate(){
      console.log('me actualize')
    }

  render() {
    return (
      <div>
        <Nav />
        <Pagecontent data={this.state}/>
      </div>

    );
  }
}

export default App;
