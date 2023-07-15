'use client'

import { Plus } from "lucide-react"
import { useParams, useRouter } from "next/navigation"

import Heading from "@/components/ui/Heading"
import { Button } from "@/components/ui/button"
import { Separator } from "@radix-ui/react-separator"
import { DataTable } from "@/components/ui/data-table"
import { ApiList } from "@/components/ui/api-list"

import { CategoryColumns, columns } from "./columns"

interface CategoryClientProps {
    data: CategoryColumns[]
}

export const CategoryClient = ({
    data
}: CategoryClientProps) => {

    const router = useRouter()
    const params = useParams()
    return (
        <>
            <div className="flex items-center justify-between">
                <Heading
                    title={`Categories (${data.length})`}
                    description="Manage categories for your store"
                />
                <Button onClick={() => router.push(`/${params.storeId}/categories/new`)}>
                    <Plus className="mr-2 h-4 w-4" /> Add new
                </Button>
            </div>

            <Separator />
            <Heading title="API" description="API Calls for categories" />
            <Separator />
            <DataTable filterKey="name" columns={columns} data={data} />
            <Heading
                title="API"
                description="API calls for categories"
            />
            <Separator />
            <ApiList entityName="categories" entityIdName="categoryId" />
        </>
    )
}

