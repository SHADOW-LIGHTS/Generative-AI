const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-gray-50 mx-auto min-h-screen flex items-center justify-center px-8 overflow-auto">
      {children}
      <div className="animate-blobani absolute top-6 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blobright"></div>
      <div className="animate-blobani absolute top-20 left-56 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blobleft"></div>
      <div className="animate-blobani absolute bottom-44 right-48 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blobleft"></div>
      <div className="animate-blobani absolute top-52 left-96 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blobright"></div>
    </main>
  );
};

export default LandingLayout;
