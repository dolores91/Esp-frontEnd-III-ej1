import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from "react";
import { Character } from '../interface';
import { Navbar } from '@/components/ui/Navbar/Navbar';
import { Card } from '@/components/ui/Card/Card';
import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { Layout } from '@/components/layouts';
import { defaultLocale } from '@/locale/constants';
import { CONTENT_BY_LOCALE } from '@/locale';
import { getCharacters } from '@/services';

interface Props {
  characters: Character[];
}

const Home: NextPage<Props> = ({ characters }) => {

  const { locale = defaultLocale } = useRouter();

  const localeConten = CONTENT_BY_LOCALE[locale as keyof typeof CONTENT_BY_LOCALE]

  const { home } = localeConten;

  return (
    <>
      <Layout title='Home - Ecommerce'>
        <h1>{home.title}</h1>
        <div className={styles.grid}>
          {characters?.map((character) => (
            <Card key={character.tail} character={character} />
          ))}
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {

  const data = await getCharacters()

  return {
    props: {
      characters: data
    }
  }
};

export default Home;