import React from 'react';
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';
import Profile from '../../components/Profile/Profile';
import './App.css';

class App extends React.Component {
    render(){
        return  (
          <div className = "container">    
            <Header />
            <Profile />
            <Content />
          </div>
        );
    }
}
  
export default App;