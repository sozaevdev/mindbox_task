import { createRoot } from 'react-dom/client';

import '@/app/styles/index.scss';
import App from './app/App';

const domNode = document.getElementById('root') as HTMLElement;
const root = createRoot(domNode);

root.render(<App />);
