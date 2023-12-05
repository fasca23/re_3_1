import './App.css';
import Stars from './components/Stars'

function App() {
// Для проверки добавляем в массив всякое
  const n = [ ...Array(13).keys() ].map( i => i-3);
  n.push('Какая-то строка')
  n.reverse()
  return (
    <div className="container">
      <div className="background-element"></div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        {n.map((itemN) => (
          <Stars count={itemN}/>  
        ))}
      </div>
    </div>
  );
}

export default App;