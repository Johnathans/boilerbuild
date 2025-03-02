// app/components/ClientLayout.tsx
"use client"

import { useState } from 'react';
import Navbar from './Navbar';

export default function ClientLayout({ children }) {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <>
            <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            {children}
        </>
    );
}