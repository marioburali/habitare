import { useEffect, useState } from 'react';
import { getCondos } from '../services/condos';
import type { Condo } from '../types/condo';
import { Header } from '../components/Header';
import { Stats } from '../components/Stats';
import { CondoList } from '../components/CondoList';

export function HomePage() {
  const [condos, setCondos] = useState<Condo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  const totalResidents = condos.reduce((s, c) => s + c.residents, 0);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto p-6 space-y-6">
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          <div className="md:col-span-2 md:h-full">
            <Header
              title="Painel de gestão de condomínios"
              subtitle="Controle seus condomínios de forma eficiente."
            />
          </div>

          <div className="flex flex-col gap-4 md:h-full">
            <div className="md:flex-1">
              <Stats value={condos.length} label="Total de Condomínios" />
            </div>
            <div className="md:flex-1">
              <Stats value={totalResidents} label="Total de Residentes" />
            </div>
          </div>
        </div>

        <div>
          <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-200">
            {loading ? (
              <div className="flex items-center justify-center gap-3 rounded-xl border border-emerald-200 bg-emerald-100/70 px-4 py-5 text-emerald-800">
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

            {!loading && !error ? <CondoList condos={condos} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
