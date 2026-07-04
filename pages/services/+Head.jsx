// pages/services/+Head.jsx
// Head configs are CUMULATIVE in vike-react: this file also renders on
// /services/@slug pages. Only emit the index canonical when there is no
// slug, otherwise sub-service pages get TWO canonical tags.
import { usePageContext } from "vike-react/usePageContext";

export default function Head() {
  const { routeParams } = usePageContext();
  if (routeParams?.slug) return null;
  return (
    <link
      rel="canonical"
      href="https://www.skyupdigitalsolutions.com/services"
    />
  );
}