import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


class AvengersSelection extends React.Component {
  constructor(){
    super()
    this.state={
      avengersList: [],
      selectedAvengers: [],
      clicks: 1,
      displayH2: "none",
      displayH3: "block"     
    }
    this.onMouseOut=this.onMouseOut.bind(this)
    this.onMouseOver=this.onMouseOver.bind(this)
    this.handleClick=this.handleClick.bind(this)
  }
    
   onMouseOver(event){
    const el = event.currentTarget
    let blue ="#4961C4"
    let width = "2px"
      el.style.borderColor = blue
      el.style.borderWidth = width
   }
   onMouseOut(event){
    const el = event.currentTarget
    let gray = "#E4E5EB"
    el.style.borderColor = gray
   }

   handleClick(event){
    const el = event.currentTarget
    let blue ="#D8DBEA"  
    el.style.backgroundColor = blue //adding background on click
    let id = event.currentTarget.id-1     

    if(this.state.clicks === 3 ){
      let child = event.currentTarget
      const parent = child.parentElement
      let dis = "none"
      parent.style.display = dis  
      this.setState({
        displayH2: "block",
        displayH3: "none",  
      })
    }
    if(this.state.clicks <= 3){
      //console.log(log) //checking id
      let avenger = this.state.avengersList[id]
      let selectedAvengers = this.state.selectedAvengers.slice() //for updating array, Working on the state object directly is not desirable
      selectedAvengers.push(avenger)
      this.setState({        
       selectedAvengers: selectedAvengers,
       clicks: this.state.clicks + 1
      })
    }    
   }
 
  componentDidMount(){
    let token = 'Bearer ' + 'H4OUJ19yD5kKFvE31mkAhG0SJocdtqBQ'

    fetch('http://localhost:3000/avengers',{
      headers: {
        Authorization: token
      }
    })
      .then(response => response.json()) //convert data to json 
      .then(data => this.setState({
        avengersList: data       
      }))     
  }
  render(){
   
    return(
      <div className="wrap">
        <header>
          <img src="https://www.sccpre.cat/mypng/detail/15-151661_header-heroes-marvel-characters-logo-png.png" alt="marvel-heroes" className="logo"/>
          <h3 style={{display: this.state.displayH3}}>Choose your 3 Avengers to win the battle</h3>
        </header>       
        <main>
          <div className="row">
            {this.state.avengersList.map((el,id) =>(
              <div  className="card col-md-4 offset-md-1" key={id} id={el.id} onMouseOver={event => this.onMouseOver(event)}
                onMouseOut={event => this.onMouseOut(event)} onClick={this.handleClick}>        
                <div className="card-body">
                  <h4 className="card-title">{el.name}</h4>
                  <h6 className="card-subtitle mb-2 text-danger">Attack: {el.atq}</h6>  
                  <h6 className="card-subtitle mb-2 text-info">Defence: {el.def}</h6>  
                  <h6 className="card-subtitle mb-2 text-success">Health: {el.hp}</h6>  
                </div>
              </div>  
            ))}                         
          </div>
          <div className="row justify-content-center" style={{display: this.state.displayH2}}>
            <div className="col-md-4 offset-md-4">
              <h2>Your team is ready!</h2>
            </div>
            <div className="col-md-4 offset-md-4">
              <button className="btn btn-danger btn-rounded btn-lg">Start the battle</button>
            </div>
          </div>
        </main>
      </div>
    )
  }

}

export default AvengersSelection;
