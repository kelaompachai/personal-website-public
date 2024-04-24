import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles';

const div = document.createElement('div');
document.querySelector('body').append(div);

const root = createRoot(div);
root.render(<App />);
