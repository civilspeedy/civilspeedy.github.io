import {
    LocationProvider,
    Router,
    Route,
    hydrate,
    prerender as ssr,
} from 'preact-iso';

import { NotFound } from './pages/_404.jsx';
import './style.css';
import Home from './pages/Home/Home.js';
import { signal } from '@preact/signals';

export const Theme = signal(false);

export function App() {
    document.body.style.backgroundColor = Theme.value ? 'white' : 'black';
    document.body.style.color = Theme.value ? 'black' : 'white';

    return (
        <LocationProvider>
            <main>
                <Router>
                    <Route path='/' component={Home} />
                    <Route default component={NotFound} />
                </Router>
            </main>
        </LocationProvider>
    );
}

if (typeof window !== 'undefined') {
    hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
    return await ssr(<App {...data} />);
}
