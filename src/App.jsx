import React, { useState } from 'react';
import { Briefcase, User, DollarSign, Star, MapPin, Clock, CheckCircle } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState('login');
  const [userRole, setUserRole] = useState('');
  const [selectedGig, setSelectedGig] = useState(null);

  // Mock database data
  const mockGigs = [
    {
      gig_id: 1,
      title: "Graphic Design for Social Media",
      description: "Need 5 Instagram post designs for a coffee shop campaign",
      pay_amount: 5000,
      location: "Remote",
      status: "active",
      provider: { business_name: "CoffeeHub Kenya", rating_avg: 4.8 },
      gig_type: "Design"
    },
    {
      gig_id: 2,
      title: "Website Bug Fixes",
      description: "Fix 3 responsive design issues on e-commerce site",
      pay_amount: 8000,
      location: "Nairobi, Kenya",
      status: "active",
      provider: { business_name: "TechStart Solutions", rating_avg: 4.5 },
      gig_type: "Development"
    },
    {
      gig_id: 3,
      title: "Content Writing - Blog Posts",
      description: "Write 3 SEO-optimized blog posts (1000 words each)",
      pay_amount: 6000,
      location: "Remote",
      status: "active",
      provider: { business_name: "Digital Marketing Pro", rating_avg: 4.9 },
      gig_type: "Writing"
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
      description: "Modern logo for startup",
      pay_amount: 7500,
      applications: 3,
      status: "filled"
    }
  ];

  // Login View
  const LoginView = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <Briefcase className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-800">GigConnect</h1>
          <p className="text-gray-600 mt-2">Your Campus Gig Marketplace</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              placeholder="student@university.edu"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>

          <div className="pt-4 space-y-3">
            <button 
              onClick={() => { setUserRole('student'); setCurrentView('student'); }}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Login as Student
            </button>
            
            <button 
              onClick={() => { setUserRole('provider'); setCurrentView('provider'); }}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Login as Provider
            </button>
          </div>

          <p className="text-center text-sm text-gray-600 pt-4">
            Don't have an account? <span className="text-indigo-600 font-semibold cursor-pointer">Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );

  // Student Dashboard
  const StudentDashboard = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-800">GigConnect</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Welcome, <span className="font-semibold">John Doe</span></span>
            <button 
              onClick={() => setCurrentView('login')}
              className="text-sm text-gray-600 hover:text-gray-800"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Applications</p>
                <p className="text-3xl font-bold text-indigo-600">2</p>
              </div>
              <Clock className="w-12 h-12 text-indigo-200" />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Completed Gigs</p>
                <p className="text-3xl font-bold text-green-600">5</p>
              </div>
              <CheckCircle className="w-12 h-12 text-green-200" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Earned</p>
                <p className="text-3xl font-bold text-gray-800">KSh 28,000</p>
              </div>
              <DollarSign className="w-12 h-12 text-gray-200" />
            </div>
          </div>
        </div>

        <div className="flex gap-4 mb-6 border-b">
          <button className="pb-3 px-4 border-b-2 border-indigo-600 text-indigo-600 font-semibold">
            Available Gigs
          </button>
          <button className="pb-3 px-4 text-gray-600 hover:text-gray-800">
            My Applications
          </button>
        </div>

        <div className="space-y-4">
          {mockGigs.map(gig => (
            <div key={gig.gig_id} className="bg-white rounded-lg shadow hover:shadow-lg transition p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{gig.title}</h3>
                  <p className="text-gray-600 mb-3">{gig.description}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{gig.provider.business_name}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{gig.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{gig.provider.rating_avg}</span>
                    </div>
                  </div>
                </div>

                <div className="text-right ml-6">
                  <div className="bg-green-50 text-green-700 px-4 py-2 rounded-lg mb-3">
                    <p className="text-sm font-medium">Pay</p>
                    <p className="text-2xl font-bold">KSh {gig.pay_amount.toLocaleString()}</p>
                  </div>
                  <button 
                    onClick={() => {
                      setSelectedGig(gig);
                      setCurrentView('apply');
                    }}
                    className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition font-semibold"
                  >
                    Apply Now
                  </button>
                </div>
              </div>

              <div className="flex gap-2">
                <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium">
                  {gig.gig_type}
                </span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                  {gig.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Provider Dashboard
  const ProviderDashboard = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-green-600" />
            <h1 className="text-2xl font-bold text-gray-800">GigConnect Provider</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">CoffeeHub Kenya</span>
            <button 
              onClick={() => setCurrentView('login')}
              className="text-sm text-gray-600 hover:text-gray-800"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-sm text-gray-600 mb-1">Active Gigs</p>
            <p className="text-3xl font-bold text-green-600">3</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-sm text-gray-600 mb-1">Total Applications</p>
            <p className="text-3xl font-bold text-indigo-600">15</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-sm text-gray-600 mb-1">Completed</p>
            <p className="text-3xl font-bold text-gray-800">8</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-sm text-gray-600 mb-1">Rating</p>
            <p className="text-3xl font-bold text-yellow-500">4.8 ★</p>
          </div>
        </div>

        <div className="mb-6">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
            + Post New Gig
          </button>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">My Posted Gigs</h2>
        <div className="space-y-4">
          {mockProviderGigs.map(gig => (
            <div key={gig.gig_id} className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{gig.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      gig.status === 'active' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {gig.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{gig.description}</p>
                  
                  <div className="flex gap-6 text-sm text-gray-600">
                    <div>
                      <span className="font-semibold">Pay:</span> KSh {gig.pay_amount.toLocaleString()}
                    </div>
                    <div>
                      <span className="font-semibold">Applications:</span> {gig.applications}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition text-sm font-medium">
                    View Applications
                  </button>
                  <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition text-sm font-medium">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Apply to Gig View
  const ApplyView = () => (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <button 
          onClick={() => setCurrentView('student')}
          className="text-indigo-600 mb-6 flex items-center gap-2 hover:text-indigo-700"
        >
          ← Back to Gigs
        </button>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Apply to Gig</h2>
          
          {selectedGig && (
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{selectedGig.title}</h3>
              <p className="text-gray-600 mb-3">{selectedGig.description}</p>
              <div className="flex gap-4 text-sm text-gray-600">
                <span>Pay: <span className="font-bold text-green-600">KSh {selectedGig.pay_amount.toLocaleString()}</span></span>
                <span>Provider: {selectedGig.provider.business_name}</span>
              </div>
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cover Letter / Why you're a good fit
              </label>
              <textarea 
                rows="6"
                placeholder="Explain your relevant experience and why you're interested in this gig..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Portfolio Link (Optional)
              </label>
              <input 
                type="url"
                placeholder="https://yourportfolio.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            <div className="pt-4">
              <button 
                onClick={() => {
                  alert('Application submitted successfully! 🎉');
                  setCurrentView('student');
                }}
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
              >
                Submit Application
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {currentView === 'login' && <LoginView />}
      {currentView === 'student' && <StudentDashboard />}
      {currentView === 'provider' && <ProviderDashboard />}
      {currentView === 'apply' && <ApplyView />}
    </div>
  );
}