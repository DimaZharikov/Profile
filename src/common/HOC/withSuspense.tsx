import {ComponentType, Suspense } from "react"
import Loader from "../Loader/Loader";

export function withSuspense<WCP>(WrappedComponent:ComponentType<WCP>) {
    return (props: WCP) => {
        return <Suspense fallback={<Loader/>} >
            <WrappedComponent {...props} />
        </Suspense>
    }
}