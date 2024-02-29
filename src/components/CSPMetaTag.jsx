import React, { useEffect } from 'react';

export function CSPMetaTag() {
    useEffect(() => {
        const meta = document.createElement('meta');
        meta.httpEquiv = 'Content-Security-Policy';
 
        meta.content = `
    default-src 'self';
    script-src 'self' https://apis.google.com https://www.gstatic.com https://www.google.com https://cdn.jsdelivr.net;
    style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net/npm/antd@5.11.3/dist/antd.css;
    font-src 'self' https://cdn.jsdelivr.net/npm/antd@5.11.3/dist/fonts/;
    img-src 'self'; 
    connect-src 'self' https://fast-dusk-08901-dd3e17a6f757.herokuapp.com https://www.google-analytics.com;
    frame-src 'self' https://www.google.com;
    form-action 'self';
    `;
    

        document.head.appendChild(meta);

        return () => {
            document.head.removeChild(meta);
        };
    }, []);

    return null;
}



