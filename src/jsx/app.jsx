import React from 'react'

class Hoge extends React.Component {
  render() {
    return <div>ふが{this.props.param}</div>
  }
};

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Hoge param='1' />
        <Hoge param='2' />
        <Hoge param='3' />
      </div>
    );
  }
}