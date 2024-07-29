"use client";

// import { doc, getDoc } from "firebase/firestore";
// import { db } from "@/config/firebase";
// import { Header } from "@/components";
// import Footer from "@/components/Footer/Footer";
import BrewBlock from "../components/BrewBlock/BrewBlock";
import DescriptionBlock from "../components/DescriptionBlock/DescriptionBlock";
// import Breadcrumbs from "@/ui-kit/Breadcrumbs/Breadcrumbs";
import { useEffect, useState } from "react";
import InstructionBlock from "../components/InstructionBlock/InstructionBlock";
import LastReview from "../components/LastReview/LastReview";
import { useProduct } from "@/components/Providers/ContextProvider";
import { useProductCart } from "@/components/Providers/ProductCartProvider";

const TeaDetails = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const { findProductById } = useProduct();
  const [product, setProduct] = useState(findProductById(Number(id)));
  console.log(product);
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

// import {useParams} from "react-router-dom";
