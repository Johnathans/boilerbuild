// app/components/ClientLayout.tsx
"use client";

import BootstrapClient from './BootstrapClient';
import Footer from './Footer';
import Navbar from './Navbar';

interface ClientLayoutProps {
    children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
    return (
        <>
            <BootstrapClient />
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
}