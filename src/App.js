import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Hello from './component/Hello';
import styled from "styled-components";
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import EmptyPage from './component/EmptyPage';

const Background = styled.div`
  background-color: #e6e6fa;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Background>
        <Hello age={10} />
        <Hello age={20} />
        <Hello age={30} />
      </Background> */}
        <Header />
        <Routes>
          <Route exact path='/' element={<DayList />} />
          <Route path='/day/:day' element={<Day />} />
          {/* <Route element={<EmptyPage />}>잘못된</Route> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
