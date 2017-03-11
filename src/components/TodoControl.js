import React from 'react';
import $ from 'jquery';
import   '../main.css';



class TodoControl extends React.Component{
  constructor(){
    super()
    this.state={
      btns:['All','Active','Completed']
    }
  }

  render(){
    return(
      <div className='control'>
        分类：
        {this.state.btns.map(item=><button onClick={()=>this.props.handleFilter(item)}
          key={Math.random()} className={this.props.visible===item?'btn btn-success':'btn btn-default'}>{item}</button>)}
        {/*<button className='btn btn-primary' onClick={()=>this.props.handleFilter('All')}>All</button>
        <button className='btn btn-warning' onClick={()=>this.props.handleFilter('Active')}>Active</button>
        <button className='btn btn-success' onClick={()=>this.props.handleFilter('Completed')}>Completed</button>*/}
      </div>
    )
  }
}

// class TodoControl extends React.Component{
//   render(){
//     return(
//       <div>
//         分类：
//         <button className='btn btn-primary' onClick={this.props.handleFilter('All')}>All</button>
//         <button className='btn btn-warning' onClick={this.props.handleFilter('Completed')}>Completed</button>
//         <button className='btn btn-success' onClick={this.props.handleFilter('Active')}>Active</button>
//       </div>
//     )
//   }
// }
export default TodoControl;
