//Getting Started with React Redux

class DisplayMessages extends React.Component {
    // Change code below this line
    constructor(props){
      super(props);
      this.state = {
        input : '',
        messages: []
      }
      
    }
    // Change code above this line
    render() {
      return <div />
    }
  };
    
//Manage State Locally First
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }
  // Add handleChange() and submitMessage() methods here
  handleChange(data){
    this.setState({
      input: data.target.value,
      messages: this.state.messages
    })
  }

  submitMessage(){
    this.setState({
      input: "",
      messages: [...this.state.messages, this.state.input]
    })
  }

  render() {

    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* Render an input, button, and ul below this line */ }
        <input onChange={this.handleChange.bind(this)} value={this.state.input}/>
        <button onClick={this.submitMessage.bind(this)}>
          Submit
        </button>
        <ul>
          {this.state.messages.map((x)=> {
            return <li>{x}</li>
          })}
        </ul>
        { /* Change code above this line */ }
      </div>
    );
  }
};

//Extract State Logic to Redux

// Define ADD, addMessage(), messageReducer(), and store here:

const ADD = "ADD";

function addMessage(message){
  return {
    type: ADD,
    message: message
  }
}

function messageReducer(initialState=[],action){
  if(action.type==='ADD'){
    return [...initialState,action.message];
  }else{
    return initialState;
  }
}

const store = Redux.createStore(messageReducer)

//Use Provider to Connect Redux to React

// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};



const store = Redux.createStore(messageReducer);

// React:

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {  
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  // Render the Provider below this line
  render(){
    return(
      <Provider store={store}>
        <DisplayMessages />
      </Provider>
    )
  }
  // Change code above this line
};

//Map State to Props

const state = [];

// Change code below this line

function mapStateToProps(state){
  return {
    messages: state 
  }
}



