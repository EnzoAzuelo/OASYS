"use client";

export default function LoginModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      {/* Modal Container */}
      <div className="relative w-full max-w-md bg-[#262626] rounded-[40px] p-10 shadow-2xl border border-white/10">
        
        {/* Brand */}
        <h2 className="text-blue-500 font-bold text-2xl mb-8">OASYS</h2>

        {/* Profile Circle Placeholder */}
        <div className="flex justify-center mb-10">
          <div className="w-32 h-32 bg-gray-300 rounded-full" />
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <div className="bg-white rounded-md p-1">
            <label className="block text-xs font-bold text-black px-2 pt-1">Email:</label>
            <input 
              type="email" 
              className="w-full px-2 pb-1 text-black outline-none" 
            />
          </div>

          <div className="bg-white rounded-md p-1">
            <label className="block text-xs font-bold text-black px-2 pt-1">Password:</label>
            <input 
              type="password" 
              className="w-full px-2 pb-1 text-black outline-none" 
            />
          </div>
        </div>

        <div className="text-right mt-2">
          <button className="text-[10px] text-gray-400 hover:text-white transition-colors">
            Forgot Password?
          </button>
        </div>

        {/* Buttons */}
        <div className="mt-10 space-y-3">
          <button className="w-full bg-[#3b82f6] hover:bg-blue-600 text-white font-bold py-3 rounded-full transition-all">
            Log in
          </button>
          <button className="w-full bg-[#3b82f6] hover:bg-blue-600 text-white font-bold py-3 rounded-full transition-all">
            Sign Up
          </button>
        </div>

        {/* Close Button (Optional but helpful) */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-8 text-gray-400 hover:text-white"
        >
          ✕
        </button>
      </div>
    </div>
  );
}