interface PawIconProps {
  className?: string;
}

export default function PawIcon({ className = '' }: PawIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 6.5C13.4 6.5 14.5 5.4 14.5 4S13.4 1.5 12 1.5 9.5 2.6 9.5 4 10.6 6.5 12 6.5ZM19 7C20.4 7 21.5 5.9 21.5 4.5S20.4 2 19 2 16.5 3.1 16.5 4.5 17.6 7 19 7ZM5 7C6.4 7 7.5 5.9 7.5 4.5S6.4 2 5 2 2.5 3.1 2.5 4.5 3.6 7 5 7ZM19 8.5C17.6 8.5 16.5 9.6 16.5 11S17.6 13.5 19 13.5 21.5 12.4 21.5 11 20.4 8.5 19 8.5ZM5 8.5C3.6 8.5 2.5 9.6 2.5 11S3.6 13.5 5 13.5 7.5 12.4 7.5 11 6.4 8.5 5 8.5ZM12 8C9.5 8 7 9.5 7 13.5C7 17.5 9.5 22 12 22S17 17.5 17 13.5C17 9.5 14.5 8 12 8Z"/>
    </svg>
  );
}
