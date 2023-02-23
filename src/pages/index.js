// import Head from 'next/head'
import Image from "next/image";
// import { Inter } from '@next/font/google'
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/dashboard");
  }, [router]);
  return <></>;
}
