import React from 'react'

class ListOfBattles extends React.Component{
    constructor(){
        super()
        this.state={
            battles: [
                {id:1, name:"Infinity war"},
                {id:2, name:"End game"},
                {id:3, name:"Sparkle battle"}
            ]
        }
        this.handleClick=this.handleClick.bind(this)
    }
    /*componentDidMount(){
        let token = 'Bearer ' + 'H4OUJ19yD5kKFvE31mkAhG0SJocdtqBQ'
        fetch('http://localhost:3000/battles',{
          headers: {
            Authorization: token
          }
        })
          .then(response => response.json()) 
          .then(data => this.setState({
            battles: data       
          }))     
    }*/

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
        let id = event.currentTarget.id
        this.props.history.push('/battle/' + id)
       }
    
    render(){
        return(
            <div className="wrap">
                <header>
                    <img src="https://www.sccpre.cat/mypng/detail/15-151661_header-heroes-marvel-characters-logo-png.png" alt="marvel-heroes" className="logo"/>
                    <h2>List of battles</h2>
                    
                </header> 
                <br/>
                <main>
                    <div>
                        <h4 className="text-info">Click the battle to see the details</h4>
                    </div>
                    <br/>
                    <div className="row">          
                        {this.state.battles.map((el,id) =>(
                        <div  className="card col-md-2 offset-md-1" key={id} id={el.id} onMouseOver={event => this.onMouseOver(event)}
                            onMouseOut={event => this.onMouseOut(event)} onClick={this.handleClick}>        
                            <div className="card-body">
                            <h4 className="card-title">{el.name}</h4> 
                            </div>
                        </div>  
                        ))}  
                    </div>
                </main>
            </div>
        )
    }
}

export default ListOfBattles;