import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: any) {
  const t = await getTranslations("Breadcrumbs");
  return {
    title: t("contacts"),
  };
}

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}