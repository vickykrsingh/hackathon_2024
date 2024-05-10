import Image from "next/image";
import foodImage from '@/../public/food-feed.jpg'
import Card from "@/components/Card";
import axios from "axios";

export default async function Home() {
  const {data} = await axios.post('http://localhost:5173/api/v1/food/fetch',{
    foodName:'chapati'
  })
  console.log(data);
  return (
    <main className="w-full min-h-screen py-4">
      <Image src={foodImage} alt="food-feed" className="max-h-96 object-cover border-2"  />
      <div className="text-2xl font-semibold my-2">Available Food</div>
      <section className="flex items-center justify-around gap-2 mt-2 rounded-sm flex-wrap">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </section>
    </main>
  );
}
