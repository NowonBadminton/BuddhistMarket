import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-gradient-to-t from-gray-600 to-black h-full flex justify-center items-center relative">
      <Image src="/images/main.jpg" alt="mainImage" sizes="100vw" priority={true} fill={true} style={{ objectFit: "cover" }} className="w-full h-full opacity-80" />
    </div>
  );
}
