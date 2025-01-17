import { getImage } from "~/server/queries";
import Image from "next/image";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  
  return (
    <div className="flex h-full w-full justify-between">
      <div className="flex-shrink flex justify-center items-center">
        <Image
          src={image.url} 
          alt={image.name}
          style={{ objectFit: "cover" }}
          width={400}
          height={400}
        />
      </div>
      <div className="w-48 flex flex-col flex-shrink-0 border-l">
        <div className="text-lg border-b text-center p-2">{image.name}</div>
        <div className="flex flex-col p-2">
          <span>Created On:</span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}
