import Link from "next/link";
import Image from 'next/image';

export const metadata = {
    title: 'Original',
};

export default function Original () {
    return (
        <div className="w-full h-full">
            <div className="flex h-2/3">
                {top3.map(item=>(
                    <Link href={`/original/${item.alt}`} className="w-1/3 h-full hover:opacity-75 transition-opacity relative" key={item.id}>
                        <Image src={item.url} alt={item.alt} layout="fill" objectFit="cover"/>
                    </Link>
                ))}
            </div>
            <div className="flex h-1/3">
                {after4.map(item=>(
                    <Link href={`/original/${item.alt}`} className="w-1/4 h-full hover:opacity-75 transition-opacity relative" key={item.id}>
                        <Image src={item.url} alt={item.alt} layout="fill" objectFit="cover"/>
                    </Link>
                ))}
            </div>
        </div>
    );
}

const original = [
    {
    id: 1,
    type: 'original',
    alt: '1',
    url: '/images/1.jpg',
    },
    {
    id: 2,
    type: 'original',
    alt: '2',
    url: '/images/2.jpg',
    },
    {
    id: 3,
    type: 'original',
    alt: '3',
    url: '/images/3.jpg',
    },
    {
    id: 4,
    type: 'original',
    alt: '4',
    url: '/images/4.jpg',
    },
    {
    id: 5,
    type: 'original',
    alt: '5',
    url: '/images/5.jpg',
    },
    {
    id: 6,
    type: 'original',
    alt: '6',
    url: '/images/6.jpg',
    },
    {
    id: 7,
    type: 'original',
    alt: '7',
    url: '/images/7.jpg',
    },
];
const top3 = original.slice(0, 3);
const after4 = original.slice(3, 7);