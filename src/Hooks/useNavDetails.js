import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const useNavDetails = () => {
  let navDetails = {};
  const router = useRouter();
  const { nav } = router.query;
  const path = router.asPath;
  const productId = router?.query?.id;
  navDetails = { ...navDetails, productId, path };

  nav?.forEach((category, i) => {
    if (!navDetails.category) {
      navDetails = { ...navDetails, [`category`]: category };
    } else if (!navDetails.subcategory) {
      navDetails = { ...navDetails, [`subcategory`]: category };
    } else {
      navDetails = { ...navDetails, [`subcategory`.concat(`${i}`)]: category };
    }
  });

  return navDetails;
};

export default useNavDetails;
