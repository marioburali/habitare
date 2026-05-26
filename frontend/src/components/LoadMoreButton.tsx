export function LoadMoreButton({
  visibleCount,
  totalCount,
  onLoadMore,
}: {
  visibleCount: number;
  totalCount: number;
  onLoadMore: () => void;
}) {
  return (
    <div className="flex flex-col items-center gap-3 pt-2">
      <p className="text-sm font-medium text-emerald-700">
        Exibindo {visibleCount.toLocaleString('pt-BR')} de{' '}
        {totalCount.toLocaleString('pt-BR')} condomínios
      </p>

      <button
        type="button"
        onClick={onLoadMore}
        className="rounded-full border border-emerald-300 bg-white px-5 py-2 text-sm font-semibold text-emerald-800 shadow-sm transition hover:bg-emerald-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-50 cursor-pointer"
      >
        Carregar mais
      </button>
    </div>
  );
}
