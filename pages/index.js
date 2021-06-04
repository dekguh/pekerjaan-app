import Head from 'next/head';
import HomeHero from '../comps/organisms/HomeHero';
import LatestJobSection from '../comps/organisms/LatestJobSection';
import { jsonListDataJob } from '../comps/utils/json/data';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pekerjaan.APP | Beranda</title>
      </Head>
      <HomeHero />
      <LatestJobSection classes='margin-top-50' dataLatest={jsonListDataJob} />
    </>
  )
}
