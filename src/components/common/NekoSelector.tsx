// import React, { useEffect, useState } from 'react';

// const NEKOS = [
//   { id: 'white', label: 'White', file: '/oneko/sprites/white.gif', thumb: '/oneko/thumbs/white.png' },
//   { id: 'purple', label: 'Purple', file: '/oneko/sprites/purple.png', thumb: '/oneko/thumbs/purple.png' },
//   { id: 'hero', label: 'Hero', file: '/oneko/sprites/hero.gif', thumb: '/oneko/thumbs/hero.png' },
//   { id: 'anshul', label: 'Anshul Doll', file: '/assets/logo.png', thumb: '/assets/logo.png' },
// ];

// export default function NekoPicker() {
//   const [choice, setChoice] = useState<string>(() => (typeof window !== 'undefined' && localStorage.getItem('neko.choice')) || '/oneko/oneko.gif');
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     // Function to add click listener to neko element
//     const addClickListener = () => {
//       const nekoEl = document.getElementById('oneko');
//       if (nekoEl) {
//         // Remove existing listener if any
//         nekoEl.removeEventListener('click', handleNekoClick);
        
//         // Add new listener
//         nekoEl.style.cursor = 'pointer';
//         nekoEl.addEventListener('click', handleNekoClick);
        
//         console.log('Neko click listener added successfully');
//         return true;
//       }
//       return false;
//     };

//     // Handle neko click
//     const handleNekoClick = (e: MouseEvent) => {
//       e.stopPropagation();
//       console.log('Neko clicked!');
//       setIsOpen(true);
//     };

//     // Try immediately
//     if (addClickListener()) {
//       return;
//     }

//     // If not found, try multiple times with delays
//     const delays = [100, 500, 1000, 2000, 3000];
//     let timeoutId: NodeJS.Timeout;

//     const tryAddListener = (index: number) => {
//       if (index < delays.length) {
//         timeoutId = setTimeout(() => {
//           if (!addClickListener()) {
//             tryAddListener(index + 1);
//           }
//         }, delays[index]);
//       }
//     };

//     tryAddListener(0);

//     // Cleanup
//     return () => {
//       if (timeoutId) {
//         clearTimeout(timeoutId);
//       }
//       const nekoEl = document.getElementById('oneko');
//       if (nekoEl) {
//         nekoEl.removeEventListener('click', handleNekoClick);
//       }
//     };
//   }, []);

//   function selectNeko(file: string) {
//     localStorage.setItem('neko.choice', file);
//     setChoice(file);
    
//     // Update the existing neko element
//     const nekoEl = document.getElementById('oneko');
//     if (nekoEl) {
//       nekoEl.style.backgroundImage = `url(${file})`;
//     }
    
//     setIsOpen(false);
//   }

//   if (!isOpen) return null;

//   return (
//     <div 
//       className="fixed inset-0 bg-black/60 z-[2147483646] flex items-center justify-center"
//       onClick={() => setIsOpen(false)}
//     >
//       {/* Small rectangle with oneko images */}
//       <div 
//         className="bg-white rounded-lg shadow-xl p-4 relative z-[2147483647]"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="grid grid-cols-2 gap-2">
//           {NEKOS.map(n => (
//             <button 
//               key={n.id} 
//               onClick={() => selectNeko(n.file)} 
//               className={`border-2 rounded p-2 transition-all hover:scale-110 ${
//                 choice === n.file ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'
//               }`}
//               title={n.label}
//             >
//               <img 
//                 src={n.thumb} 
//                 alt={n.label} 
//                 width={64} 
//                 height={64}
//                 className="object-contain"
//                 onError={(e) => {
//                   const target = e.target as HTMLImageElement;
//                   if (n.id === 'anshul') {
//                     // Fallback for logo.png
//                     target.src = '/assets/logo.png';
//                   } else {
//                     // Fallback for missing oneko images
//                     target.style.display = 'none';
//                     const fallback = document.createElement('div');
//                     fallback.className = 'w-16 h-16 flex items-center justify-center text-2xl';
//                     fallback.textContent = '🐱';
//                     target.parentNode?.appendChild(fallback);
//                   }
//                 }}
//               />
//             </button>
//           ))}
//         </div>
        
//         {/* Selected indicator */}
//         <div className="text-center mt-3 text-xs text-gray-600">
//           {NEKOS.find(n => n.file === choice)?.label} selected
//         </div>
//       </div>
//     </div>
//   );
// }