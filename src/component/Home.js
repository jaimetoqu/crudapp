import React from "react";
import logo from '../logo.svg';
import '../App.css';

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          title: 'CRUD APP',
          act: 0,
          index: '',
          datas: [],
          showTitle: false
        }
      }
    
      componentDidMount() {
        // this.refs.name.focus();
      }
    
      componentWillReceiveProps() {
        
      }
    
      submit(e) {
        e.preventDefault();
        let datas = this.state.datas;
        let name = this.refs.name.value;
        let address = this.refs.address.value;
        if (this.state.act === 0) {
          let data = {
            name, address
          };
          datas.push(data);
          let go = true;
          this.setState({
            showTitle: go,
          });
          // this.renderTitle(go);
        } else {
          let index = this.state.index;
          datas[index].name = name;
          datas[index].address = address;
          let no = false;
          this.setState({
            showTitle: no,
          });
          // this.renderTitle(no);
        }
        this.setState({
          datas: datas,
          act: 0
        });
        this.refs.myForm.reset();
        this.refs.name.focus();
      }
    
      remove(item) {
        let datas = this.state.datas;
        datas.splice(item, 1);
        this.setState({
          datas: datas
        });
        // this.refs.myForm.reset();
        // this.refs.name.focus();
      }
    
      edit(item) {
        let data = this.state.datas[item];
        this.refs.name.value = data.name;
        this.refs.address.value = data.address;
        this.setState({
          act: 1,
          index: item
        });
        this.refs.name.focus();
      }
      renderTitle(bol) {
        if (this.state.showTitle) {
          return <div>Titulooo</div>;
        }
      }
    
      render() {
        let datas = this.state.datas;
        return (
          <div >
            {this.renderTitle()}
            {this.state.showTitle ? <div>SubTitulo</div> : null}
            <form ref="myForm">
              <input type="text" placeholder="Full Name" ref="name"/>
              <input type="text" placeholder="Address" ref="address"/>
              <button onClick={(e) => this.submit(e)} >Submit</button>
            </form>
            <div>
              {datas.map((data, i) =>
                <li key={i}>
                  {i+1}. {data.name}, {data.address}
                  <button onClick={() => this.remove(i)} >remove</button>
                  <button onClick={() => this.edit(i)} >edit</button>
                </li>
              )}
            </div>
          </div>
        );
      }
}

export default HomeScreen;