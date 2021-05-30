import Head from 'next/head';
import HomeHero from '../comps/organisms/HomeHero';
import LatestJobSection from '../comps/organisms/LatestJobSection';

export default function Home() {
  return (
    <>
      <HomeHero />
      <LatestJobSection />
    </>
  )
}
