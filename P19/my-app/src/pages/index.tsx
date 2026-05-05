import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { GetStaticProps } from 'next'

const inter = Inter({ subsets: ['latin'] })

interface HomeProps {
  appName: string
}

export default function Home({ appName }: HomeProps) {
  return (
    <div>
      <Head>
        <title>{appName}</title>
      </Head>
      <h1>{appName}</h1> <br />
      <p>Mahasiswa D4 Pengembangan Web</p>
    </div>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const appName = process.env.APP_NAME || 'MyApp'
  
  return {
    props: {
      appName,
    },
    revalidate: 3600,
  }
}
