"use client"

import { Loader } from "@/components/ui/loader"

const Loading = () => {
    return (
        <div className="flex h-full w-full items-center justify-center backdrop-blur-md">
            <Loader />
        </div>
    )
}

export default Loading