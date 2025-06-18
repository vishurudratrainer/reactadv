import { lazy,Suspense } from "react";
const LazyComponent = lazy(()=>import("./LazyComponent"))

const LoadLazy =() =>{
    return(<div>
        <Suspense fallback={<div>App is loading</div>}>
        <LazyComponent/>
        </Suspense>
    </div>)
}

export default LoadLazy

