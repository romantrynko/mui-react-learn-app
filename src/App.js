import './App.css';
import Home from './pages/Home';
import SearchAppBar from './components/AppBar';
import theme from './theme/theme';
import { ThemeProvider } from '@emotion/react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tour from './pages/Tour';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <SearchAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Tour />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
