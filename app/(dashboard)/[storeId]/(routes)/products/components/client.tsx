'use client'

import { Plus } from "lucide-react"
import { useParams, useRouter } from "next/navigation"

import Heading from "@/components/ui/Heading"
import { Button } from "@/components/ui/button"
import { Separator } from "@radix-ui/react-separator"
import { DataTable } from "@/components/ui/data-table"
import { ApiList } from "@/components/ui/api-list"

import { ProductColumns, columns } from "./columns"

interface ProductClientProps {
    data: ProductColumns[]
}

export const ProductClient = ({
    data
}: ProductClientProps) => {

    const router = useRouter()
    const params = useParams()
    return (
        <>
            <div className="flex items-center justify-between">
                <Heading
                    title={`Products (${data.length})`}
                    description="Manage products for your store"
                />
                <Button onClick={() => router.push(`/${params.storeId}/products/new`)}>
                    <Plus className="mr-2 h-4 w-4" /> Add new
                </Button>
            </div>

            <Separator />
            <Heading title="API" description="API Calls for Products" />
            <Separator />
            <DataTable filterKey="name" columns={columns} data={data} />
            <Heading
                title="API"
                description="API calls for Products"
            />
            <Separator />
            <ApiList entityName="products" entityIdName="productId" />
        </>
    )
}

