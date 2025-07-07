import Head from "next/head";
import Footer from "./component/Footer";
import Get from "./component/Get";
import Header from "./component/Header";
import ProductCard from "./component/ProductCard";

export default async function page() {
  return (
    <>
      <Head>
        <title>Free Fire Top-Up - Cheap Diamonds & Instant Recharge | Game Shop</title>
        <meta name="description" content="Top-up Free Fire diamonds instantly at the lowest prices. Buy 50 to 10400 FF diamonds with secure and fast delivery across Indonesia and India." />
        <meta name="keywords" content="free fire top-up, free fire diamond top-up, buy free fire diamonds, cheap free fire recharge, instant ff diamond top-up, ff diamonds indonesia, free fire diamond price" />
        <meta property="og:title" content="Free Fire Diamond Top-Up - Instant & Affordable Recharge" />
        <meta property="og:description" content="Buy Free Fire diamonds online at the best prices. Fast FF diamond top-up with secure payment for Indonesia and India." />
        <meta property="og:image" content="/freefire.jpg" />
        <meta property="og:url" content="https://topupsewa.games/" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Free Fire Diamonds",
            "description": "Purchase Free Fire diamond for your gaming account",
            "brand": {
              "@type": "Brand",
              "name": "Free Fire"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "INR",
              "lowPrice": "65",
              "highPrice": "1000",
              "offerCount": "1"
            }
          })}
        </script>
      </Head>
      
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header/>
        <main className="text-gray-900 dark:text-white">
          <h1 className="learn text-center p-2 bg-red-50 dark:bg-red-900/20 mb-2 text-gray-900 dark:text-white">Product</h1>

          <div className="flex justify-center flex-wrap ml-2 gap-4">
            <ProductCard name="FreeFire" price="Rs 65 -- Rs 1000" img="freefire.jpg" Url="/freefire-diamond-topup"/>
            <ProductCard name="Coming Soon" price="Rs" img="comming.png"/>
            <ProductCard name="Coming Soon" price="$1.00" img="comming.png"/>
            <ProductCard name="Coming Soon" price="$1.00" img="comming.png"/>
          </div>

          <h1 className="learn text-center p-2 bg-red-50 dark:bg-red-900/20 mt-2 mb-2 text-gray-900 dark:text-white">Subscription</h1>
          <div className="flex justify-center flex-wrap ml-2 gap-4">
            <ProductCard name="Coming Soon" price="Rs 99" img="pugb-comp.jpg" Url="/student-github"/>
            <ProductCard name="Coming Soon" price="$1.00" img="comming.png"/>
            <ProductCard name="Coming Soon" price="$1.00" img="comming.png"/>
            <ProductCard name="Coming Soon" price="$1.00" img="comming.png"/>
          </div>

          <h1 className="learn text-center p-2 bg-red-50 dark:bg-red-900/20 mt-2 mb-2 text-gray-900 dark:text-white">Gift Card</h1>
          <div className="flex justify-center flex-wrap ml-2 gap-4">
            <ProductCard name="Coming Soon" price="$6.00" img="comming.png"/>
            <ProductCard name="Coming Soon" price="$1.00" img="comming.png"/>
            <ProductCard name="Coming Soon" price="$1.00" img="comming.png"/>
            <ProductCard name="Coming Soon" price="$1.00" img="comming.png"/>
          </div>
          
          <div className="h-[50vh] overflow-y-auto">
            <Get/>
          </div>
        </main>
        <Footer/>
      </div>
    </>
  );
}
