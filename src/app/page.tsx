import BASE_PATH_FORAPI from "@/components/shared/BasePath";
import {
  oneProductType,
  responseType,
} from "@/components/utils/ProductsDataArrayAndType";
import Hero from "@/components/view/Hero";
import Jewellery from "@/components/view/Jewellery";
import Newslatter from "@/components/view/NewsLatter";
import ProductCarousel from "@/components/view/ProductCarousel";
import ProductsType from "@/components/view/productType";

async function fetchAllProductsData() {
  let res = await fetch(
    `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-08-22/data/query/production?query=*[_type == "products"]`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
}

export default async function Home() {
  let { result }: responseType = await fetchAllProductsData();
  return (
    <div className="overflow-hidden">
      <Hero />
      <ProductsType />
      <ProductCarousel ProductData={result} />
      <Jewellery />
      <Newslatter />
    </div>
  );
}
