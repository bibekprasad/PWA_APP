import React,{ Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends Component{
	constructor(props) {
		super(props);


		this.state = {
			items: []
		};

		this.additem =this.additem.bind(this);
		this.deleteitem=this.deleteitem.bind(this);

	}


	additem(e) { 
		if(this._inputElement.value!=="") {
		  	var newItem ={
		  		text:this._inputElement.value,
		  		key: Date.now()
		  	};
			this.setState((prevstate) => {
		  		return {
		  			items: prevstate.items.concat(newItem)
		  		};	
			}); 	

		}

		this._inputElement.value="";

		console.log(this.state.items);

		e.preventDefault();
 	}

 	deleteitem(key) {
 		console.log("delkey "+ key);

 		var filteredItems=this.state.items.filter(function (item){
 			return(item.key !== key)
 	

 		});

 		this.setState({
 			items: filteredItems
 		});

 	}	
 			



	render(){
		return(
		  <div className="TodoListMain">
		    	<div className="header">
		     		<form onSubmit={this.additem}>
		  	  			<input ref={(a) => this._inputElement =a }
		  	  				placeholder="enter task">
		  	  			</input>
		  	 	    	<button type="submit"> add </button>	
		      		</form>
		    	</div>	
		    	<TodoItems entries={this.state.items}
						   delete={this.deleteitem}/>

		  </div>
			
		);
	}
}

export default TodoList;