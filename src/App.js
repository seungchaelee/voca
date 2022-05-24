import './App.css';
import Hello from './component/Hello';
import styled from "styled-components";

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
    <div className="App">
      <Background>
        <Hello />
      </Background>
    </div>
  );
}

export default App;
