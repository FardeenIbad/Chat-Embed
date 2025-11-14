import { useEffect, useState } from 'react';
import { loadScript } from '../utils/scriptLoader';

const BOTPRESS_SCRIPTS = [
  'https://cdn.botpress.cloud/webchat/v3.3/inject.js',
  'https://files.bpcontent.cloud/2025/09/12/17/20250912171025-3Y04F6R3.js'
];

export const BotpressChat = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const loadBotpress = async () => {
      try {
        // Load scripts sequentially - each script is only loaded once by loadScript utility
        for (const src of BOTPRESS_SCRIPTS) {
          await loadScript(src, { defer: true });
        }

        if (mounted) {
          setIsLoaded(true);
        }
      } catch (err) {
        if (mounted) {
          setError('Failed to load Botpress chat');
          console.error('Botpress load error:', err);
        }
      }
    };

    loadBotpress();

    return () => {
      mounted = false;
    };
  }, []);

  if (error) {
    return (
      <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
        {error}
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
        Loading chat...
      </div>
    );
  }

  return (
    <div id="chat-container" className="chat-container">
      {/* Botpress will render inside this container */}
    </div>
  );
};
