import React from "react";
import "./App.css"
import GridRow from "./Compontent/GrideRow";
class App extends React.Component{
  constructor(){
    super();
    this.state={
      bordState:[
      ["","",""],
      ["","",""],
      ["","",""],],
      turn:"x"
    }
  }
  updateBoard=(row,col)=>{
   const arr=this.state.bordState;
   arr[row][col]=this.state.turn;

      this.setState({
        turn:this.state.turn==="x"?"0":"x",
        bordState:arr
      })
  }
  render(){
    return(
      <>
      <h1 style={{"color":"blue","textAlign":"center"}}>Tic Tac Toe</h1>
      <div className="container">
          {[0,1,2].map((count)=>{
            return <GridRow index={count} 
            bordState={this.state.bordState} 
            updateBoard={this.updateBoard}/>
          })}
      </div>
      </>
      
    
    
    )
  }
}
export default App;