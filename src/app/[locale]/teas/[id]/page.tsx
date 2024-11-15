"use client";

import BrewBlock from "../components/BrewBlock/BrewBlock";
import DescriptionBlock from "../components/DescriptionBlock/DescriptionBlock";
import { useState } from "react";
import LastReview from "../components/LastReview/LastReview";
import { useProduct } from "@/components/Providers/ContextProvider";

const TeaDetails = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const { findProductById } = useProduct();
  const [product, setProduct] = useState(findProductById(Number(id)));
  return (
    <main>
      <div className="container text-[var(--blue-light)] teas-seo">
        <DescriptionBlock product={product} />
        <BrewBlock product={product} />
        <LastReview />
      </div>
    </main>
  );
};

export default TeaDetails;
