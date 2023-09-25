import React from 'react'
const Salary=20000
class Hike extends React.Component{
state={
    current:Salary

}


HandleHike=(Hike)=>{
this.setState({current:Salary+(this.state.current*Hike)/100});  
};




render(){
    return(
        <div>
            <p>Salary:20000</p>
        <h3>Hike:{this.state.current}</h3><br/>
        <button onClick={this.HandleHike.bind(this,10)}>10%</button>
        <button onClick={this.HandleHike.bind(this,15)}>15%</button>
        <button onClick={this.HandleHike.bind(this,20)}>20%</button>
        <button onClick={this.HandleHike.bind(this,30)}>30%</button>
        <button onClick={this.HandleHike.bind(this,50)}>50%</button>
        <button onClick={this.HandleHike.bind(this,100)}>100%</button>
        
        </div>
)
    }
}

export default Hike