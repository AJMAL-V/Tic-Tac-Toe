import React from 'react';
import GrideItem from './GrideItem';
class GridRow extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
    <div className="grid-row">
         {[0,1,2].map((count)=>{
             return<GrideItem colIndex={count}
              rowIndex={this.props.index}
              bordState={this.props.bordState}
              updateBoard={this.props.updateBoard}/>
         })}
    </div>
        )
    }
}
export default GridRow;