import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      <h1 className="text-5xl text-white font-bold mb-8 animate-pulse">
        Тун удахгүй ⚙️
      </h1>
      <p className="text-white text-lg mb-8">
        Манай вебсайт тун удахгүй дуусах гэж байна. Та түр хүлээгээрэй!
      </p>
    </div>
  );
}
