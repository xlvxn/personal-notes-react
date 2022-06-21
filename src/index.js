import React from 'react';
import { createRoot } from 'react-dom/client';
import MainPage from './components/Main';

// import style
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<MainPage />);