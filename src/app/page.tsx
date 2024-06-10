"use client";
import Link from "next/link";
import "@/styles/app.module.css";
import AppTable from "@/components/app.table";
import useSWR from "swr";

export default function Home() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  if(!data) {
    return <div>Loading...</div>
  }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("http://localhost:8000/blogs");
  //     const data = await res.json()
  //   };
  //   fetchData();
  // }, []);
  return (
    <main>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <AppTable
      blogs={data}
      />
    </main>
  );
}
