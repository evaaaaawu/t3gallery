import { getImage } from "~/server/queries";
import Image from "next/image";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  
  return (
    <Image 
      src={image.url} 
      alt={image.name}
      style={{ objectFit: "contain" }}
      width={400}
      height={400}
    />
  );
}
