/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Gallery from './components/Gallery';
import { Camera } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center gap-3">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <Camera className="w-6 h-6 text-indigo-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Photo Gallery</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto">
        <Gallery />
      </main>
    </div>
  );
}
