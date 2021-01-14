import Image from 'next/image'

export default function Header() {
  return (
    <div className="flex flex-row justify-center items-center max-w-4xl mx-auto">
      <div className="flex-grow">
        <Image src="/adithi.png" height={80} width={80}/>
      </div>
      <div className="text-gray-800"><h3>#screwperfect</h3></div>
    </div>
  );
}
