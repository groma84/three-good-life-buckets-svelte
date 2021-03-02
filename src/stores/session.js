import { derived } from 'svelte/store';
import { supabase } from './supabase';

export const session = derived(supabase, ($supabase, set) => {
    $supabase.auth.onAuthStateChange((event, session) => {
        console.log(event, session);
    
        set(session);
      });
}, null);