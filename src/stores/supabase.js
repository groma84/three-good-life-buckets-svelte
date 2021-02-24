import { readable } from 'svelte/store';
import { createClient } from '@supabase/supabase-js'

export const supabaseStore = readable(undefined, function start(set) {
	const options = { }
    const supabase = createClient("https://esharnypcauxnoqqttsj.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNDE0NTk5OSwiZXhwIjoxOTI5NzIxOTk5fQ.T7Esw85b3idpoiv036-Q-c1-MEi_2vvezXA-GY7mKiU", options)

    set(supabase);

	return function stop() {
	};
});