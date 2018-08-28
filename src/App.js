import React, { Component } from 'react';
import logo from './logo.svg';
import HomeScreen from './component/Home';
import AboutScreen from './component/about';
import ContactScreen from './component/contact';
import { Router, Route } from "react-router";
import {routes} from './routes';
import './App.css';

class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     title: 'CRUD APP',
  //     act: 0,
  //     index: '',
  //     datas: [],
  //     showTitle: false
  //   }
  // }

  // componentDidMount() {
  //   // this.refs.name.focus();
  // }

  // componentWillReceiveProps() {
    
  // }

  // submit(e) {
  //   e.preventDefault();
  //   let datas = this.state.datas;
  //   let name = this.refs.name.value;
  //   let address = this.refs.address.value;
  //   if (this.state.act === 0) {
  //     let data = {
  //       name, address
  //     };
  //     datas.push(data);
  //     let go = true;
  //     this.setState({
  //       showTitle: go,
  //     });
  //     // this.renderTitle(go);
  //   } else {
  //     let index = this.state.index;
  //     datas[index].name = name;
  //     datas[index].address = address;
  //     let no = false;
  //     this.setState({
  //       showTitle: no,
  //     });
  //     // this.renderTitle(no);
  //   }
  //   this.setState({
  //     datas: datas,
  //     act: 0
  //   });
  //   this.refs.myForm.reset();
  //   this.refs.name.focus();
  // }

  // remove(item) {
  //   let datas = this.state.datas;
  //   datas.splice(item, 1);
  //   this.setState({
  //     datas: datas
  //   });
  //   // this.refs.myForm.reset();
  //   // this.refs.name.focus();
  // }

  // edit(item) {
  //   let data = this.state.datas[item];
  //   this.refs.name.value = data.name;
  //   this.refs.address.value = data.address;
  //   this.setState({
  //     act: 1,
  //     index: item
  //   });
  //   this.refs.name.focus();
  // }
  // renderTitle(bol) {
  //   if (this.state.showTitle) {
  //     return <div>Titulooo</div>;
  //   }
  // }

  render() {
    // let datas = this.state.datas;
    return (
      <HomeScreen></HomeScreen>
      // <Router>
      //   <div>
        
      //     <Route exact path={routes.home} component={HomeScreen} />
      //     <Route path={routes.about} component={AboutScreen} />
      //     <Route path={routes.contact} component={ContactScreen} />
        
      //   </div>
      // </Router>
      
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h3 className="App-title">{this.state.title}</h3>
    //     </header>
    //     <ul>
    //         <li><a href="/">Home</a></li>
    //         <li><a href="/about">About</a></li>
    //         <li><a href="/contact">Contact</a></li>
    //     </ul>
    //     <HomeScreen> BLAAAAA</HomeScreen>
    //     {this.renderTitle()}
    //     {this.state.showTitle ? <div>SubTitulo</div> : null}
    //     <form ref="myForm">
    //       <input type="text" placeholder="Full Name" ref="name"/>
    //       <input type="text" placeholder="Address" ref="address"/>
    //       <button onClick={(e) => this.submit(e)} >Submit</button>
    //     </form>
    //     <div>
    //       {datas.map((data, i) =>
    //         <li key={i}>
    //           {i+1}. {data.name}, {data.address}
    //           <button onClick={() => this.remove(i)} >remove</button>
    //           <button onClick={() => this.edit(i)} >edit</button>
    //         </li>
    //       )}
    //     </div>
    //   </div>
    );
  }
}

export default App;
