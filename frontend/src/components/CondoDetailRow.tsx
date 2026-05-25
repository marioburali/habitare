export function CondoDetailRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-emerald-200 bg-white px-4 py-3">
      <dt className="text-xs font-semibold uppercase text-emerald-700">
        {label}
      </dt>
      <dd className="mt-1 text-sm font-medium text-emerald-950">{value}</dd>
    </div>
  );
}
