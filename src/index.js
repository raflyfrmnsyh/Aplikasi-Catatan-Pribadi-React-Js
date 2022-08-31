import React from 'react';
import { createRoot } from 'react-dom/client';
import NoteApps from './NoteApps';

import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<NoteApps/>);