"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';

// State management
export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState({
    'Programming Languages': true,
    'Tool Selection Kits': false
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sample data
  const techStacks = [
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

  const boilerplates = [
    { 
      id: 1, 
      name: 'Next.js Starter', 
      category: 'Next.js', 
      tags: ['TypeScript', 'Tailwind'],
      description: 'A minimal starter template with Next.js, TypeScript, and Tailwind CSS for building modern web applications.',
      image: 'https://cdn.worldvectorlogo.com/logos/next-js.svg'
    },
    { 
      id: 2, 
      name: 'React Dashboard', 
      category: 'React', 
      tags: ['JavaScript', 'Styled Components'],
      description: 'A fully responsive admin dashboard template built with React and Styled Components with dark/light theme support.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
    },
    { 
      id: 3, 
      name: 'Django REST API', 
      category: 'Django', 
      tags: ['Python', 'REST'],
      description: 'Production-ready Django REST framework boilerplate with authentication, permissions, and Swagger documentation.',
      image: 'https://static.djangoproject.com/img/logos/django-logo-negative.png'
    },
    { 
      id: 4, 
      name: 'Laravel Starter', 
      category: 'Laravel', 
      tags: ['PHP', 'MySQL'],
      description: 'Feature-rich Laravel starter kit with authentication, roles, permissions, and API support.',
      image: 'https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg'
    },
    { 
      id: 5, 
      name: 'Flask Microservice', 
      category: 'Flask', 
      tags: ['Python', 'Microservice'],
      description: 'Lightweight Flask boilerplate optimized for microservices with Docker support.',
      image: 'https://flask.palletsprojects.com/en/2.3.x/_images/flask-logo.png'
    },
    { 
      id: 6, 
      name: 'Go REST Server', 
      category: 'Go', 
      tags: ['Golang', 'REST'],
      description: 'High-performance Go REST server with built-in monitoring and tracing.',
      image: 'https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png'
    },
    { 
      id: 7, 
      name: 'Svelte Commerce', 
      category: 'Svelte', 
      tags: ['SvelteKit', 'E-commerce'],
      description: 'Full-featured e-commerce template built with SvelteKit featuring product listings, cart, and checkout.',
      image: 'https://raw.githubusercontent.com/sveltejs/branding/master/svelte-logo.svg'
    },
    { 
      id: 8, 
      name: '.NET Core API', 
      category: '.NET', 
      tags: ['C#', 'REST'],
      description: 'Enterprise-grade .NET Core API template with CQRS pattern and clean architecture.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/1200px-Microsoft_.NET_logo.svg.png'
    }
  ];

  const filterOptions = ['TypeScript', 'JavaScript', 'API', 'Tailwind', 'SCSS', 'E-commerce'];

  // Toggle category expansion
  const toggleCategory = (category: string) => {
    setExpandedCategories({
      ...expandedCategories,
      [category]: !expandedCategories[category]
    });
  };

  // Filter handlers
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setMobileMenuOpen(false);
  };

  const handleFilterToggle = (filter) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter(f => f !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  const clearFilters = () => {
    setSelectedFilters([]);
    setSearchQuery('');
    setSelectedCategory('All');
  };

  // Filter boilerplates based on selected criteria
  const filteredBoilerplates = boilerplates.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesFilters = selectedFilters.length === 0 || selectedFilters.some(filter => item.tags.includes(filter));
    const matchesSearch = searchQuery === '' || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesFilters && matchesSearch;
  });

  return (
    <div className="flex-grow-1 d-flex">
      {/* Left Category Navigation */}
      <nav className={`
        ${mobileMenuOpen ? 'd-block position-absolute z-3 start-0 end-0 top-0 mt-5 bg-white shadow' : 'd-none'} 
        d-md-block bg-white border-end sidebar
      `} style={{ width: '280px', minWidth: '280px', overflowY: 'auto', paddingTop: '24px' }}>
        <div className="d-md-none position-relative w-100 mb-3 px-4">
          <input
            type="text"
            placeholder="Search boilerplates..."
            className="form-control ps-4"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="position-absolute" style={{ left: '34px', top: '50%', transform: 'translateY(-50%)' }}>
            <FontAwesomeIcon icon={faSearch} className="text-muted small" />
          </span>
        </div>
        
        <div className="px-4">
          <h5 className="fw-bold text-secondary mb-3">Tech Stack</h5>
          
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a 
                className={`nav-link ${selectedCategory === 'All' ? 'text-brand fw-semibold' : 'text-dark'}`}
                href="#"
                onClick={(e) => { e.preventDefault(); handleCategorySelect('All'); }}
              >
                All Boilerplates
              </a>
            </li>
            
            {techStacks.map(stack => (
              <li key={stack} className="nav-item mb-2">
                <a 
                  className={`nav-link ${selectedCategory === stack ? 'text-brand fw-semibold' : 'text-dark'}`}
                  href="#"
                  onClick={(e) => { e.preventDefault(); handleCategorySelect(stack); }}
                >
                  {stack}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow-1 p-4">
        <div className="container-fluid">
          {/* Filter Buttons */}
          <div className="mb-4">
            <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap">
              <h2 className="h4 fw-bold mb-0">
                {selectedCategory === 'All' ? 'All Boilerplates' : selectedCategory}
              </h2>
              
              <div className="d-flex align-items-center mt-2 mt-md-0">
                <FontAwesomeIcon icon={faFilter} className="me-2 text-brand" />
                <span className="me-2 text-muted small">Filters:</span>
                
                {selectedFilters.length > 0 || selectedCategory !== 'All' || searchQuery ? (
                  <button 
                    onClick={clearFilters}
                    className="btn btn-sm text-danger d-flex align-items-center"
                  >
                    <FontAwesomeIcon icon={faTimes} className="me-1" /> Clear
                  </button>
                ) : null}
              </div>
            </div>
            
            <div className="d-flex flex-wrap gap-2">
              {filterOptions.map(filter => (
                <button
                  key={filter}
                  onClick={() => handleFilterToggle(filter)}
                  className={`btn btn-sm rounded-pill ${
                    selectedFilters.includes(filter)
                      ? 'btn-brand'
                      : 'bg-white border text-secondary'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Results Grid */}
          {filteredBoilerplates.length > 0 ? (
            <div className="row row-cols-1 row-cols-md-2 g-4">
              {filteredBoilerplates.map(item => (
                <div key={item.id} className="col">
                  <div className="card h-100 shadow-sm">
                    <div style={{ 
                      position: 'relative',
                      height: '200px',
                      backgroundColor: item.category === 'Next.js' ? '#000' : '#fff'
                    }}>
                      <Image 
                        src={item.image} 
                        alt={item.name}
                        fill
                        style={{ 
                          objectFit: 'contain',
                          padding: '2rem'
                        }}
                      />
                    </div>
                    
                    <div className="card-header bg-white">
                      <div className="d-flex justify-content-between align-items-start">
                        <h5 className="card-title mb-0">{item.name}</h5>
                        <span className="badge bg-brand">{item.category}</span>
                      </div>
                    </div>
                    
                    <div className="card-body">
                      <p className="card-text text-muted mb-3">
                        {item.description}
                      </p>
                      
                      <div className="d-flex flex-wrap gap-1 mb-3">
                        {item.tags.map(tag => (
                          <span 
                            key={tag} 
                            className="badge bg-light text-secondary rounded-pill"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link 
                        href={`/listing/${item.id}`}
                        className="btn w-100 text-white"
                        style={{ backgroundColor: '#000' }}
                      >
                        View Boilerplate
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center p-5 bg-light rounded">
              <p className="text-muted">No boilerplates found matching your criteria.</p>
              <button 
                onClick={clearFilters}
                className="btn btn-link text-brand"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
