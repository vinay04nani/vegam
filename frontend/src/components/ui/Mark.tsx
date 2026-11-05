/** Speech-bubble tail with a sound wave: chat and voice, in one colour. */
export function Mark({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true" className={className}>
      <path
        d="M7 6.5h13.2A3.3 3.3 0 0 1 23.5 9.8v7.4a3.3 3.3 0 0 1-3.3 3.3H13l-4.2 3.6v-3.6H7A3.3 3.3 0 0 1 3.7 17.2V9.8A3.3 3.3 0 0 1 7 6.5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M8.2 14.2c.7-1.5 1.5-1.5 2.2 0s1.5 1.5 2.2 0 1.5-1.5 2.2 0 1.5 1.5 2.2 0"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}
