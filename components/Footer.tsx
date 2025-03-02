// app/components/Footer.tsx
"use client"

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="bg-white border-top py-5">
            <div className="container-fluid px-4">
                <div className="row g-4">
                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <Link href="/" className="text-decoration-none">
                            {/* Inline SVG Logo */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="300"
                                height="60"
                                viewBox="0 0 250 50"
                            >
                                {/*
                                  Icon is set to 36px tall.
                                  We position it so that its center aligns with the baseline of the text.
                                  Here, we use y="5" (5 + 36 = 41) as an approximation.
                                */}
                                <image
                                    href="/logo.svg"
                                    x="0"
                                    y="5"
                                    width="36"
                                    height="36"
                                    className="brand-filter"
                                />
                                {/*
                                  Text: "Boiler" in extra bold and "Build" in light weight.
                                  We set the text baseline at y="25" so that it aligns well with the icon.
                                */}
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
                        <p className="text-muted mt-3">
                            Discover and explore a curated collection of high-quality boilerplates for your next project.
                        </p>
                        <div className="d-flex gap-3">
                            <a href="#" className="text-brand">
                                <FontAwesomeIcon icon={faGithub} size="lg" />
                            </a>
                            <a href="#" className="text-brand">
                                <FontAwesomeIcon icon={faTwitter} size="lg" />
                            </a>
                            <a href="#" className="text-brand">
                                <FontAwesomeIcon icon={faDiscord} size="lg" />
                            </a>
                        </div>
                    </div>

                    <div className="col-6 col-lg-2">
                        <h5 className="fw-bold mb-3">Frontend Technologies</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="#" className="text-decoration-none text-secondary hover-brand">
                                    Best React Boilerplates
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-decoration-none text-secondary hover-brand">
                                    Best Vue Boilerplates
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-decoration-none text-secondary hover-brand">
                                    Best Svelte Boilerplates
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-decoration-none text-secondary hover-brand">
                                    Best TypeScript Boilerplates
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-decoration-none text-secondary hover-brand">
                                    Best Astro Boilerplates
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-6 col-lg-2">
                        <h5 className="fw-bold mb-3">Backend & Fullstack</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="#" className="text-decoration-none text-secondary hover-brand">
                                    Best Django Boilerplates
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-decoration-none text-secondary hover-brand">
                                    Best Express Boilerplates
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-decoration-none text-secondary hover-brand">
                                    Best NodeJS Boilerplates
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-decoration-none text-secondary hover-brand">
                                    Best PHP Boilerplates
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-decoration-none text-secondary hover-brand">
                                    Best Ruby on Rails Boilerplates
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-decoration-none text-secondary hover-brand">
                                    Best Laravel Boilerplates
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-decoration-none text-secondary hover-brand">
                                    Best NextJS Boilerplates
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-decoration-none text-secondary hover-brand">
                                    Best Nuxt Boilerplates
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-decoration-none text-secondary hover-brand">
                                    Best SvelteKit Boilerplates
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-6 col-lg-2">
                        <h5 className="fw-bold mb-3">Mobile Technologies</h5>
                        <ul className="list-unstyled mb-4">
                            <li className="mb-2">
                                <a href="#" className="text-decoration-none text-secondary hover-brand">
                                    Best React Native Boilerplates
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-decoration-none text-secondary hover-brand">
                                    Best Flutter Boilerplates
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-decoration-none text-secondary hover-brand">
                                    Best Expo Boilerplates
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-decoration-none text-secondary hover-brand">
                                    Best SwiftUI Boilerplates
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-decoration-none text-secondary hover-brand">
                                    Best Kotlin Boilerplates
                                </a>
                            </li>
                        </ul>

                        <h5 className="fw-bold mb-3">Company</h5>
                        <ul className="list-unstyled d-flex flex-wrap gap-3">
                            <li>
                                <a href="#" className="text-decoration-none text-secondary hover-brand">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-decoration-none text-secondary hover-brand">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-decoration-none text-secondary hover-brand">
                                    Privacy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-decoration-none text-secondary hover-brand">
                                    Terms
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row mt-4 pt-4 border-top">
                    <div className="col text-center">
                        <p className="text-muted small mb-0">
                            &copy; {new Date().getFullYear()} BoilerBuild. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
