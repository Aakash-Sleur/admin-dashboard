'use client'

import { Plus } from "lucide-react"
import { useParams, useRouter } from "next/navigation"

import Heading from "@/components/ui/Heading"
import { Button } from "@/components/ui/button"
import { Separator } from "@radix-ui/react-separator"
import { DataTable } from "@/components/ui/data-table"
import { ApiList } from "@/components/ui/api-list"

import { SizeColumns, columns } from "./columns"

interface SizeClientProps {
    data: SizeColumns[]
}

export const SizeClient = ({
    data
}: SizeClientProps) => {

    const router = useRouter()
    const params = useParams()
    return (
        <>
            <div className="flex items-center justify-between">
                <Heading
                    title={`Sizes (${data.length})`}
                    description="Manage sizes for your store"
                />
                <Button onClick={() => router.push(`/${params.storeId}/size/new`)}>
                    <Plus className="mr-2 h-4 w-4" /> Add new
                </Button>
            </div>

            <Separator />
            <Heading title="API" description="API Calls for sizes" />
            <Separator />
            <DataTable filterKey="name" columns={columns} data={data} />
            <Heading
                title="API"
                description="API calls for sizes"
            />
            <Separator />
            <ApiList entityName="sizes" entityIdName="sizeId" />
        </>
    )
}

