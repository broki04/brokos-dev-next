export default function AvailabilityBadge() {
  return (
    <div className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
      <span className="text-brand-muted text-sm">Otwarty na nowe projekty</span>
    </div>
  );
}
