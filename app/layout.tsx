// app/layout.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

// Import components with exact casing as shown in your directory
import BootstrapClient from '../components/BootstrapClient';
import ClientLayout from '../components/ClientLayout';

// Tell Font Awesome to skip adding CSS automatically
config.autoAddCss = false;

export const metadata = {
    title: 'BoilerBuild - Find the perfect development boilerplate',
    description: 'Directory of development boilerplates and starter kits',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
        <div className="d-flex flex-column min-vh-100">
            <BootstrapClient />
            <ClientLayout>
                {children}
            </ClientLayout>
        </div>
        </body>
        </html>
    );
}