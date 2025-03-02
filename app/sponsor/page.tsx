// app/sponsor/page.tsx
"use client"

import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCheck } from '@fortawesome/free-solid-svg-icons';

interface PricingPlan {
    monthly: number;
    yearly: number;
    features: string[];
}

interface PricingPlans {
    starter: PricingPlan;
    growth: PricingPlan;
    enterprise: PricingPlan;
}

type PlanType = 'monthly' | 'yearly';

export default function SponsorPage() {
    const [selectedPlan, setSelectedPlan] = useState<PlanType>('monthly');

    const pricingPlans: PricingPlans = {
        starter: {
            monthly: 49,
            yearly: 499,
            features: [
                'Logo displayed on homepage',
                'Featured in monthly newsletter',
                'Access to sponsor Discord channel',
                '1 featured boilerplate per month'
            ]
        },
        growth: {
            monthly: 99,
            yearly: 999,
            features: [
                'Everything in Starter',
                'Logo displayed in premium positions',
                'Featured in all newsletters',
                '3 featured boilerplates per month',
                'Social media mentions'
            ]
        },
        enterprise: {
            monthly: 299,
            yearly: 2999,
            features: [
                'Everything in Growth',
                'Custom branding opportunities',
                'Dedicated sponsor section',
                'Unlimited featured boilerplates',
                'Co-marketing opportunities',
                'Direct integration possibilities'
            ]
        }
    } as const;

    return (
        <div className="bg-light">
            {/* Hero Section */}
            <div className="bg-black text-white py-5">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-8">
                            <Link 
                                href="/" 
                                className="btn btn-outline-light rounded-pill btn-sm mb-4 d-inline-flex align-items-center"
                            >
                                <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
                                Back to Home
                            </Link>
                            <h1 className="display-4 mb-3 fw-bold">Become a Sponsor</h1>
                            <p className="lead mb-4 opacity-75">
                                Support the BoilerBuild community and get your brand in front of thousands of developers worldwide.
                            </p>
                            <a href="#pricing" className="btn btn-brand btn-lg rounded-pill px-4">
                                View Sponsorship Plans
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container py-5">
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-8 text-center">
                        <h2 className="h3 mb-4">Why Sponsor BoilerBuild?</h2>
                        <p className="lead text-muted mb-0">
                            BoilerBuild is the go-to resource for developers looking for quality boilerplates and starter kits.
                            As a sponsor, you&apos;ll reach a highly engaged audience of developers and decision-makers.
                        </p>
                    </div>
                </div>

                <div className="row mb-5">
                    <div className="col-md-4 mb-4 mb-md-0">
                        <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body text-center p-4">
                                <div className="rounded-circle bg-brand bg-opacity-10 d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="text-brand bi bi-people" viewBox="0 0 16 16">
                                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
                                    </svg>
                                </div>
                                <h3 className="h5 mb-3">Engaged Developer Audience</h3>
                                <p className="text-muted mb-0">
                                    Connect with over 50,000 monthly active developers looking for quality boilerplates and starter kits.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4 mb-md-0">
                        <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body text-center p-4">
                                <div className="rounded-circle bg-brand bg-opacity-10 d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="text-brand bi bi-graph-up" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/>
                                    </svg>
                                </div>
                                <h3 className="h5 mb-3">Targeted Visibility</h3>
                                <p className="text-muted mb-0">
                                    Showcase your products, tools, and services directly to developers when they&apos;re actively seeking solutions.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body text-center p-4">
                                <div className="rounded-circle bg-brand bg-opacity-10 d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="text-brand bi bi-lightning" viewBox="0 0 16 16">
                                        <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z"/>
                                    </svg>
                                </div>
                                <h3 className="h5 mb-3">Community Impact</h3>
                                <p className="text-muted mb-0">
                                    Support the open-source ecosystem while building brand loyalty among developers and tech decision-makers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pricing */}
                <div id="pricing" className="row justify-content-center mb-5">
                    <div className="col-lg-8 text-center">
                        <h2 className="h3 mb-4">Sponsorship Plans</h2>
                        <div className="d-inline-flex border rounded-pill p-1 mb-5">
                            <button
                                className={`btn rounded-pill px-4 ${selectedPlan === 'monthly' ? 'btn-brand' : 'btn-outline-brand'}`}
                                onClick={() => setSelectedPlan('monthly')}
                            >
                                Monthly
                            </button>
                            <button
                                className={`btn rounded-pill px-4 ${selectedPlan === 'yearly' ? 'btn-brand' : 'btn-outline-brand'}`}
                                onClick={() => setSelectedPlan('yearly')}
                            >
                                Yearly
                                <span className="badge bg-white text-brand ms-2">Save 15%</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body p-4">
                                <h3 className="text-center h4 mb-1">Starter</h3>
                                <p className="text-center text-muted mb-4">For smaller companies and startups</p>
                                <div className="text-center mb-4">
                                    <span className="h2 fw-bold">${pricingPlans.starter[selectedPlan]}</span>
                                    <span className="text-muted">/{selectedPlan === 'monthly' ? 'mo' : 'yr'}</span>
                                </div>
                                <ul className="list-unstyled mb-4">
                                    {pricingPlans.starter.features.map((feature, index) => (
                                        <li key={index} className="mb-2 d-flex align-items-center">
                                            <FontAwesomeIcon icon={faCheck} className="text-brand me-2" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="d-grid">
                                    <Link href="/contact" className="btn btn-outline-brand rounded-pill">
                                        Get Started
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <span className="badge bg-brand rounded-pill mb-2">Most Popular</span>
                                </div>
                                <h3 className="text-center h4 mb-1">Growth</h3>
                                <p className="text-center text-muted mb-4">For growing companies</p>
                                <div className="text-center mb-4">
                                    <span className="h2 fw-bold">${pricingPlans.growth[selectedPlan]}</span>
                                    <span className="text-muted">/{selectedPlan === 'monthly' ? 'mo' : 'yr'}</span>
                                </div>
                                <ul className="list-unstyled mb-4">
                                    {pricingPlans.growth.features.map((feature, index) => (
                                        <li key={index} className="mb-2 d-flex align-items-center">
                                            <FontAwesomeIcon icon={faCheck} className="text-brand me-2" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="d-grid">
                                    <Link href="/contact" className="btn btn-brand rounded-pill">
                                        Get Started
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body p-4">
                                <h3 className="text-center h4 mb-1">Enterprise</h3>
                                <p className="text-center text-muted mb-4">For large organizations</p>
                                <div className="text-center mb-4">
                                    <span className="h2 fw-bold">${pricingPlans.enterprise[selectedPlan]}</span>
                                    <span className="text-muted">/{selectedPlan === 'monthly' ? 'mo' : 'yr'}</span>
                                </div>
                                <ul className="list-unstyled mb-4">
                                    {pricingPlans.enterprise.features.map((feature, index) => (
                                        <li key={index} className="mb-2 d-flex align-items-center">
                                            <FontAwesomeIcon icon={faCheck} className="text-brand me-2" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="d-grid">
                                    <Link href="/contact" className="btn btn-outline-brand rounded-pill">
                                        Contact Sales
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-8 text-center">
                        <p className="mb-4">
                          Don&apos;t miss out on the opportunity to showcase your boilerplate to thousands of developers who are looking for the perfect starting point for their next project.
                        </p>
                        <p className="mb-4">
                          Your sponsorship helps us maintain and improve the platform, ensuring that developers can find the best boilerplates for their needs. We&apos;re committed to providing value to both sponsors and users.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}