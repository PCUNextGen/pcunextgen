import { useState } from "react";

export default function EventRegister() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      event: formData.get('event'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('http://localhost:5000/api/event/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      
      if (result.success) {
        setSubmitted(true);
      } else {
        setError(result.message || 'Failed to register for event');
      }
    } catch {
      setError('Network error. Please check if the backend is running.');
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto p-8 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl shadow-xl border border-green-200 animate-pulse">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-green-800 mb-2">Registration Successful! 🎉</h3>
          <p className="text-green-700">We've received your registration and will contact you soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto p-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-2xl shadow-2xl border border-gray-200 backdrop-blur-sm">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Event Registration
        </h2>
        <p className="text-gray-600">Join us for an amazing experience!</p>
      </div>
      
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input 
            name="name" 
            type="text" 
            placeholder="Enter your full name" 
            required 
            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 placeholder-gray-400 bg-white/80 backdrop-blur-sm" 
          />
        </div>
        
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input 
            name="email" 
            type="email" 
            placeholder="your.email@example.com" 
            required 
            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 placeholder-gray-400 bg-white/80 backdrop-blur-sm" 
          />
        </div>
        
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Event Name</label>
          <input 
            name="event" 
            type="text" 
            placeholder="Which event are you interested in?" 
            required 
            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 placeholder-gray-400 bg-white/80 backdrop-blur-sm" 
          />
        </div>
        
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
          <textarea 
            name="message" 
            placeholder="Tell us why you're excited to join this event..." 
            rows="4"
            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 placeholder-gray-400 bg-white/80 backdrop-blur-sm resize-none" 
          />
        </div>
        
        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-red-700 font-medium">{error}</span>
            </div>
          </div>
        )}
        
        <button 
          type="submit" 
          disabled={isLoading} 
          className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Registering...
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <span>Register Now</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </div>
          )}
        </button>
      </form>
    </div>
  );
}