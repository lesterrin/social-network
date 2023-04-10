import Loader from "../loader";
import React, {Suspense} from "react";

const WithSuspense = ({component}) => {
    return <Suspense fallback={<Loader/>}>{component}</Suspense>
}

export default WithSuspense;