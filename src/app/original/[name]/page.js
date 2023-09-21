import Image from "next/image";


export default function OriginalDetail({ params }) {
    const name = params.name.slice(0, 1);
    return (
        <>
            <div className="p-5 flex justify-center items-center gap-4 h-full">
                <div className="w-1/2 h-2/3 relative">
                    <Image src={`/images/${name}.jpg`} alt={params.name} sizes="(max-width: 768px) 70vw, 40vw" fill={true} className="w-auto h-auto"></Image>
                    <button className="absolute text-white top-1/2 left-1/2 -translate-x-1/2">🔎확대 보기</button>
                </div>
                <div className="w-1/3 h-2/3 flex flex-col justify-between">
                    <h2 className="font-bold text-5xl">이름 : {name}</h2>
                    <h3>작가 : </h3>
                    <h4>타입 : </h4>
                    <h5>크기 : </h5>
                    <h6>가격 : </h6>
                    <p>설명 : 이것은 {name} 사진입니다.</p>
                    <div>
                        <button className="mr-4 p-4 bg-slate-500">장바구니</button>
                        <button className="p-4 bg-slate-500">바로구매</button>
                    </div>
                </div>
            </div>
        </>
    );
}
