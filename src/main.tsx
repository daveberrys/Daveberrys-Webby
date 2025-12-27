import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import MainPage from './TSX/MainPage.tsx';

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);

  root.render(
    <StrictMode>
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    </StrictMode>,
  );
} else {
  throw new Error("Could not find root element with ID 'root'");
}