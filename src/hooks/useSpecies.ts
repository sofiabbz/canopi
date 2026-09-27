import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { Species } from '../types/database';

/* busca espécies de um bioma filtradas por tipo */
export function useSpeciesByBiome(biome: string | undefined, type: 'fauna' | 'flora') {
  const [species, setSpecies] = useState<Species[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!biome) { setLoading(false); return; }

    supabase
      .from('species')
      .select('*')
      .eq('biome', biome)
      .eq('type', type)
      .then(({ data }) => {
        if (data) setSpecies(data);
        setLoading(false);
      });
  }, [biome, type]);

  return { species, loading };
}

/* busca uma espécie pelo id */
export function useSpeciesById(id: string | undefined) {
  const [species, setSpecies] = useState<Species | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) { setLoading(false); return; }

    supabase
      .from('species')
      .select('*')
      .eq('id', id)
      .single()
      .then(({ data }) => {
        setSpecies(data);
        setLoading(false);
      });
  }, [id]);

  return { species, loading };
}
