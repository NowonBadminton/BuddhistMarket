import Link from 'next/link';
import Image from 'next/image';
import { original } from '../content/product/original';

export const metadata = {
    title: 'Original',
};

const top3 = original.slice(0, 3);
const after4 = original.slice(3, 7);

export default function Original () {
    return (
        <div className="w-full h-full">
            <div className="flex h-2/3">
                {top3.map(item=>(
                    <Link href={`/original/${item.alt}`} className="w-1/3 h-full hover:opacity-75 transition-opacity relative" key={item.id}>
                        <Image src={item.url} alt={item.alt} layout="fill" objectFit="cover"/>
                        <p className="absolute bottom-4 left-1 text-white">제목 : {item.alt}</p>
                    </Link>
                ))}
            </div>
            <div className="flex h-1/3">
                {after4.map(item=>(
                    <Link href={`/original/${item.alt}`} className="w-1/4 h-full hover:opacity-75 transition-opacity relative" key={item.id}>
                        <Image src={item.url} alt={item.alt} layout="fill" objectFit="cover"/>
                        <p className="absolute bottom-4 left-1 text-white">제목 : {item.alt}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

