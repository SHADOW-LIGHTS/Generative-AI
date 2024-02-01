import Image from "next/image";

export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-9 relative animate-spin">
        <Image alt="Logo" src="/mlogo.png" fill />
      </div>
      <p className="text-sm text-muted-foreground">Genius is thinking...</p>
    </div>
  );
};
