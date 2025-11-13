# Hybrid Widget - Chat & Voice Integration

A floating widget that combines Botpress webchat and ElevenLabs voice agent in a single embeddable component.

## Features

- 💬 **Chat Mode**: Botpress webchat integration
- 🎙️ **Voice Mode**: ElevenLabs voice agent integration
- 🎨 **Beautiful UI**: Modern, responsive design with smooth animations
- 📦 **Single Bundle**: Compiles to a single JavaScript file for easy embedding
- 🔄 **Dynamic Loading**: Scripts are loaded on-demand to minimize initial load time

## Quick Start

### Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to the URL shown in the terminal (typically http://localhost:5173)

### Build for Production

Build the widget into a single embeddable file:

```bash
npm run build
```

This creates `dist/widget.js` - a single JavaScript file containing everything needed.

### Testing the Build

After building, open `example.html` in your browser to test the widget:

```bash
npm run preview
```

Or simply open `example.html` directly in a browser.

## Embedding on Your Website

To add the widget to any website, include this single line:

```html
<script src="widget.js" defer></script>
```

That's it! The widget will automatically:
- Create a floating button in the bottom-right corner
- Load chat/voice scripts dynamically when needed
- Handle all styling and interactions

## Customization

### Changing Colors

Edit `src/components/HybridWidget.css` to customize:
- Button gradient colors
- Widget header colors
- Border radius and shadows

### Changing Position

Modify the `.hybrid-widget-button` and `.hybrid-widget-container` CSS classes to adjust positioning.

### Changing Integrations

Edit the script URLs in:
- `src/components/BotpressChat.tsx` - for chat integration
- `src/components/ElevenLabsVoice.tsx` - for voice integration

## Technical Details

- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Bundle Format**: IIFE (Immediately Invoked Function Expression)
- **Output**: Single JS file with inlined CSS

## Project Structure

```
Chat-Embed/
├── src/
│   ├── components/
│   │   ├── HybridWidget.tsx      # Main widget component
│   │   ├── HybridWidget.css      # Widget styles
│   │   ├── BotpressChat.tsx      # Chat integration
│   │   └── ElevenLabsVoice.tsx   # Voice integration
│   ├── utils/
│   │   └── scriptLoader.ts       # Dynamic script loading utility
│   └── main.tsx                  # Entry point
├── dist/                         # Build output (generated)
├── example.html                  # Example integration
├── index.html                    # Development HTML
├── vite.config.ts               # Vite configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies and scripts
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2020+ support required
- No IE11 support

## License

MIT
