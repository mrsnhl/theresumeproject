import React from 'react';
import Header from './views/Header';
import Table from './views/Table';
import Content from './views/Content';
import Footer from './views/Footer';
import style from './App.module.css';

function App() {

  const [zoom, setZoom] = React.useState(1);

  return (
    <div>
    <div className={style.body}
    style={{zoom: zoom}}>
      <Header />
      <Table />
      <Content />
      <Footer />
    </div>
    <div className={style.zoomButtons}>
    <button onClick={() => setZoom(z=>z*1.1)}>+</button>
      <button onClick={() => setZoom(z=>z*0.8)}>-</button>
      </div>
    </div>
  );
}

export default App;
