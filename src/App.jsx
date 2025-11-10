import React, { useState } from 'react';
import { Briefcase, User, DollarSign, Star, MapPin, Clock, CheckCircle, ArrowLeft, LogOut, Plus, Edit, Eye } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState('login');
  const [userRole, setUserRole] = useState('');
  const [selectedGig, setSelectedGig] = useState(null);

  // Mock database data
  const mockGigs = [
    {
      gig_id: 1,
      title: "Graphic Design for Social Media",
      description: "Need 5 Instagram post designs for a coffee shop campaign with modern aesthetics and engaging visuals that resonate with young audiences.",
      pay_amount: 5000,
      location: "Remote",
      status: "active",
      provider: { business_name: "CoffeeHub Kenya", rating_avg: 4.8 },
      gig_type: "Design",
      duration: "3 days",
      skills: ["Photoshop", "Illustrator", "Social Media"]
    },
    {
      gig_id: 2,
      title: "Website Bug Fixes",
      description: "Fix 3 responsive design issues on e-commerce site and optimize loading speed for better user experience.",
      pay_amount: 8000,
      location: "Nairobi, Kenya",
      status: "active",
      provider: { business_name: "TechStart Solutions", rating_avg: 4.5 },
      gig_type: "Development",
      duration: "5 days",
      skills: ["HTML/CSS", "JavaScript", "React"]
    },
    {
      gig_id: 3,
      title: "Content Writing - Blog Posts",
      description: "Write 3 SEO-optimized blog posts (1000 words each) about digital marketing trends with proper keyword research.",
      pay_amount: 6000,
      location: "Remote",
      status: "active",
      provider: { business_name: "Digital Marketing Pro", rating_avg: 4.9 },
      gig_type: "Writing",
      duration: "7 days",
      skills: ["SEO", "Content Writing", "Research"]
    }
  ];

  const mockApplications = [
    { 
      gig: mockGigs[0], 
      status: "pending", 
      applied_at: "2025-11-08" 
    },
    { 
      gig: mockGigs[1], 
      status: "accepted", 
      applied_at: "2025-11-05" 
    }
  ];

  const mockProviderGigs = [
    {
      ...mockGigs[0],
      applications: 8,
      status: "active"
    },
    {
      gig_id: 4,
      title: "Logo Design",
      description: "Modern logo for startup with brand guidelines and multiple variations.",
      pay_amount: 7500,
      applications: 3,
      status: "filled",
      duration: "4 days",
      skills: ["Logo Design", "Branding", "Adobe Illustrator"]
    }
  ];

  // Enhanced Button Components
  const ButtonPrimary = ({ children, onClick, className = '', icon: Icon, ...props }) => (
    <button 
      onClick={onClick}
      className={`btn-primary flex items-center justify-center gap-2 ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </button>
  );

  const ButtonSecondary = ({ children, onClick, className = '', icon: Icon, ...props }) => (
    <button 
      onClick={onClick}
      className={`btn-secondary flex items-center justify-center gap-2 ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </button>
  );

  // Login View
  const LoginView = () => (
    <div className="min-h-screen gradient-bg flex items-center justify-center p-4">
      <div className="glass-effect rounded-3xl shadow-2xl p-8 w-full max-w-md animate-float">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
            <Briefcase className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">GigConnect</h1>
          <p className="text-white/80 text-lg">Your Campus Gig Marketplace</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="form-label text-white">Email</label>
            <input 
              type="email" 
              placeholder="student@university.edu"
              className="form-input bg-white/10 border-white/20 text-white placeholder-white/60"
            />
          </div>

          <div>
            <label className="form-label text-white">Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="form-input bg-white/10 border-white/20 text-white placeholder-white/60"
            />
          </div>

          <div className="pt-4 space-y-4">
            <ButtonPrimary 
              onClick={() => { setUserRole('student'); setCurrentView('student'); }}
              className="w-full bg-white text-indigo-600 hover:bg-white/90 hover:scale-105"
            >
              Login as Student
            </ButtonPrimary>
            
            <ButtonPrimary 
              onClick={() => { setUserRole('provider'); setCurrentView('provider'); }}
              className="w-full bg-green-500 text-white hover:bg-green-600 hover:scale-105"
            >
              Login as Provider
            </ButtonPrimary>
          </div>

          <p className="text-center text-white/80 text-sm pt-4">
            Don't have an account? <span className="text-white font-semibold cursor-pointer hover:text-white/90">Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );

  // Student Dashboard
  const StudentDashboard = () => (
    <div className="min-h-screen bg-gray-50/50">
      {/* Enhanced Header */}
      <header className="bg-white shadow-lg border-b border-gray-200/50 sticky top-0 z-50">
        <div className="container-custom py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">GigConnect</h1>
              <p className="text-sm text-gray-600">Student Dashboard</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="text-sm text-gray-600">Welcome back</p>
              <p className="font-semibold text-gray-800">John Doe</p>
            </div>
            <button 
              onClick={() => setCurrentView('login')}
              className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <main className="container-custom section-padding">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="card group hover-lift">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Active Applications</p>
                <p className="text-3xl font-bold text-indigo-600">2</p>
                <p className="text-xs text-gray-500 mt-1">2 pending review</p>
              </div>
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-7 h-7 text-indigo-600" />
              </div>
            </div>
          </div>
          
          <div className="card group hover-lift">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Completed Gigs</p>
                <p className="text-3xl font-bold text-green-600">5</p>
                <p className="text-xs text-gray-500 mt-1">All rated 5★</p>
              </div>
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-7 h-7 text-green-600" />
              </div>
            </div>
          </div>

          <div className="card group hover-lift">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Earned</p>
                <p className="text-3xl font-bold text-gray-800">KSh 28,000</p>
                <p className="text-xs text-gray-500 mt-1">This semester</p>
              </div>
              <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="w-7 h-7 text-gray-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-1 mb-8 bg-white rounded-2xl p-1 shadow-sm w-fit">
          <button className="py-3 px-6 bg-indigo-600 text-white rounded-xl font-semibold transition-all duration-200 shadow-md">
            Available Gigs
          </button>
          <button className="py-3 px-6 text-gray-600 hover:text-gray-800 font-medium transition-all duration-200 hover:bg-gray-100 rounded-xl">
            My Applications
          </button>
        </div>

        {/* Gigs List */}
        <div className="space-y-6">
          {mockGigs.map((gig, index) => (
            <div 
              key={gig.gig_id} 
              className="card group hover-lift cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-200">
                      {gig.title}
                    </h3>
                    <div className="bg-green-50 text-green-700 px-4 py-2 rounded-lg min-w-[120px] text-center">
                      <p className="text-sm font-medium">Pay</p>
                      <p className="text-xl font-bold">KSh {gig.pay_amount.toLocaleString()}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{gig.description}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full">
                      <User className="w-4 h-4" />
                      <span>{gig.provider.business_name}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full">
                      <MapPin className="w-4 h-4" />
                      <span>{gig.location}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{gig.provider.rating_avg}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full">
                      <Clock className="w-4 h-4" />
                      <span>{gig.duration}</span>
                    </div>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {gig.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <div className="flex gap-2">
                  <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium">
                    {gig.gig_type}
                  </span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                    {gig.status}
                  </span>
                </div>
                
                <ButtonPrimary 
                  onClick={() => {
                    setSelectedGig(gig);
                    setCurrentView('apply');
                  }}
                  className="px-8"
                >
                  Apply Now
                </ButtonPrimary>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );

  // Provider Dashboard
  const ProviderDashboard = () => (
    <div className="min-h-screen bg-gray-50/50">
      <header className="bg-white shadow-lg border-b border-gray-200/50 sticky top-0 z-50">
        <div className="container-custom py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">GigConnect</h1>
              <p className="text-sm text-gray-600">Provider Dashboard</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="text-sm text-gray-600">Welcome back</p>
              <p className="font-semibold text-gray-800">CoffeeHub Kenya</p>
            </div>
            <button 
              onClick={() => setCurrentView('login')}
              className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <main className="container-custom section-padding">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="card group hover-lift text-center">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <Briefcase className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-sm text-gray-600 mb-1">Active Gigs</p>
            <p className="text-2xl font-bold text-green-600">3</p>
          </div>
          
          <div className="card group hover-lift text-center">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <User className="w-6 h-6 text-indigo-600" />
            </div>
            <p className="text-sm text-gray-600 mb-1">Total Applications</p>
            <p className="text-2xl font-bold text-indigo-600">15</p>
          </div>

          <div className="card group hover-lift text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <CheckCircle className="w-6 h-6 text-gray-600" />
            </div>
            <p className="text-sm text-gray-600 mb-1">Completed</p>
            <p className="text-2xl font-bold text-gray-800">8</p>
          </div>

          <div className="card group hover-lift text-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
            </div>
            <p className="text-sm text-gray-600 mb-1">Rating</p>
            <p className="text-2xl font-bold text-yellow-500">4.8</p>
          </div>
        </div>

        {/* Action Button */}
        <div className="mb-8">
          <ButtonPrimary 
            icon={Plus}
            className="bg-green-600 hover:bg-green-700 px-8 py-4 text-lg"
          >
            Post New Gig
          </ButtonPrimary>
        </div>

        {/* Gigs List */}
        <h2 className="heading-2 mb-6">My Posted Gigs</h2>
        <div className="space-y-6">
          {mockProviderGigs.map((gig, index) => (
            <div 
              key={gig.gig_id} 
              className="card group hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-gray-800">{gig.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      gig.status === 'active' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {gig.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{gig.description}</p>
                  
                  <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-4">
                    <div>
                      <span className="font-semibold text-gray-800">Pay:</span>{' '}
                      <span className="text-green-600 font-bold">KSh {gig.pay_amount.toLocaleString()}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-800">Applications:</span>{' '}
                      <span className="text-indigo-600 font-bold">{gig.applications}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-800">Duration:</span>{' '}
                      <span className="text-gray-700">{gig.duration}</span>
                    </div>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {gig.skills?.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 ml-6">
                  <ButtonSecondary icon={Eye} className="px-4">
                    View
                  </ButtonSecondary>
                  <ButtonSecondary icon={Edit} className="px-4">
                    Edit
                  </ButtonSecondary>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );

  // Apply to Gig View
  const ApplyView = () => (
    <div className="min-h-screen bg-gray-50/50 py-8">
      <div className="container-custom">
        <ButtonSecondary 
          onClick={() => setCurrentView('student')}
          icon={ArrowLeft}
          className="mb-6"
        >
          Back to Gigs
        </ButtonSecondary>

        <div className="max-w-3xl mx-auto">
          <div className="card shadow-xl">
            <h2 className="heading-2 mb-2">Apply to Gig</h2>
            <p className="text-gray-600 mb-8">Fill in your application details below</p>
            
            {selectedGig && (
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl mb-8 border border-indigo-100">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{selectedGig.title}</h3>
                <p className="text-gray-600 mb-4">{selectedGig.description}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-green-600" />
                    <span className="font-semibold text-green-600">KSh {selectedGig.pay_amount.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-600" />
                    <span>{selectedGig.provider.business_name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-600" />
                    <span>{selectedGig.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{selectedGig.provider.rating_avg}</span>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-6">
              <div>
                <label className="form-label">
                  Cover Letter / Why you're a good fit
                </label>
                <textarea 
                  rows="6"
                  placeholder="Explain your relevant experience, skills, and why you're the perfect candidate for this gig. Be specific about how you can add value..."
                  className="form-input resize-none"
                />
                <p className="text-sm text-gray-500 mt-2">Minimum 100 characters</p>
              </div>

              <div>
                <label className="form-label">
                  Portfolio Link (Optional)
                </label>
                <input 
                  type="url"
                  placeholder="https://yourportfolio.com or LinkedIn profile"
                  className="form-input"
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-sm font-bold">i</span>
                  </div>
                  <div>
                    <p className="text-sm text-blue-800 font-medium">Application Tips</p>
                    <p className="text-sm text-blue-700 mt-1">
                      Be specific about your relevant experience. Include examples of similar work you've done. 
                      Explain why you're interested in this particular gig and how you can help achieve their goals.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <ButtonPrimary 
                  onClick={() => {
                    alert('Application submitted successfully! 🎉\nThe provider will review your application and get back to you soon.');
                    setCurrentView('student');
                  }}
                  className="w-full py-4 text-lg"
                >
                  Submit Application
                </ButtonPrimary>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="antialiased">
      {currentView === 'login' && <LoginView />}
      {currentView === 'student' && <StudentDashboard />}
      {currentView === 'provider' && <ProviderDashboard />}
      {currentView === 'apply' && <ApplyView />}
    </div>
  );
}