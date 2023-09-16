export default function Loading() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-amber-400"></div>
      <p className="mt-4 text-xl font-semibold text-amber-400">Loading...</p>
    </div>
  )
}