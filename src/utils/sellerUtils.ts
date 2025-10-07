// Utility functions for seller status and routing

export type SellerStatus = 'not_registered' | 'pending_verification' | 'approved' | 'rejected';

export const getSellerStatus = (): SellerStatus => {
  const status = localStorage.getItem('sellerStatus');
  if (!status) return 'not_registered';
  return status as SellerStatus;
};

export const getSellerRoute = (): string => {
  const status = getSellerStatus();
  
  switch (status) {
    case 'not_registered':
      return '/seller'; // Registration form
    case 'pending_verification':
      return '/seller/verification-pending'; // Verification pending page
    case 'approved':
      return '/seller/center'; // Seller center dashboard
    case 'rejected':
      return '/seller'; // Back to registration form
    default:
      return '/seller'; // Default to registration
  }
};

export const setSellerStatus = (status: SellerStatus): void => {
  localStorage.setItem('sellerStatus', status);
};

// For demo purposes - simulate approval after some time
export const simulateVerificationApproval = (): void => {
  setTimeout(() => {
    setSellerStatus('approved');
    alert('🎉 Congratulations! Your seller application has been approved. You can now access your Seller Center.');
  }, 10000); // 10 seconds for demo
};