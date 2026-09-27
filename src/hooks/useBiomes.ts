import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { Biome } from '../types/database';

/* busca todos os biomas */
export function useBiomes() {
  const [biomes, setBiomes] = useState<Biome[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from('biomes')
      .select('*')
      .then(({ data }) => {
        if (data) setBiomes(data);
        setLoading(false);
      });
  }, []);

  return { biomes, loading };
}

/* busca um bioma pelo slug */
export function useBiome(slug: string | undefined) {
  const [biome, setBiome] = useState<Biome | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) { setLoading(false); return; }

    supabase
      .from('biomes')
      .select('*')
      .eq('slug', slug)
      .single()
      .then(({ data }) => {
        setBiome(data);
        setLoading(false);
      });
  }, [slug]);

  return { biome, loading };
}
