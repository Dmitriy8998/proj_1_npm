import logo from './logo.svg'; //файл скартинкой
import './App.css'; //файл со стилями

//заголовочный тег будет содержать начальный стиль экрана и его цвет
//тег button пишится внутри тега header для того, чтобы сохранить цвет экрана
function App() {
  return(
    <div className='App'>
      <header className='Header'> 
        <h1 className='text_Hello_World'>Hello World</h1>
        <div className='panel_button'>
          <button className='button_red'>RED</button>
          <button className='button_orange'>ORANGE</button>
          <button className='button_yellow'>YELLOW</button>
          <button className='button_green'>GREEN</button>
          <button className='button_lightblue'>LIGHTBLUE</button>
          <button className='button_blue'>BLUE</button>
          <button className='button_purpul'>PURPUL</button>
        </div>
        <div className='Yandex_Wrapper'>
          <div className='Yandex_Text'>
            <h1 className='Yandex_Y'>Y</h1>
            <h1 className='Yandex_andex'>andex</h1>
          </div>
          <div className='search'>
            <input type='search' placeholder='text'></input>
          </div>
          <div className='wrapper_button_search'>
            <button className='button_search'>search</button>
          </div>
        </div>
        <div className='react_picture'>
          <img src={logo} className='picture'></img>
        </div>    
      </header>
    </div>
  );
}

export default App;