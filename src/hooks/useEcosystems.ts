import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { Ecosystem } from '../types/database';

/* busca ecossistemas de um bioma */
export function useEcosystemsByBiome(biome: string | undefined) {
  const [ecosystems, setEcosystems] = useState<Ecosystem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!biome) { setLoading(false); return; }

    supabase
      .from('ecosystems')
      .select('*')
      .eq('biome', biome)
      .then(({ data }) => {
        if (data) setEcosystems(data);
        setLoading(false);
      });
  }, [biome]);

  return { ecosystems, loading };
}

/* busca um ecossistema pelo id */
export function useEcosystemById(id: string | undefined) {
  const [ecosystem, setEcosystem] = useState<Ecosystem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) { setLoading(false); return; }

    supabase
      .from('ecosystems')
      .select('*')
      .eq('id', id)
      .single()
      .then(({ data }) => {
        setEcosystem(data);
        setLoading(false);
      });
  }, [id]);

  return { ecosystem, loading };
}
