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
import VideoProductionPage from './pages/VP.js';

export const Theme = signal(false); //no longer working

export function App() {
    document.body.style.backgroundColor = Theme.value ? 'white' : 'black';
    document.body.style.color = Theme.value ? 'black' : 'white';

    return (
        <LocationProvider>
            <main>
                <Router>
                    <Route path='/' component={Home} />
                    <Route path='/SE' component={SoftwareEngineeringPage} />
                    <Route path='/VP' component={VideoProductionPage} />
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