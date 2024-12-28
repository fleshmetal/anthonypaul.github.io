import { createClient } from "$lib/prismicio";


// export const prerender = 'auto';
export const prerender = true;


export async function load() {
    const client = createClient()

    const settings = await client.getSingle('settings');

    return {
        settings
    };
}