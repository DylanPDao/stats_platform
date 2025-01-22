import React from 'react';

interface AuthLayoutProps {
    children: React.ReactNode; // Correctly typing the children prop
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
    return (
        <div className='flex items-center justify-center h-full'>
            {children} {/* Corrected to use lowercase */}
        </div>
    );
};

export default AuthLayout;