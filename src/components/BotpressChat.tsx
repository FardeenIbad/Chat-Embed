import { useEffect, useState } from 'react';
import { loadScript } from '../utils/scriptLoader';

const BOTPRESS_SCRIPTS = [
  'https://ai.servquik.com/scripts/bots/buchanan-insurance/inject.js',
  'https://ai.servquik.com/scripts/bots/buchanan-insurance/buchanan.js'
];

export const BotpressChat = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const loadBotpress = async () => {
      try {
        // Load scripts sequentially
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
    <div style={{ width: '100%', height: '100%' }}>
      {/* Botpress will inject itself into the page */}
    </div>
  );
};
