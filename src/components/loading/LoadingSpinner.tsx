export default function LoadingSpinner() {
  return (
    <div className="flex min-h-[400px] items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
        <p className="text-muted-foreground text-sm">Loading...</p>
      </div>
    </div>
  );
}
