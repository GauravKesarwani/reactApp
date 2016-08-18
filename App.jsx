import React, { Component } from 'react';
import Header from './Header.jsx';
import Content from './Content.jsx';
import TableRow from './TableRow.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
  data: [
    {
      "id": 1,
      "name": "Gaurav",
      "age": "20"
    },

    {
      "id": 2,
      "name": "Kesarwani",
      "age": 30
    },

     {
      "id": 2,
      "name": "Kesarwani",
      "age": 30
    }
  ]
    } 
   }
  render() {
    return (
     <div>
      <Header />
      <Content />
     </div>
    );
   }
}

export default App;