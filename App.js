import React from 'react';
import Form from './js/screen/form';
import console = require('console');

export default class App extends React.Component {
    onSubmit = fields =>{
        console.log("App comp got : ", fields);
    };
  render() {
     return (
       <div className="App">
        <form onSubmit={fields =>} />
       </div>
    );
  }
}


