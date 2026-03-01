import Link from 'next/link';

export default function UploadMediaPage() {
  return (
    <div className="pt-32 px-10 min-h-screen">
      {/* Main Container */}
      <div className="bg-dark-card p-12 shadow-2xl min-h-[700px] flex flex-col relative overflow-hidden">
        
        {/* Header Section */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <p className="text-oasysBlue font-bold text-sm uppercase tracking-[0.2em] mb-2">
              Scan Road Condition
            </p>
            <h1 className="text-7xl font-black text-white leading-tight">
              Upload <br /> Media
            </h1>
          </div>
          
          <div className="text-right flex flex-col items-end">
            <p className="text-oasysBlue font-bold text-sm mb-4">
              AI-Powered Detection System
            </p>
            <div className="flex items-center gap-4">
              <span className="text-gray-400 italic text-sm">
                Get instant severity feedback
              </span>
              <Link href="/upload-media/result" className="btn-blue flex items-center gap-4 px-10">
                Proceed
                <span className="w-5 h-5 bg-white rounded-full" />
              </Link>
            </div>
          </div>
        </div>

        {/* Centralized Upload Dropzone - Matching upload_media.png */}
        <div className="flex-grow flex items-center justify-center mt-4">
          <div className="w-full h-full min-h-[450px] bg-[#D9D9D9] border-4 border-dashed border-oasysBlue/40 rounded-[40px] flex flex-col items-center justify-center text-black group hover:border-oasysBlue transition-all cursor-pointer">
            {/* Plus Icon Circle */}
            <div className="w-24 h-24 bg-oasysBlue rounded-full mb-8 flex items-center justify-center text-white text-5xl font-light shadow-lg group-hover:scale-110 transition-transform">
              +
            </div>
            
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-2">
              Drag or Upload Media Here
            </h2>
            <p className="text-gray-600 font-bold text-lg">
              Supports MP4, JPG, and PNG formats
            </p>
            
            {/* Visual Decoration / Instructions */}
            <div className="mt-12 flex gap-8 opacity-40">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 border-2 border-black rounded-lg mb-2" />
                <span className="text-[10px] font-bold">IMAGE</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 border-2 border-black rounded-lg mb-2 relative">
                   <div className="absolute inset-2 bg-black rounded-sm" />
                </div>
                <span className="text-[10px] font-bold">VIDEO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}