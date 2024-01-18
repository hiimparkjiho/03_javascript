import React from 'react';
import "./header.css"

function Header() {
  return (
    <div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Project</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;