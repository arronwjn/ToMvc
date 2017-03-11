import React from 'react';
import $ from 'jquery';
import   '../main.css';



class TodoList extends React.Component{


  render(){
    let list=this.props.data.map(item=><li key={item.id}><input type='checkbox' className='pull-left' aria-label="..."  defaultChecked={item.completed} onChange={()=>this.props.checkClick(item.id)}/>
    <sapn style={{textDecoration:item.completed?'line-through':'none',color:item.completed?'#ccc':'#000'}}>{item.text}</sapn><sapn className='glyphicon glyphicon-remove pull-right' aria-hidden='true' onClick={()=>this.props.handleRemove(item.id)}></sapn></li>)
    return(
      <div className='todo'>
        {list}
      </div>
    )
  }
}

// class TodoList extends React.Component{
//   render(){
//     return(
//       <div>
//         {this.props.data.map(item=><li key={item.id}>
//           <input type='checkbox' className='pull-left' aria-label="..." defaultChecked={item.completed} onChange={()=>this.props.handleClick(item.id)}/>
//           <span style={{textDecoration:item.completed?'line-through':'none'}}>{item.text}</span><sapn className='glyphicon glyphicon-remove pull-right' aria-hidden='true' onClick={()=>this.props.handleRemove(it)}></sapn></li>)}
//       </div>
//     )
//   }
// }
export default TodoList;
