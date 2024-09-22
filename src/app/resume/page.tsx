
export default function Resume() {
    return (
      <div className="flex flex-col items-center space-y-8 max-sm:px-4">
        <h1 className="text-3xl font-bold my-8">My Resume</h1>
        <div className="w-full max-w-3xl bg-gray-800 p-8 rounded-lg  ">
          <iframe
            src="/assests/resume.pdf"
            className="w-full h-[800px]"
            title="Resume PDF"
          >
            </iframe>
        </div>
        
      </div>
    )
  }