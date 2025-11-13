import { useState } from 'react';
import { BotpressChat } from './BotpressChat';
import { ElevenLabsVoice } from './ElevenLabsVoice';

type Mode = 'chat' | 'voice';

export const HybridWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<Mode>('chat');

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  const closeWidget = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating button */}
      {!isOpen && (
        <button
          className="hybrid-widget-button"
          onClick={toggleWidget}
          aria-label="Open chat"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z" fill="currentColor"/>
          </svg>
        </button>
      )}

      {/* Widget panel */}
      {isOpen && (
        <div className="hybrid-widget-container">
          {/* Header */}
          <div className="hybrid-widget-header">
            <div className="hybrid-widget-tabs">
              <button
                className={`hybrid-widget-tab ${mode === 'chat' ? 'active' : ''}`}
                onClick={() => setMode('chat')}
              >
                Chat
              </button>
              <button
                className={`hybrid-widget-tab ${mode === 'voice' ? 'active' : ''}`}
                onClick={() => setMode('voice')}
              >
                Voice
              </button>
            </div>
            <button
              className="hybrid-widget-close"
              onClick={closeWidget}
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="hybrid-widget-content">
            {mode === 'chat' ? <BotpressChat /> : <ElevenLabsVoice />}
          </div>
        </div>
      )}
    </>
  );
};
