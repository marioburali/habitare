export function Stats({ value, label }: { value: number; label: string }) {
  return (
    <div className="h-full bg-emerald-50 p-6 rounded-2xl border border-emerald-200 shadow-sm">
      <div className="text-sm text-emerald-700">{label}</div>
      <div className="mt-2 text-3xl md:text-4xl font-extrabold text-emerald-700">{value}</div>
    </div>
  )
}
