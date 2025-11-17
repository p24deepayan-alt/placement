
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Content from './components/Content';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Content />
      </main>
    </div>
  );
};

export default App;
