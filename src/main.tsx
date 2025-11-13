import React from 'react';
import ReactDOM from 'react-dom/client';
import { HybridWidget } from './components/HybridWidget';
import './components/HybridWidget.css';

// Create a container for the widget
const initWidget = () => {
  // Check if container already exists
  let container = document.getElementById('hybrid-widget-root');

  if (!container) {
    container = document.createElement('div');
    container.id = 'hybrid-widget-root';
    document.body.appendChild(container);
  }

  // Render the widget
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <HybridWidget />
    </React.StrictMode>
  );
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initWidget);
} else {
  initWidget();
}

// Export for potential external use
export { HybridWidget };
