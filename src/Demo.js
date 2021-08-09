import React ,{Component} from 'react';
import './Demo.css';
 
class Demo extends Component {

  constructor(props){
    super(props);
    this.state={
      items:[],
      txtContent: "",
    };
  }

  txtChange=(e)=>{
    this.setState({txtContent:e.target.value})
  }

  addItem=(e)=>{
    let currentText=this.state.txtContent;
    let currentItems=this.state.items;
    currentItems.push(currentText);
    this.setState({items:currentItems});
    

    
    
  }

  deleteItem=(i)=>{
    let currentItems=this.state.items;
    currentItems.splice(i,1);
    this.setState({items:currentItems});
  }
  render(){

    return(
      <div className="header">
        <h1>TO DO APP</h1>
        <div className="Section-container">
          <input type="text" value={this.input} onChange={this.txtChange}/>
          <button onClick={this.addItem}>Add</button>
          <ul>
            {this.state.items.map((itm,k)=>{
          
            return(
              <li>{itm}<button onClick={()=>{this.deleteItem(k)}}>Delete</button></li>
            )
            })}
          </ul>
        </div>
      </div>
      
    );
  }
}
export default Demo;