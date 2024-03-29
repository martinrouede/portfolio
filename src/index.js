import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/fonts.css';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(<App />);
