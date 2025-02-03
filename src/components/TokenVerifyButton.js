import React from 'react';
import axios from 'axios';

const TokenVerifyButton
 = () => {
  const fetchData = async () => {
     try {
            await axios.get('http://localhost:5000/api/auth/verify-token', {
              withCredentials: true,
            });
        } catch (error) {
            console.error("Token validation failed:", error);
            return false;
        }
  };

  return (
    <div>
      <button
        onClick={fetchData}
        className="px-4 py-2 bg-primary-600 text-black rounded hover:bg-primary-700"
      >
        TokenVerifyButton
      </button>
    </div>
  );
};

export default TokenVerifyButton
;