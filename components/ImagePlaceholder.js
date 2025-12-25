// Placeholder component for images
// Replace with actual <Image> components when you add real photos

export default function ImagePlaceholder({ 
  width = '100%', 
  height = '300px', 
  icon, 
  text = 'Image Placeholder',
  gradient = 'from-[#D4AF6A] to-[#C19A6B]'
}) {
  return (
    <div 
      className={`relative bg-gradient-to-br ${gradient} rounded-2xl overflow-hidden shadow-lg flex items-center justify-center`}
      style={{ width, height }}
    >
      <div className="text-center text-white p-8">
        {icon && (
          <div className="mb-4 animate__animated animate__bounceIn">
            {icon}
          </div>
        )}
        <p className="text-sm font-medium opacity-80">{text}</p>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
    </div>
  );
}

/* 
USAGE EXAMPLE:

import ImagePlaceholder from './ImagePlaceholder';

<ImagePlaceholder 
  height="400px"
  text="Research Lab Photo"
  icon={
    <svg className="w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  }
/>

TO REPLACE WITH REAL IMAGE:
Replace the ImagePlaceholder component with:

import Image from 'next/image';

<Image 
  src="/images/your-photo.jpg"
  alt="Description"
  width={800}
  height={600}
  className="rounded-2xl object-cover"
/>
*/
