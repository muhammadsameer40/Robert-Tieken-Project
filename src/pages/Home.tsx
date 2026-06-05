import HeroSection from '../components/home/HeroSection';
import BlurbSection from '../components/home/BlurbSection';
import BooksShowcase from '../components/home/BooksShowcase';
import AuthorTeaser from '../components/home/AuthorTeaser';

export default function Home() {
  return (
    <>
      <HeroSection />
      <BlurbSection />
      <BooksShowcase />
      <AuthorTeaser />
    </>
  );
}
