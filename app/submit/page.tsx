// app/submit/page.tsx
"use client"

import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faUpload, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

interface FormData {
    name: string;
    description: string;
    category: string;
    githubUrl: string;
    demoUrl: string;
    email: string;
    tags: string[];
    screenshot: File | null;
}

interface TagFormData {
    currentTag: string;
}

export default function SubmitBoilerplatePage() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        description: '',
        category: '',
        githubUrl: '',
        demoUrl: '',
        email: '',
        tags: [],
        screenshot: null
    });

    const [currentTag, setCurrentTag] = useState<TagFormData>({
        currentTag: ''
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const categories = [
        'Django',
        '.NET',
        'Flask',
        'Go',
        'Laravel',
        'Next.js',
        'Node.js',
        'Other',
        'Ruby on Rails',
        'React',
        'Svelte'
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setFormData(prev => ({ ...prev, screenshot: file }));
    };

    const addTag = () => {
        const newTag = currentTag.currentTag.trim();
        if (newTag && !formData.tags.includes(newTag)) {
            setFormData(prev => ({ ...prev, tags: [...prev.tags, newTag] }));
            setCurrentTag({ currentTag: '' });
        }
    };

    const removeTag = (tagToRemove: string) => {
        setFormData(prev => ({
            ...prev,
            tags: prev.tags.filter(tag => tag !== tagToRemove)
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Here you would normally send the data to your backend
        setFormSubmitted(true);
    };

    return (
        <div className="bg-light py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="d-flex align-items-center mb-4">
                            <Link 
                                href="/" 
                                className="btn btn-outline-brand rounded-pill btn-sm me-3"
                            >
                                <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
                                Back to Home
                            </Link>
                            <h1 className="h4 mb-0">Submit Your Boilerplate</h1>
                        </div>

                        <div className="card border-0 shadow-sm">
                            <div className="card-body p-4">
                                {formSubmitted ? (
                                    <div className="text-center py-5">
                                        <div className="mb-4">
                                            <div className="bg-brand text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <h2 className="h4 mb-3">Thank You for Your Submission!</h2>
                                        <p className="text-muted mb-4">
                                            Your boilerplate has been submitted for review. Our team will review it within 2-3 business days.
                                        </p>
                                        <Link href="/" className="btn btn-brand rounded-pill px-4">
                                            Return to Home
                                        </Link>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="needs-validation">
                                        <div className="mb-4">
                                            <label htmlFor="name" className="form-label fw-medium">Boilerplate Name</label>
                                            <input
                                                type="text"
                                                className="form-control form-control-lg rounded-3"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                placeholder="E.g., Next.js Starter Kit"
                                                required
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="description" className="form-label fw-medium">Description</label>
                                            <textarea
                                                className="form-control form-control-lg rounded-3"
                                                id="description"
                                                name="description"
                                                value={formData.description}
                                                onChange={handleInputChange}
                                                rows={4}
                                                placeholder="Describe your boilerplate, its features, and use cases..."
                                                required
                                            ></textarea>
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="category" className="form-label fw-medium">Category</label>
                                            <select
                                                className="form-select form-select-lg rounded-3"
                                                id="category"
                                                name="category"
                                                value={formData.category}
                                                onChange={handleInputChange}
                                                required
                                            >
                                                <option value="">Select a category</option>
                                                {categories.map(category => (
                                                    <option key={category} value={category}>{category}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="githubUrl" className="form-label fw-medium">Repository URL</label>
                                            <input
                                                type="url"
                                                className="form-control form-control-lg rounded-3"
                                                id="githubUrl"
                                                name="githubUrl"
                                                value={formData.githubUrl}
                                                onChange={handleInputChange}
                                                placeholder="https://github.com/username/repository"
                                                required
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="demoUrl" className="form-label fw-medium">Demo URL (Optional)</label>
                                            <input
                                                type="url"
                                                className="form-control form-control-lg rounded-3"
                                                id="demoUrl"
                                                name="demoUrl"
                                                value={formData.demoUrl}
                                                onChange={handleInputChange}
                                                placeholder="https://your-demo-site.com"
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="email" className="form-label fw-medium">Email</label>
                                            <input
                                                type="email"
                                                className="form-control form-control-lg rounded-3"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="your-email@example.com"
                                                required
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="tags" className="form-label fw-medium">Tags</label>
                                            <div className="input-group input-group-lg">
                                                <input
                                                    type="text"
                                                    className="form-control rounded-start-3"
                                                    id="tags"
                                                    value={currentTag.currentTag}
                                                    onChange={(e) => setCurrentTag({ currentTag: e.target.value })}
                                                    placeholder="E.g., TypeScript, Tailwind, Authentication"
                                                />
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-brand rounded-end-3 px-4"
                                                    onClick={addTag}
                                                >
                                                    <FontAwesomeIcon icon={faPlus} />
                                                </button>
                                            </div>
                                            {formData.tags && formData.tags.length > 0 && (
                                                <div className="d-flex flex-wrap gap-2 mt-3">
                                                    {formData.tags.map(tag => (
                                                        <span key={tag} className="badge bg-light text-dark border px-3 py-2 rounded-pill">
                                                            {tag}
                                                            <button
                                                                type="button"
                                                                className="btn btn-link text-dark p-0 ms-2"
                                                                onClick={() => removeTag(tag)}
                                                            >
                                                                <FontAwesomeIcon icon={faTimes} size="sm" />
                                                            </button>
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="screenshot" className="form-label fw-medium">Screenshot (Optional)</label>
                                            <div className="input-group input-group-lg">
                                                <input
                                                    type="file"
                                                    className="form-control rounded-3"
                                                    id="screenshot"
                                                    onChange={handleFileChange}
                                                    accept="image/*"
                                                />
                                            </div>
                                            <div className="form-text">Upload a screenshot or preview image of your boilerplate</div>
                                        </div>

                                        <div className="d-grid">
                                            <button type="submit" className="btn btn-brand btn-lg rounded-pill">
                                                <FontAwesomeIcon icon={faUpload} className="me-2" />
                                                Submit Boilerplate
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}