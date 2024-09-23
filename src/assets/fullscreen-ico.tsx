export default function FullScreenIco({
  width = 24,
  height = 24,
  fillColor = "#ffffff",
}: {
  width?: number;
  height?: number;
  fillColor?: string;
}) {
  return (
    <svg
    width = {width}
    height = {height}
    viewBox="0 0 64.00 64.00"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke={fillColor}
    stroke-width="3.2"><g
    id="SVGRepo_bgCarrier"
    stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><polyline points="36 48 48 48 48 36"></polyline><polyline points="28 16 16 16 16 28"></polyline><rect x="8" y="8" width="48" height="48"></rect><line x1="16" y1="16" x2="28" y2="28"></line><line x1="48" y1="48" x2="36" y2="36"></line></g></svg>
  );
}
