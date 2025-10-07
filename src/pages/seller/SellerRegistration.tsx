import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { simulateVerificationApproval, getSellerStatus } from '../../utils/sellerUtils';

const SellerRegistration = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [sellerStatus, setSellerStatus] = useState(getSellerStatus());

  useEffect(() => {
    // Check seller status on component mount
    const status = getSellerStatus();
    setSellerStatus(status);
  }, []);
  const [formData, setFormData] = useState({
    shopName: '',
    shopDescription: '',
    email: '',
    phoneNumber: '',
    pickupAddress: '',
    city: '',
    state: '',
    postcode: '',
    // Shipping channel data
    shippingMethods: [] as string[],
    // Verification data
    businessType: '',
    businessRegistration: '',
    taxNumber: '',
    bankAccount: '',
    bankName: '',
    accountHolder: '',
    identityCard: null,
    businessLicense: null
  });

  const steps = [
    { id: 1, title: 'Shop Information', status: 'active' },
    { id: 2, title: 'Shipping Channel', status: 'pending' },
    { id: 3, title: 'Seller Verification', status: 'pending' },
    { id: 4, title: 'Submit', status: 'pending' }
  ];

  const getStepStatus = (stepId: number) => {
    if (stepId < currentStep) return 'completed';
    if (stepId === currentStep) return 'active';
    return 'pending';
  };

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return formData.shopName && formData.email && formData.phoneNumber && formData.pickupAddress;
      case 2:
        return formData.shippingMethods.length > 0;
      case 3:
        return formData.businessType && formData.bankAccount && formData.bankName && formData.accountHolder;
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (validateCurrentStep() && currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Save registration data and redirect to verification pending
    localStorage.setItem('sellerRegistration', JSON.stringify(formData));
    localStorage.setItem('sellerStatus', 'pending_verification');
    // Start simulation for demo purposes
    simulateVerificationApproval();
    navigate('/seller/verification-pending');
  };

  const handleShippingMethodChange = (method: string, checked: boolean) => {
    const currentMethods = formData.shippingMethods;
    if (checked) {
      handleInputChange('shippingMethods', [...currentMethods, method]);
    } else {
      handleInputChange('shippingMethods', currentMethods.filter(m => m !== method));
    }
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-12">
      <div className="flex items-center space-x-8">
        {steps.map((step, index) => {
          const status = getStepStatus(step.id);
          return (
            <div key={step.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  status === 'completed' 
                    ? 'bg-blue-600 text-white' 
                    : status === 'active'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-300 text-gray-600'
                }`}>
                  {status === 'completed' ? (
                    <span className="text-sm">✓</span>
                  ) : (
                    step.id
                  )}
                </div>
                <span className={`mt-2 text-sm font-medium ${
                  status === 'active' ? 'text-gray-900' : 'text-gray-500'
                }`}>
                  {step.title}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className={`w-16 h-0.5 mx-4 ${
                  status === 'completed' ? 'bg-blue-600' : 'bg-gray-300'
                }`} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderShopInformation = () => (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <span className="text-red-500">*</span> Shop Name
        </label>
        <input
          type="text"
          value={formData.shopName}
          onChange={(e) => handleInputChange('shopName', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your shop name"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Shop Description
        </label>
        <textarea
          value={formData.shopDescription}
          onChange={(e) => handleInputChange('shopDescription', e.target.value)}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Tell customers about your shop and products..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <span className="text-red-500">*</span> Email
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="your.email@example.com"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <span className="text-red-500">*</span> Phone Number
        </label>
        <input
          type="tel"
          value={formData.phoneNumber}
          onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="+60123456789"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <span className="text-red-500">*</span> Pickup Address
        </label>
        <textarea
          value={formData.pickupAddress}
          onChange={(e) => handleInputChange('pickupAddress', e.target.value)}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your complete pickup address"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            City
          </label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => handleInputChange('city', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Kuala Lumpur"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Postcode
          </label>
          <input
            type="text"
            value={formData.postcode}
            onChange={(e) => handleInputChange('postcode', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="50000"
          />
        </div>
      </div>
    </div>
  );

  const renderShippingChannel = () => (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Select Shipping Methods</h3>
        <p className="text-gray-600">Choose how you want to ship your products to customers</p>
      </div>

      <div className="space-y-4">
        {[
          { id: 'shopee-express', name: 'Shopee Express', desc: 'Fast and reliable delivery', fee: 'From RM3.50' },
          { id: 'j-t-express', name: 'J&T Express', desc: 'Nationwide coverage', fee: 'From RM4.00' },
          { id: 'city-link', name: 'City Link Express', desc: 'Express delivery service', fee: 'From RM5.00' },
          { id: 'pos-laju', name: 'Pos Laju', desc: 'Malaysia Post express service', fee: 'From RM6.50' },
          { id: 'self-pickup', name: 'Self Pickup', desc: 'Customer pickup from your location', fee: 'Free' }
        ].map((method) => (
          <div key={method.id} className="border border-gray-200 rounded-lg p-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={formData.shippingMethods.includes(method.id)}
                onChange={(e) => handleShippingMethodChange(method.id, e.target.checked)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-gray-900">{method.name}</h4>
                  <span className="text-sm font-semibold text-blue-600">{method.fee}</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">{method.desc}</p>
              </div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSellerVerification = () => (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Seller Verification</h3>
        <p className="text-gray-600">Provide your business information for verification</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <span className="text-red-500">*</span> Business Type
        </label>
        <select
          value={formData.businessType}
          onChange={(e) => handleInputChange('businessType', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        >
          <option value="">Select Business Type</option>
          <option value="individual">Individual</option>
          <option value="sdn-bhd">Sdn Bhd</option>
          <option value="enterprise">Enterprise</option>
          <option value="partnership">Partnership</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Business Registration Number
        </label>
        <input
          type="text"
          value={formData.businessRegistration}
          onChange={(e) => handleInputChange('businessRegistration', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="SSM Registration Number (if applicable)"
        />
      </div>

      <div className="border-t pt-6">
        <h4 className="text-md font-semibold text-gray-900 mb-4">Bank Account Information</h4>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <span className="text-red-500">*</span> Bank Name
            </label>
            <select
              value={formData.bankName}
              onChange={(e) => handleInputChange('bankName', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select Bank</option>
              <option value="maybank">Maybank</option>
              <option value="cimb">CIMB Bank</option>
              <option value="public-bank">Public Bank</option>
              <option value="rhb">RHB Bank</option>
              <option value="hong-leong">Hong Leong Bank</option>
              <option value="ambank">AmBank</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <span className="text-red-500">*</span> Account Number
            </label>
            <input
              type="text"
              value={formData.bankAccount}
              onChange={(e) => handleInputChange('bankAccount', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter account number"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <span className="text-red-500">*</span> Account Holder Name
            </label>
            <input
              type="text"
              value={formData.accountHolder}
              onChange={(e) => handleInputChange('accountHolder', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter account holder name"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderSubmit = () => (
    <div className="max-w-2xl mx-auto text-center space-y-6">
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-4xl">📋</span>
      </div>
      <h3 className="text-xl font-semibold text-gray-900">Ready to Submit</h3>
      <p className="text-gray-600">
        Please review all your information before submitting your seller application. 
        Once submitted, our team will review your application within 24-48 hours.
      </p>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-left">
        <h4 className="font-semibold text-blue-900 mb-3">Application Summary:</h4>
        <div className="space-y-2 text-sm text-blue-800">
          <p><strong>Shop Name:</strong> {formData.shopName}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Phone:</strong> {formData.phoneNumber}</p>
          <p><strong>Shipping Methods:</strong> {formData.shippingMethods.length} selected</p>
          <p><strong>Business Type:</strong> {formData.businessType}</p>
          <p><strong>Bank:</strong> {formData.bankName}</p>
        </div>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return renderShopInformation();
      case 2:
        return renderShippingChannel();
      case 3:
        return renderSellerVerification();
      case 4:
        return renderSubmit();
      default:
        return renderShopInformation();
    }
  };

  // If seller is approved, redirect to seller center
  if (sellerStatus === 'approved') {
    navigate('/seller/center');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Step Indicator */}
        {renderStepIndicator()}

        {/* Form Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          {renderCurrentStep()}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className={`px-6 py-2 rounded-md font-medium ${
              currentStep === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Previous
          </button>

          {currentStep < 4 ? (
            <button
              onClick={handleNext}
              disabled={!validateCurrentStep()}
              className={`px-6 py-2 rounded-md font-medium ${
                validateCurrentStep()
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-8 py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700"
            >
              Submit Application
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SellerRegistration;