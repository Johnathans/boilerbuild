// app/listing/[id]/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";

const defaultImage = "https://via.placeholder.com/800x300?text=Placeholder+Image";

// Dummy data – replace with your API or DB query.
const listings = [
    {
        id: 1,
        name: "Next.js Starter",
        description:
            "A minimal starter template with Next.js, TypeScript, and Tailwind CSS for building modern web applications. Optimized for SaaS projects.",
        image: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
        popularity: 2,
        financialStage: "Bootstrapped",
        companySize: "1-3",
        developer: "Jonathan Wilke",
        saasReady: true,
        changelog: true,
        documentation: true,
        support: true,
        updates: "Lifetime",
        price: "Free",
        category: "Next.js",
        website: "https://nextjsstarter.com",
    },
    {
        id: 2,
        name: "React Dashboard",
        description:
            "A fully responsive admin dashboard template built with React and Styled Components with dark/light theme support.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
        popularity: 3,
        financialStage: "Funded",
        companySize: "3-10",
        developer: "Jane Doe",
        saasReady: true,
        changelog: true,
        documentation: true,
        support: false,
        updates: "Monthly",
        price: "$49",
        category: "React",
        website: "https://reactdashboard.com",
    },
    {
        id: 3,
        name: "Next.js Pro",
        description:
            "A comprehensive Next.js boilerplate designed for high-scale SaaS applications.",
        image: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
        popularity: 4,
        financialStage: "Bootstrapped",
        companySize: "1-3",
        developer: "John Smith",
        saasReady: true,
        changelog: false,
        documentation: true,
        support: true,
        updates: "Lifetime",
        price: "$99",
        category: "Next.js",
        website: "https://nextjspro.com",
    },
    {
        id: 4,
        name: "Next.js Advanced",
        description:
            "An advanced Next.js boilerplate that includes integrated authentication, payment processing, and more.",
        image: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
        popularity: 3,
        financialStage: "Funded",
        companySize: "3-10",
        developer: "Alice Johnson",
        saasReady: true,
        changelog: true,
        documentation: true,
        support: true,
        updates: "Weekly",
        price: "$199",
        category: "Next.js",
        website: "https://nextjsadvanced.com",
    },
    {
        id: 5,
        name: "Next.js Ultimate",
        description:
            "The ultimate Next.js boilerplate featuring full-stack integrations and performance optimizations for SaaS applications.",
        image: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
        popularity: 5,
        financialStage: "Funded",
        companySize: "3-10",
        developer: "Samuel Lee",
        saasReady: true,
        changelog: true,
        documentation: true,
        support: true,
        updates: "Weekly",
        price: "$299",
        category: "Next.js",
        website: "https://nextjsultimate.com",
    },
];

// Helper: Render popularity as squares.
// For each square, if its index is less than the popularity value, use #3CB179; otherwise, use black (#000).
function renderPopularity(popularity: number) {
    const total = 5;
    const squares = [];
    for (let i = 0; i < total; i++) {
        squares.push(
            <span
                key={i}
                style={{
                    color: i < popularity ? "#3CB179" : "#000",
                    fontSize: "1.2rem",
                    display: "inline-block",
                    marginRight: "3px",
                }}
            >
                ◼
            </span>
        );
    }
    return squares;
}

export default function ListingPage() {
    const params = useParams();
    const id = params?.id;
    const listing = listings.find((l) => l.id.toString() === id);

    if (!listing) {
        notFound();
    }

    // Filter for related listings (same category, excluding current listing)
    const relatedListings = listings.filter(
        (l) => l.category === listing.category && l.id !== listing.id
    );

    return (
        <div className="container px-4 py-5">
            {/* Breadcrumbs */}
            <nav aria-label="breadcrumb" className="mb-4">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href="/" className="text-brand">
                            Home
                        </Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link href="/listing" className="text-brand">
                            Listings
                        </Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link
                            href={`/listing?category=${listing.category}`}
                            className="text-brand"
                        >
                            {listing.category}
                        </Link>
                    </li>
                    <li
                        className="breadcrumb-item active"
                        aria-current="page"
                    >
                        {listing.name}
                    </li>
                </ol>
            </nav>

            {/* Main Row */}
            <div className="row">
                {/* Left Column: Listing Details */}
                <div className="col-md-8">
                    <h1 className="display-4 mb-4 fw-bold">{listing.name}</h1>
                    <div 
                        style={{
                            position: 'relative',
                            width: '100%',
                            height: '300px',
                            backgroundColor: listing.category === "Next.js" ? "#000" : "#fff"
                        }}
                        className="rounded shadow-sm mb-4"
                    >
                        <Image
                            src={listing.image || defaultImage}
                            alt={listing.name}
                            fill
                            style={{
                                objectFit: "contain",
                                padding: "2rem"
                            }}
                        />
                    </div>
                    <p className="lead mb-4">{listing.description}</p>
                    
                    {/* Features Grid */}
                    <div className="row row-cols-2 g-4 mb-4">
                        <div className="col">
                            <div className="d-flex align-items-center">
                                <div className="me-3">
                                    <span className="badge bg-brand">Popularity</span>
                                </div>
                                <div>{renderPopularity(listing.popularity)}</div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="d-flex align-items-center">
                                <div className="me-3">
                                    <span className="badge bg-brand">Stage</span>
                                </div>
                                <div>{listing.financialStage}</div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="d-flex align-items-center">
                                <div className="me-3">
                                    <span className="badge bg-brand">Team Size</span>
                                </div>
                                <div>{listing.companySize}</div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="d-flex align-items-center">
                                <div className="me-3">
                                    <span className="badge bg-brand">Updates</span>
                                </div>
                                <div>{listing.updates}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Details Card */}
                <div className="col-md-4">
                    <div className="card shadow-sm border-0">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <h5 className="card-title mb-0 fw-bold">Details</h5>
                                <span className="badge bg-brand">{listing.price}</span>
                            </div>
                            <ul className="list-group list-group-flush mb-4">
                                <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                    <span>SaaS Ready</span>
                                    <span>{listing.saasReady ? "✓" : "✗"}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                    <span>Changelog</span>
                                    <span>{listing.changelog ? "✓" : "✗"}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                    <span>Documentation</span>
                                    <span>{listing.documentation ? "✓" : "✗"}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                    <span>Support</span>
                                    <span>{listing.support ? "✓" : "✗"}</span>
                                </li>
                            </ul>
                            <div className="d-grid gap-2">
                                <a
                                    href={listing.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn text-white w-100"
                                    style={{ backgroundColor: '#000' }}
                                >
                                    View Website
                                </a>
                                <button className="btn btn-outline-dark">
                                    Contact Developer
                                </button>
                            </div>
                        </div>
                        <div className="card-footer bg-light border-0">
                            <small className="text-muted">
                                Developer: <strong>{listing.developer}</strong>
                            </small>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Listings */}
            {relatedListings.length > 0 && (
                <div className="mt-5">
                    <h3 className="h4 fw-bold mb-4">Related Boilerplates</h3>
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        {relatedListings.map((related) => (
                            <div key={related.id} className="col">
                                <div className="card h-100 shadow-sm">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-start mb-3">
                                            <h5 className="card-title mb-0">{related.name}</h5>
                                            <span className="badge bg-brand">{related.price}</span>
                                        </div>
                                        <p className="card-text text-muted">{related.description}</p>
                                        <Link 
                                            href={`/listing/${related.id}`}
                                            className="btn btn-outline-brand w-100"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
