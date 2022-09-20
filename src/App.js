import './App.css';
import CardManager from './components/CardManager';
import Header from './components/Header';

function App() {

  let cardArr = [
    { key: '1', png: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Chess_kdt45.svg/1280px-Chess_kdt45.svg.png', clickedOn: false },
    { key: '2', png: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Chess_qdt45.svg/1280px-Chess_qdt45.svg.png', clickedOn: false },
    { key: '3', png: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Chess_rdt45.svg/1280px-Chess_rdt45.svg.png', clickedOn: false },
    { key: '4', png: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Chess_bdt45.svg/1280px-Chess_bdt45.svg.png', clickedOn: false },
    { key: '5', png: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Chess_ndt45.svg/1280px-Chess_ndt45.svg.png', clickedOn: false },
    { key: '6', png: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/1280px-Chess_pdt45.svg.png', clickedOn: false },
  ];

  return (
    <div className="App">
      <Header></Header>
      <CardManager cards={cardArr}></CardManager>
    </div>
  );
}

export default App;
