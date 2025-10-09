// This file extends TypeScript's module declaration to understand common asset types.

// 1. Declare Module for SVG files
// When you import an SVG, Vite/Webpack treats it as a string URL.
declare module '*.svg' {
  const content: string;
  export default content;
}

// 2. Declare Modules for other image types (Optional, but recommended)
declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}
