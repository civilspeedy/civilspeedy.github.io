import {
    LocationProvider,
    Router,
    Route,
    hydrate,
    prerender as ssr,
} from 'preact-iso';

import { NotFound } from './pages/_404.jsx';
import './style.css';
import Home from './pages/Home.js';
import { signal } from '@preact/signals';
import SoftwareEngineeringPage from './pages/SE.js';

export const Theme = signal(false);

/**
 * Returns 'black' if Theme true, 'white' if false
 */
export const bgColour = Theme.value ? 'black' : 'white';

/**
 * Returns 'white' if Theme true, 'black' if false
 */
export const invBgColour = Theme.value ? 'white' : 'black';

export function App() {
    document.body.style.backgroundColor = Theme.value ? 'white' : 'black';
    document.body.style.color = Theme.value ? 'black' : 'white';

    return (
        <LocationProvider>
            <main>
                <Router>
                    <Route path='/' component={Home} />
                    <Route
                        path='/SE'
                        component={SoftwareEngineeringPage} // something going wrong
                    />
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
