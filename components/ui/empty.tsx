import Image from "next/image";

interface ChatProps {
  label: string;
}

export const Chat = ({ label }: ChatProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72">
        <Image src="/nchat.png" fill alt="Chat" />
      </div>
      <p className="text-muted-foreground text-sm text-center">{label}</p>
    </div>
  );
};
interface ErrrProps {
  label: string;
}

export const Errr = ({ label }: ErrrProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72">
        <Image src="/errr.png" fill alt="Chat" />
      </div>
      <p className="text-muted-foreground text-sm text-center">{label}</p>
    </div>
  );
};

interface MusicsProps {
  label: string;
}

export const Musics = ({ label }: MusicsProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72">
        <Image src="/music.png" fill alt="Chat" />
      </div>
      <p className="text-muted-foreground text-sm text-center">{label}</p>
    </div>
  );
};

interface PhotoProps {
  label: string;
}

export const Photo = ({ label }: PhotoProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72">
        <Image src="/nphoto.png" fill alt="Chat" />
      </div>
      <p className="text-muted-foreground text-sm text-center">{label}</p>
    </div>
  );
};

interface VideosProps {
  label: string;
}

export const Videos = ({ label }: VideosProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72">
        <Image src="/video.png" fill alt="Chat" />
      </div>
      <p className="text-muted-foreground text-sm text-center">{label}</p>
    </div>
  );
};

interface CodingProps {
  label: string;
}

export const Coding = ({ label }: CodingProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72">
        <Image src="/code.png" fill alt="Chat" />
      </div>
      <p className="text-muted-foreground text-sm text-center">{label}</p>
    </div>
  );
};
