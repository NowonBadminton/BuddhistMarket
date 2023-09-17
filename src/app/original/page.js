import Link from 'next/link';
import Image from 'next/image';
import { original } from '../content/product/original';

export const metadata = {
    title: 'Original',
};

const top3 = original.slice(0, 3);
const after4 = original.slice(3, 7);

export default function Original() {
    return (
        <div className="w-full h-full">
            <div className="grid-container top3">
                {top3.map(item => (
                    <Link href={`/original/${item.alt}`} className="grid-item" key={item.id}>
                        <Image src={item.url} alt={item.alt} sizes="(max-width: 768px) 100vw, 33vw" fill={true} style={{ objectFit: "cover" }} className='w-full h-full' />
                        <p className="absolute bottom-4 left-1 text-white">제목 : {item.alt}</p>
                    </Link>
                ))}
            </div>
            <div className="grid-container after4">
                {after4.map(item => (
                    <Link href={`/original/${item.alt}`} className="grid-item" key={item.id}>
                        <Image src={item.url} alt={item.alt} sizes="(max-width: 1024px) 50vw, 25vw" fill={true} style={{ objectFit: "cover" }} className='w-full h-full' />
                        <p className="absolute bottom-4 left-1 text-white">제목 : {item.alt}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
