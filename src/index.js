import React from 'react';
import { createRoot } from 'react-dom/client';
import NoteCard from './components/NoteCard';

// import style
// import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <NoteCard />
);