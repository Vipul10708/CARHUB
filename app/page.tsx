"use client";
import Image from "next/image";   
import Hero from "@/components/hero";
import { CustomFilter, SearchBar } from "@/components"; 
export default function Home() {
  return (
    
    <main className="overflow-hidden">
      <Hero/>
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100;">
        <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
        <p> Explore the cars you like </p>
        </div>
        <div className="mt-12 w-full flex-between items-center flex-wrap gap-5;"> 
          <SearchBar/>
          <div className="justify-start flex-wrap items-center gap-2;">
          <CustomFilter title="fuel"/>
          <CustomFilter title="year"/>
          </div>
          </div>
          </div>
       
    </main>
  );
}
