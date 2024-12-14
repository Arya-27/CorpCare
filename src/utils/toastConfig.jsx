import toast from 'react-hot-toast';

export const toastConfig = {
    duration: 3000,
    position: 'top-right',
    style: {
      background: '#333333',
      color: '#fff',
      padding: '18px 24px',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
      fontFamily: 'Arial, sans-serif',
      fontSize: '14px',
      fontWeight: '500',
      transition: 'all 0.3s ease-in-out',  
    },
  };
  
  export const showSuccessToast = (message) => {
    toast.success(message, {
      ...toastConfig,
      icon: '✅',
      style: {
        ...toastConfig.style,
        border: '2px solid #10b981',  
        background: '#4CAF50',  
      },
    });
  };
  
  export const showErrorToast = (message) => {
    toast.error(message, {
      ...toastConfig,
      icon: '❌',
      style: {
        ...toastConfig.style,
        border: '2px solid #e11d48',
        background: '#e11d48',  
      },
    });
  };
  
  export const showFailureToast = (message) => {
    toast.error(message, {
      ...toastConfig,
      icon: '⚠️',
      style: {
        ...toastConfig.style,
        border: '2px solid #f59e0b',  
        background: '#f59e0b',  
      },
    });
  };
  