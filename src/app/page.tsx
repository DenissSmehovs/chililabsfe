import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <><h1>Welcome To Phone Store</h1><Link href={`/category/`}>View Category</Link></>
  );
}
