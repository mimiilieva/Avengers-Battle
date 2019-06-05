import React from 'react'

class BattleResults extends React.Component{
    constructor(){
        super()
        this.state={
            winner: "Avengers Team",
            loser: "Villains Team",
            winnerTeam: [
                {id:1, name:"Captain America", attack:30, defence:30, health:100},
                {id:2, name:"Iron-Man", attack:50, defence:60, health:100},
                {id:4, name:"Spider-Man", attack:30, defence:10, health:0}
            ],
            loserTeam: [
                {id:1, name:"Magento", attack:30, defence:30, health:0},
                {id:1, name:"Dr.Doom", attack:50, defence:60, health:0},
                {id:1, name:"Red Skull", attack:30, defence:10, health:0}
            ]
        }
        this.handleClick=this.handleClick.bind(this)
    }
    /*componentDidMount(){
        let id = localStorage.getItem('id')    
    }*/
    handleClick(){
        this.props.history.push('/battles/')
    }
    render(){
        return(
            <div className="wrap">
                <header>
                    <img src="https://www.sccpre.cat/mypng/detail/15-151661_header-heroes-marvel-characters-logo-png.png" alt="marvel-heroes" className="logo"/>
                    <h2>The winner of this battle is:</h2>
                    <h2 className="text-warning">{this.state.winner}</h2>
                </header>  
                <main>
                    <div className="row justify-content-center">
                        <div className="col-md-2 col-offset-md-4">
                            <ul class="list-group">
                                {this.state.winnerTeam.map((el,id) =>(
                                <li class="list-group-item list-group-item-warning">{el.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <br/>
                    <div className="row justify-content-center">
                        <div className="col-md-3 col-offset-md-2">
                            <h4 className="text-danger">{this.state.winner}</h4>
                                <ul class="list-group">
                                    {this.state.winnerTeam.map((el,id) =>(
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        {el.name}
                                        {el.health === 0 ? <span class="badge badge-danger badge-pill">Health: 0</span> : 
                                        <span class="badge badge-success badge-pill">Health: {el.health}</span>}        
                                    </li>
                                    ))}
                                </ul>
                        </div>
                        <div className="col-md-3 col-offset-md-2">
                            <h4 className="text-info">{this.state.loser}</h4>
                                <ul class="list-group">
                                    {this.state.loserTeam.map((el,id) =>(
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        {el.name}
                                        {el.health === 0 ? <span class="badge badge-danger badge-pill">Health: 0</span> : 
                                        <span class="badge badge-success badge-pill">Health: {el.health}</span>}        
                                    </li>
                                    ))}
                                </ul>
                        </div>
                    </div>
                    <br/>
                    <button className="btn btn-primary btn-rounded btn-lg" onClick={this.handleClick}>See all battles</button>
                </main>
            </div>
        )
    }
}


export default BattleResults;