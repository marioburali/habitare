import { useEffect, useMemo, useState } from 'react';
import { getCondos } from '../services/condos';
import type { Condo } from '../types/condo';
import { Header } from '../components/Header';
import { Stats } from '../components/Stats';
import { CondoList } from '../components/CondoList';
import { CondoDetailsModal } from '../components/CondoDetailsModal';
import { sortCondos, type CondoSortOption } from '../utils/sortCondos';
import { CondoToolbar } from '../components/CondoToolbar';
import { filterCondos } from '../utils/filterCondos';
import type { CondoSizeFilter } from '../types/condo';

export function HomePage() {
  const [condos, setCondos] = useState<Condo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sizeFilter, setSizeFilter] = useState<CondoSizeFilter>('all');
  const [selectedCondo, setSelectedCondo] = useState<Condo | null>(null);
  const [sortBy, setSortBy] = useState<CondoSortOption>({
    field: 'name',
    direction: 'asc',
  });

  useEffect(() => {
    let active = true;

    async function loadCondos() {
      try {
        setLoading(true);
        setError(null);

        const data = await getCondos();

        if (active) {
          setCondos(data);
        }
      } catch {
        if (active) {
          setError('Não foi possível carregar os condomínios.');
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadCondos();

    return () => {
      active = false;
    };
  }, []);

  const filteredCondos = useMemo(
    () => filterCondos(condos, searchQuery, sizeFilter),
    [condos, searchQuery, sizeFilter],
  );
  const totalResidents = filteredCondos.reduce((s, c) => s + c.residents, 0);

  const sortedCondos = useMemo(
    () => sortCondos(filteredCondos, sortBy),
    [filteredCondos, sortBy],
  );

  return (
    <main className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto p-6 space-y-6">
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          <div className="md:col-span-2 md:h-full">
            <Header
              title="Painel de gestão de condomínios"
              subtitle="Controle seus condomínios de forma eficiente."
            />
          </div>

          <section
            className="flex flex-col gap-4 md:h-full"
            aria-labelledby="summary-heading"
          >
            <h2 id="summary-heading" className="sr-only">
              Resumo dos condomínios
            </h2>
            <div className="md:flex-1">
              <Stats value={filteredCondos.length} label="Total de Condomínios" />
            </div>
            <div className="md:flex-1">
              <Stats value={totalResidents} label="Total de Residentes" />
            </div>
          </section>
        </div>

        <section aria-labelledby="condo-list-heading">
          <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-200">
            <h2 id="condo-list-heading" className="sr-only">
              Lista de condomínios
            </h2>

            {loading ? (
              <div
                className="flex items-center justify-center gap-3 rounded-xl border border-emerald-200 bg-emerald-100/70 px-4 py-5 text-emerald-800"
                role="status"
                aria-live="polite"
              >
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-emerald-300 border-t-emerald-700" />
                <p className="text-sm font-medium">Carregando condomínios...</p>
              </div>
            ) : null}

            {error ? (
              <div
                className="mb-4 rounded-xl border border-emerald-300 bg-emerald-100 px-4 py-3 text-emerald-900 shadow-sm"
                role="alert"
                aria-live="assertive"
              >
                <p className="text-sm font-medium">{error}</p>
              </div>
            ) : null}

            {!loading && !error ? (
              <div className="space-y-4">
                <CondoToolbar
                  search={searchQuery}
                  onSearchChange={setSearchQuery}
                  sizeFilter={sizeFilter}
                  onSizeFilterChange={setSizeFilter}
                  sortBy={sortBy}
                  onSortChange={setSortBy}
                />

                {sortedCondos.length > 0 ? (
                  <CondoList
                    condos={sortedCondos}
                    onSelectCondo={setSelectedCondo}
                  />
                ) : (
                  <div className="rounded-xl border border-emerald-200 bg-white px-4 py-5 text-sm text-emerald-800">
                    Nenhum condomínio encontrado para a busca atual.
                  </div>
                )}
              </div>
            ) : null}
          </div>
        </section>
      </div>

      {selectedCondo ? (
        <CondoDetailsModal
          condo={selectedCondo}
          onClose={() => setSelectedCondo(null)}
        />
      ) : null}
    </main>
  );
}
