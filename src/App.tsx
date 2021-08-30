import React from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './Demo/Demo';

const App = () => {
  const callAPI = () => {
    setTimeout(() => {
      alert('hello');
    }, 500);

    // console.log(abc1);
  };
  const abc = { name: 'bao', age: 'abc' };
  const abc1 = 3;
  //   var myFavoriteColor = '#112C85';
  const hello = async (hello1: string) => {
    if (hello1 === 'abc') {
    }
    const x = await callAPI();
    return x;
  };

  // const array = [1, 3,]
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {abc.name}
        <p></p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
        <button
          type='submit'
          className='btn btn-danger'
          onClick={() => {
            alert('hello world');
          }}>
          Click
        </button>
        <Demo name='bao' />
      </header>
    </div>
  );
};

export default App;
