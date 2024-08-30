import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Projects from './projects';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="App flex flex-dir-col item-center">
      <header className="App-header flex flex-dir-row justify-con-sb">
        <a href='./cv.pdf' target='_blank'>
          <span>Download CV</span>
        </a>
        <div>
          <button onClick={toggleDarkMode}>
            {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </div>
      </header>

      <div>
        <section className='flex flex-dir-col'>
          <img src={logo} className="App-logo" alt="logo" />
          <div className='flex flex-dir-col item-center'>
            <div>
              <span>Nitzan Selwyn</span>
            </div>
            <div className='flex flex-dir-row justify-con-center col-gap-7'>

              <div className={`flex flex-dir-row item-center col-gab-2 ${isDarkMode ? 'dark-mode-svg' : 'light-mode-svg'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
                  <path
                    d="M4.615 20q-.69 0-1.152-.462Q3 19.075 3 18.385v-9.77q0-.69.463-1.152Q3.925 7 4.615 7H9V5.615q0-.69.463-1.152Q9.925 4 10.615 4h2.77q.69 0 1.153.463q.462.462.462 1.152V7h4.385q.69 0 1.152.463q.463.462.463 1.152v9.77q0 .69-.462 1.152q-.463.463-1.153.463zm0-1h14.77q.23 0 .423-.192q.192-.193.192-.423v-9.77q0-.23-.192-.423Q19.615 8 19.385 8H4.615q-.23 0-.423.192Q4 8.385 4 8.615v9.77q0 .23.192.423q.193.192.423.192M10 7h4V5.615q0-.23-.192-.423Q13.615 5 13.385 5h-2.77q-.23 0-.423.192q-.192.193-.192.423zM4 19V8z"></path>
                </svg>
                <span>Web Developer</span>
              </div>

              <div className={`flex flex-dir-row item-center col-gab-2 ${isDarkMode ? 'dark-mode-svg' : 'light-mode-svg'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
                  <path
                    d="M12.003 11.73q.668 0 1.14-.475q.472-.475.472-1.143t-.475-1.14q-.476-.472-1.143-.472t-1.14.476q-.472.475-.472 1.143t.475 1.14q.476.472 1.143.472M12 19.677q2.82-2.454 4.458-4.991q1.638-2.538 1.638-4.39q0-2.744-1.737-4.53T12 3.981q-2.621 0-4.359 1.785t-1.737 4.53q0 1.852 1.638 4.39q1.639 2.537 4.458 4.99m0 1.343q-3.525-3.117-5.31-5.814q-1.786-2.697-1.786-4.909q0-3.173 2.066-5.234Q9.037 3 12 3t5.03 2.062q2.066 2.061 2.066 5.234q0 2.212-1.785 4.909q-1.786 2.697-5.311 5.814m0-10.904"></path>
                </svg>
                <span>Tel Aviv</span>
              </div>

              <a className={`flex flex-dir-row item-center col-gab-2 ${isDarkMode ? 'dark-mode-svg' : 'light-mode-svg'}`} href='https://www.linkedin.com/in/nitzanselwyn/' target='_blank'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="h-5 w-5 text-foreground/75">
                  <path
                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"></path>
                </svg>
                <span>Linkedin</span>
              </a>

              <a className={`flex flex-dir-row item-center col-gab-2 ${isDarkMode ? 'dark-mode-svg' : 'light-mode-svg'}`} href='https://github.com/nitzanselwyn/' target='_blank'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" className="h-7 w-6">
                  <path
                    d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"></path>
                </svg>
                <span>My Github</span>
              </a>

            </div>

          </div>
        </section>

        <section>
          <Projects />
        </section>

      </div>

      <footer className='footer-continer'>
        <div>
          <div>
            <span>
              Thank you for visiting my portfolio
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
