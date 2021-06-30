import React from 'react'
import ContentLoader from "react-content-loader"

export default function Loader() {
    return (
        <ContentLoader 
        speed={2}
        width={600}
        height={780}
        viewBox="0 0 340 84"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        
      >
        <rect x="0" y="0" rx="3" ry="3" width="300" height="200" /> 
        <rect x="76" y="0" rx="3" ry="3" width="300" height="200" /> 
        <rect x="127" y="48" rx="3" ry="3" width="300" height="200" /> 
        <rect x="187" y="48" rx="3" ry="3" width="300" height="200" /> 
        <rect x="18" y="48" rx="3" ry="3" width="300" height="200" /> 
        <rect x="0" y="71" rx="3" ry="3" width="300" height="200" /> 
        <rect x="18" y="23" rx="3" ry="3" width="300" height="200" /> 
        <rect x="166" y="23" rx="3" ry="3" width="300" height="200" />
      </ContentLoader>
    )
}
