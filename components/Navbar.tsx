// app/components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";

interface NavbarProps {
    searchQuery?: string;
    setSearchQuery?: (query: string) => void;
}

export default function Navbar({ searchQuery, setSearchQuery }: NavbarProps) {
    const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery || "");

    return (
        <header className="bg-white border-bottom">
            <div className="container-fluid px-4">
                <div className="d-flex justify-content-between align-items-center" style={{ height: "72px" }}>
                    {/* Logo Section */}
                    <div className="d-flex align-items-center">
                        <Link href="/" className="text-decoration-none">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="300"
                                height="60"
                                viewBox="0 0 250 50"
                            >
                                <image
                                    href="/logo.svg"
                                    x="0"
                                    y="5"
                                    width="36"
                                    height="36"
                                    className="brand-filter"
                                />
                                <text
                                    x="42"
                                    y="25"
                                    fontFamily="Poppins, sans-serif"
                                    fontSize="33"
                                    fill="#000"
                                    dominantBaseline="middle"
                                >
                                    <tspan fontWeight="900">Boiler</tspan>
                                    <tspan fontWeight="300" dx="10">Build</tspan>
                                </text>
                            </svg>
                        </Link>
                    </div>
                    {/* Desktop Section */}
                    <div className="d-none d-md-flex align-items-center">
                        <div className="position-relative mx-4" style={{ width: "300px" }}>
                            <input
                                type="text"
                                placeholder="Search boilerplates..."
                                className="form-control ps-4"
                                value={searchQuery !== undefined ? searchQuery : localSearchQuery}
                                onChange={(e) => {
                                    if (setSearchQuery) {
                                        setSearchQuery(e.target.value);
                                    } else {
                                        setLocalSearchQuery(e.target.value);
                                    }
                                }}
                            />
                            <span
                                className="position-absolute"
                                style={{ left: "10px", top: "50%", transform: "translateY(-50%)" }}
                            >
                                <FontAwesomeIcon icon={faSearch} className="text-muted small" />
                            </span>
                        </div>
                        <Link href="/sponsor" className="btn btn-outline-brand me-4">
                            Become a Sponsor
                        </Link>
                        <Link href="/submit" className="btn btn-brand">
                            Submit a Boilerplate
                        </Link>
                    </div>
                    {/* Mobile Section */}
                    <div className="d-flex d-md-none">
                        <a href="#" className="text-brand me-3 d-flex align-items-center">
                            <FontAwesomeIcon icon={faSearch} />
                        </a>
                        <button
                            className="btn text-brand"
                            onClick={() => console.log("Mobile menu toggle would go here")}
                        >
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
