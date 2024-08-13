import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: any) {
  const t = await getTranslations("Breadcrumbs");
  return {
    title: t("password_reset"),
  };
}

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
