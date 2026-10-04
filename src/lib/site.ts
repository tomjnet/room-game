// Shared constants and a helper that prefixes public assets with the base
// path, so the site works at https://<owner>.github.io/<repo>/ as well as at /.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const asset = (path: string) => `${base}/${path.replace(/^\//, '')}`;

export const links = {
  play: 'https://tomjnet.itch.io/the-room-that-remembers',
  trailer: 'https://www.youtube.com/watch?v=oaJJ9T4YTi4&list=PLXlEyZGPL46M',
  trailerEmbed: 'https://www.youtube-nocookie.com/embed/oaJJ9T4YTi4?list=PLXlEyZGPL46M&rel=0&modestbranding=1&color=white',
};
