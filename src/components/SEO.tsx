import { Helmet } from 'react-helmet';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO = ({ 
  title, 
  description, 
  keywords = "SER-ECF, evangelical churches, South Ethiopia, peacebuilding, leadership training, ministry",
  image = "https://serecf.org/favicon.jpg",
  url = "https://serecf.org"
}: SEOProps) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title} | SER-ECF</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph (Facebook, LinkedIn) */}
      <meta property="og:title" content={`${title} | SER-ECF`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      
      {/* Optional: Facebook App ID - remove if you don't have one */}
      {/* <meta property="fb:app_id" content="YOUR_APP_ID" /> */}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | SER-ECF`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;