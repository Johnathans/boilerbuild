"use client";

import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

// Import the listings data from the [id] page
// In a real application, this would come from a shared data source or API
const listings = [
  {
    id: 1,
    name: "Next.js Starter",
    description:
      "A minimal starter template with Next.js, TypeScript, and Tailwind CSS for building modern web applications. Optimized for SaaS projects.",
    image: "https://via.placeholder.com/800x300",
    popularity: 2,
    category: "Next.js",
  },
  {
    id: 2,
    name: "React Dashboard",
    description:
      "A fully responsive admin dashboard template built with React and Styled Components with dark/light theme support.",
    image: "https://via.placeholder.com/800x300",
    popularity: 3,
    category: "React",
  },
  {
    id: 3,
    name: "Next.js Pro",
    description:
      "A comprehensive Next.js boilerplate designed for high-scale SaaS applications.",
    image: "https://via.placeholder.com/800x300",
    popularity: 4,
    category: "Next.js",
  },
  {
    id: 4,
    name: "Next.js Advanced",
    description:
      "An advanced Next.js boilerplate that includes integrated authentication, payment processing, and more.",
    image: "",
    popularity: 3,
    category: "Next.js",
  },
  {
    id: 5,
    name: "Next.js Ultimate",
    description:
      "The ultimate Next.js boilerplate featuring full-stack integrations and performance optimizations for SaaS applications.",
    image: "https://via.placeholder.com/800x300",
    popularity: 5,
    category: "Next.js",
  },
];

function ListingsContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  // Filter listings by category if one is specified
  const filteredListings = category
    ? listings.filter((l) => l.category === category)
    : listings;

  return (
    <div className="container px-4 py-5">
      {/* Breadcrumbs */}
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/" className="fw-bold text-dark">
              Home
            </Link>
          </li>
          <li
            className="breadcrumb-item active fw-bold"
            aria-current="page"
            style={{ color: "#00d084" }}
          >
            {category ? `${category} Listings` : "All Listings"}
          </li>
        </ol>
      </nav>

      {/* Listings Grid */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {filteredListings.map((listing) => (
          <div key={listing.id} className="col">
            <div className="card h-100 shadow-sm border-0">
              <div style={{ 
                position: 'relative',
                height: '200px',
                backgroundColor: listing.category === 'Next.js' ? '#000' : '#fff'
              }}>
                <Image
                  src={listing.image || "https://via.placeholder.com/800x300?text=Placeholder+Image"}
                  alt={listing.name}
                  fill
                  style={{
                    objectFit: 'contain',
                    padding: '2rem'
                  }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{listing.name}</h5>
                <p className="card-text">{listing.description}</p>
                <Link
                  href={`/listing/${listing.id}`}
                  className="btn btn-primary"
                  style={{ backgroundColor: "#00d084", borderColor: "#00d084" }}
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ListingsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ListingsContent />
    </Suspense>
  );
}
