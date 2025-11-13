/**
 * Dynamically loads an external script
 */
export const loadScript = (src: string, options: { defer?: boolean; async?: boolean; type?: string } = {}): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Check if script already exists
    const existingScript = document.querySelector(`script[src="${src}"]`);
    if (existingScript) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = src;

    if (options.defer) script.defer = true;
    if (options.async) script.async = true;
    if (options.type) script.type = options.type;

    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));

    document.head.appendChild(script);
  });
};

/**
 * Removes a script from the DOM
 */
export const unloadScript = (src: string): void => {
  const script = document.querySelector(`script[src="${src}"]`);
  if (script) {
    script.remove();
  }
};
