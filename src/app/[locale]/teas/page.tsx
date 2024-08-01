import { useLocale } from "next-intl";
import { redirect } from "next/navigation";

const TeasPage = () => {
  const lang = useLocale();
  redirect(`/${lang}/menu`);
};

export default TeasPage;
