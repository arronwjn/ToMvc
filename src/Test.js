import React from 'react';
import $ from 'jquery';
import TodoList from './components/TodoList'
import TodoControl from './components/TodoControl'


class Test extends React.Component{
  constructor(){
    super();
    this.state={
      arr:[],
      inputValue:'',
      visible:'All'
    }
  }
  click(){
    this.setState({add:this.state.arr.length+1})
  }
  handleInput(e){
    this.setState({inputValue:e.target.value})
  }
  handleSubmit(e){
    e.preventDefault()
    let newItem=this.state.inputValue.trim(); //trim()方法去除首尾空格
    if(newItem.length===0){
      alert('输入内容不能为空')
    }else{
      let newTodo={
        text:newItem,
        completed:false,
        id: new Date().getTime()
      }
      this.setState({arr:[...this.state.arr,newTodo]})
    }
    this.setState({inputValue:''})
  }
  checkClick(id){
    let index=this.state.arr.findIndex(item=>item.id===id)
    this.state.arr[index].completed=!this.state.arr[index].completed;
    this.setState({arr:this.state.arr})
    // console.log(index);
  }
  handleRemove(id){
    console.log(id)
    let index=this.state.arr.findIndex(item=>item.id===id)
    this.state.arr.splice(index,1)
    this.setState({arr:this.state.arr})
  }
  handleFilter(visible){
    console.log(visible)
    this.setState({visible:visible})
  }
  componentWillMount(){
    if (localStorage.todos) {
      this.setState({arr: JSON.parse(window.localStorage.getItem('todos') || '[]') })
    }
  }
  render(){
    localStorage.setItem('todos',JSON.stringify(this.state.arr))
    let styles={
      root:{
        maxeidth:'680px',
        margin:'0 auto',
        textAlign:'center'
      }
    }
    let showData
    switch(this.state.visible){
      case 'Active':
      showData=this.state.arr.filter(item=>item.completed==false);
      break;
      case 'Completed':
      showData=this.state.arr.filter(item=>item.completed==true);
      break;
      default:
      showData=this.state.arr;
    }
    console.log(this.state.arr)
    return(
      <div style={styles.root}>
        <h1>TODO</h1>
        <form onSubmit={this.handleSubmit.bind(this)} className='form-inline'>
          <div className='form-group'>
            <input value={this.state.inputValue} onChange={this.handleInput.bind(this)} className="form-control"/>
            <button onClick={this.click.bind(this)} className="btn btn-default">Add#{this.state.arr.length}</button>
          </div>
        </form>
        <TodoList data={showData} checkClick={this.checkClick.bind(this)} handleRemove={this.handleRemove.bind(this)}/>
        <TodoControl handleFilter={this.handleFilter.bind(this)} visible={this.state.visible}/>
        {this.state.visible}

        <div>版权所有©王健男</div>
      </div>
    )
  }
}

export default Test;
