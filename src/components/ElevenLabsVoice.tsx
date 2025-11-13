import { useEffect, useState } from 'react';
import { loadScript } from '../utils/scriptLoader';

const ELEVENLABS_SCRIPT = 'https://ai.servquik.com/scripts/bots/buchanan-insurance/voice.js';
const AGENT_ID = 'agent_2901k8keh3e6edhr65t7d2yc5pzd';

// Declare the custom element type
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'servquik-voice-chat': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { 'agent-id': string },
        HTMLElement
      >;
    }
  }
}

export const ElevenLabsVoice = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const loadElevenLabs = async () => {
      try {
        await loadScript(ELEVENLABS_SCRIPT, { async: true, type: 'text/javascript' });

        if (mounted) {
          setIsLoaded(true);
        }
      } catch (err) {
        if (mounted) {
          setError('Failed to load voice agent');
          console.error('ElevenLabs load error:', err);
        }
      }
    };

    loadElevenLabs();

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
        Loading voice agent...
      </div>
    );
  }

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <servquik-voice-chat agent-id={AGENT_ID} />
    </div>
  );
};
