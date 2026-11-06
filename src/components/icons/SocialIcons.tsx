import type { SVGProps } from 'react';

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function TelegramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.94 4.27a1.36 1.36 0 0 0-1.37-.21L3.24 10.8a1.17 1.17 0 0 0 .05 2.18l4.38 1.35 1.7 5.32a1.13 1.13 0 0 0 1.8.49l2.49-2.02 4.42 3.27a1.34 1.34 0 0 0 2.11-.83l3.05-14.5a1.36 1.36 0 0 0-.3-1.29zM9.18 13.45l8.12-5.06c.15-.1.34.08.22.22l-6.7 6.3a.94.94 0 0 0-.29.56l-.16 1.18c-.02.14-.22.17-.28.04l-.62-1.45a.86.86 0 0 1 .35-1.05z" />
    </svg>
  );
}

export function VkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.79 17.27c-5.75 0-9.03-3.94-9.17-10.5h2.88c.09 4.82 2.21 6.86 3.89 7.28V6.77h2.72v4.16c1.66-.18 3.4-2.07 3.99-4.16h2.72c-.45 2.55-2.34 4.44-3.68 5.22 1.34.63 3.5 2.28 4.32 5.28h-2.99c-.63-1.98-2.21-3.51-4.36-3.72v3.72z" />
    </svg>
  );
}

export function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.6 5.82a4.28 4.28 0 0 1-1.09-2.82h-3.06v12.4a2.6 2.6 0 0 1-2.6 2.51 2.6 2.6 0 0 1-2.6-2.6 2.6 2.6 0 0 1 2.6-2.6c.28 0 .56.05.82.13v-3.1a5.67 5.67 0 0 0-.82-.06A5.65 5.65 0 0 0 4.2 15.3a5.65 5.65 0 0 0 5.65 5.65 5.65 5.65 0 0 0 5.65-5.65V9.01a7.34 7.34 0 0 0 4.3 1.38V7.33a4.28 4.28 0 0 1-3.2-1.51z" />
    </svg>
  );
}
