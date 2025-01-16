import { getImage } from "~/server/queries";
import Image from "next/image";

export default async function PhotoModal(props: { params: { id: string } }) {
  const { id: photoId } = props.params;

  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");
  
  const image = await getImage(idAsNumber);
  
  return (
    <div>
      <Image 
        src={image.url} 
        alt={image.name}
        style={{ objectFit: "contain" }}
        width={400}
        height={400}
      />
    </div>
  );
}
