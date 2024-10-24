import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center">
      <div className="text-center">
        <Image src={'/sad-figure.png'} alt="sad-figure" width={256} height={256} />
        <h2 className="mb-4 text-2xl font-bold">Not Found</h2>
        <Link href="/" className="link">
          돌아가기
        </Link>
      </div>
    </div>
  );
}
