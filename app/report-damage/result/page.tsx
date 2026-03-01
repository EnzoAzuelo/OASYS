import Link from 'next/link';

export default function ResultPage() {
  return (
    <div className="pt-32 px-10 min-h-screen">
      <div className="bg-dark-card p-12 shadow-2xl">
        <div className="mb-10">
          <p className="text-oasysBlue font-bold mb-1">Analyze Results</p>
          <h1 className="text-6xl font-black text-white">Road Damage Report</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* File Info Card */}
          <div className="bg-[#D9D9D9] rounded-[30px] p-6 text-black flex flex-col">
            <div className="bg-zinc-600 rounded-2xl w-full h-52 mb-6" /> {/* Image Preview Placeholder */}
            <h2 className="text-3xl font-black mb-4">File_Name.jpg</h2>
            <div className="space-y-1 text-sm font-bold">
              <p>Detected Damage Type: .........</p>
              <p>Severity Level:</p>
              <p>Location:</p>
            </div>
          </div>

          {/* Recommendations Card */}
          <div className="bg-[#D9D9D9] rounded-[30px] p-8 text-black">
            <h2 className="text-3xl font-black mb-6">Recommendation:</h2>
            <ul className="space-y-2 list-disc list-inside font-bold">
              <li>LINE 1</li>
              <li>LINE 2</li>
              <li>LINE 3</li>
              <li>LINE 4</li>
              <li>LINE 5</li>
              <li>LINE 6</li>
            </ul>
          </div>

          {/* Severity Meter Section */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#D9D9D9] rounded-[30px] p-6 text-black flex flex-col items-center">
              <h2 className="text-3xl font-black mb-6 self-start">Severity Level</h2>
              
              {/* The Multi-Color Bar */}
              <div className="w-32 bg-black rounded-2xl p-3 border-4 border-gray-400">
                <div className="flex flex-col gap-1 text-[10px] text-white font-bold text-center">
                  <div className="bg-red-600 h-10 flex items-center justify-center">Critical</div>
                  <div className="bg-orange-500 h-10 flex items-center justify-center">Severe</div>
                  <div className="bg-yellow-400 h-10 flex items-center justify-center text-black">Moderate</div>
                  <div className="bg-green-500 h-10 flex items-center justify-center">Minor</div>
                </div>
              </div>
            </div>

            <Link href="/" className="btn-blue w-full flex items-center justify-between px-8">
              <span>Proceed</span>
              <span className="w-5 h-5 bg-white rounded-full" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}