import { getImage } from "~/server/queries";
import Image from "next/image";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  
  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex-shrink flex justify-center items-center">
        <Image
          src={image.url} 
          alt={image.name}
          style={{ objectFit: "contain" }}
          width={400}
          height={400}
        />
      </div>
      
      <div className="w-48 flex flex-col flex-shrink-0">
        <div className="text-xl font-bold">{image.name}</div>
      </div>
    </div>
  );
}
