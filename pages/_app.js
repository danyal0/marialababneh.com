import '../styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#F5F5DC" />
        <meta name="description" content="Maria Lababneh — PhD Candidate in Health Sciences at University of Wisconsin–Milwaukee, dedicated to advancing veteran mental health through innovative research and community partnerships." />
        <meta name="keywords" content="Maria Lababneh, PhD candidate, Health Sciences, veteran mental health, stress research, depression, UWM, University of Wisconsin Milwaukee" />
        <meta name="author" content="Maria Lababneh" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Maria Lababneh — PhD Candidate, Health Sciences" />
        <meta property="og:description" content="Advancing veteran mental health through innovative research and community partnerships." />
        <meta property="og:image" content="/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maria Lababneh — PhD Candidate, Health Sciences" />
        <meta name="twitter:description" content="Advancing veteran mental health through innovative research and community partnerships." />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        <title>Maria Lababneh — PhD Candidate, Health Sciences</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
