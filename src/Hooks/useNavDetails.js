import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const useNavDetails = () => {
    let navDetails = {};
    const router = useRouter();
    const { nav } = router.query;
    const path = router.asPath;
    const productId = router?.query?.id;
    const typeid = router?.query?.typeid
    const infoid = router?.query?.infoid

    navDetails = { ...navDetails, productId, typeid, path, infoid };

    nav?.forEach((category, i) => {
        if (!navDetails.category) {
            navDetails = { ...navDetails, [`category`]: category };
        } else if (!navDetails.subcategory) {
            navDetails = { ...navDetails, [`subcategory`]: category };
        } else {
            navDetails = { ...navDetails, [`subcategory`.concat(`${i}`)]: category.replace("/", " ") };
        }
    });
    return navDetails;
};

export default useNavDetails;
