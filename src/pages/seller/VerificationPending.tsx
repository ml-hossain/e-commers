import { Link } from 'react-router-dom';
import { UserIcon } from '@heroicons/react/24/outline';

const SellerVerificationPending = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                <span className="text-lg">←</span>
                <span className="text-sm font-medium">Back to Homepage</span>
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="text-xl font-bold text-blue-600">Shopee</span>
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-lg font-semibold text-gray-900">Seller Application</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-400 hover:text-gray-500">
                <span className="text-xl">🔔</span>
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <UserIcon className="w-5 h-5 text-gray-600" />
                </div>
                <span className="text-sm font-medium text-gray-900">Guest</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
          <div className="text-center">
            {/* Success Icon */}
            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-5xl">⏳</span>
            </div>

            {/* Title */}
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Application Submitted Successfully!
            </h1>

            {/* Description */}
            <div className="text-gray-600 mb-8 space-y-4">
              <p className="text-lg">
                Thank you for submitting your seller application. We have received your information and our team is currently reviewing it.
              </p>
              <p>
                The verification process typically takes <strong>24-48 hours</strong>. We will notify you via email once your application has been reviewed.
              </p>
            </div>

            {/* Status Card */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <span className="text-2xl">🔍</span>
                <h3 className="text-lg font-semibold text-yellow-800">Verification in Progress</h3>
              </div>
              <div className="text-yellow-700 space-y-2">
                <p>📋 <strong>Step 1:</strong> Document Review - In Progress</p>
                <p>🏦 <strong>Step 2:</strong> Bank Account Verification - Pending</p>
                <p>✅ <strong>Step 3:</strong> Final Approval - Pending</p>
              </div>
            </div>

            {/* What's Next */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">What happens next?</h3>
              <div className="text-blue-800 text-left space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="text-lg mt-1">📧</span>
                  <div>
                    <p><strong>Email Notification:</strong></p>
                    <p className="text-sm">You'll receive an email confirmation with your application reference number.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-lg mt-1">🔍</span>
                  <div>
                    <p><strong>Document Review:</strong></p>
                    <p className="text-sm">Our team will verify your business information and bank details.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-lg mt-1">🎉</span>
                  <div>
                    <p><strong>Account Activation:</strong></p>
                    <p className="text-sm">Once approved, you'll get access to your Seller Center dashboard.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Need Help */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Need Help?</h3>
              <div className="text-gray-700 space-y-2">
                <p>📞 <strong>Phone:</strong> 1-300-88-7888 (Mon-Fri, 9am-6pm)</p>
                <p>📧 <strong>Email:</strong> seller-support@shopee.com.my</p>
                <p>💬 <strong>Live Chat:</strong> Available 24/7 on our website</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/" 
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Back to Homepage
              </Link>
              <button 
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                onClick={() => window.open('mailto:seller-support@shopee.com.my', '_blank')}
              >
                Contact Support
              </button>
            </div>

            {/* Reference Number */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Application Reference: <span className="font-mono text-blue-600">SEL-{Date.now().toString().slice(-6)}</span>
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Please keep this reference number for your records
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerVerificationPending;