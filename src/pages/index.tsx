import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from "react";
import { Character } from '../interface';
import { Navbar } from '@/components/ui/Navbar/Navbar';
import { Card } from '@/components/ui/Card/Card';
import homeContentEn from '@/locale/en/home';
import homeContentEs from '@/locale/es/home';
import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { Layout } from '@/components/layouts';

interface Props {
  characters: Character[];
}

const Home: NextPage<Props> = ({ characters }) => {

  const { locale, defaultLocale } = useRouter();

  // console.log(locale);

  const content = locale === 'es' ? homeContentEs : homeContentEn;

  // console.log(content);

  return (
    <>
      <Layout title='Ecommerce App - DH' description='Ecommerce de Figuras coleccionables, Mario, Luigi'>
        <h1>{content.title}</h1>
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
  const character = await fetch("https://amiiboapi.com/api/amiibo/");
  const rest = await character.json();
  const data = rest.amiibo.slice(0, 20);

  return {
    props: {
      characters: data,
    },
  };
};

export default Home;