import Image from "next/image";

interface EmptyProps {
  label: string;
}

const Empty = ({ label }: EmptyProps) => {
  return (
    <div className=" p-20 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72">
        <Image alt="Empty" src="/no_data.svg" fill />
      </div>
      <p className="text-muted-foreground text-sm  text-center">{label}</p>
    </div>
  );
};

export default Empty;