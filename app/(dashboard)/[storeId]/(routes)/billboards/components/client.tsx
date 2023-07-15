'use client'

import { Plus } from "lucide-react"
import { useParams, useRouter } from "next/navigation"

import Heading from "@/components/ui/Heading"
import { Button } from "@/components/ui/button"
import { Separator } from "@radix-ui/react-separator"
import { DataTable } from "@/components/ui/data-table"
import { ApiList } from "@/components/ui/api-list"

import { BillboardColumns, columns } from "./columns"

interface BillBoardClientProps {
    data: BillboardColumns[]
}

export const BillboardClient = ({
    data
}: BillBoardClientProps) => {

    const router = useRouter()
    const params = useParams()
    return (
        <>
            <div className="flex items-center justify-between">
                <Heading
                    title={`Billboards (${data.length})`}
                    description="Manage billboards for your store"
                />
                <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
                    <Plus className="mr-2 h-4 w-4" /> Add new
                </Button>
            </div>

            <Separator />
            <Heading title="API" description="API Calls for Billboards" />
            <Separator />
            <DataTable filterKey="label" columns={columns} data={data} />
            <Heading
                title="API"
                description="API calls for billboards"
            />
            <Separator />
            <ApiList entityName="billboards" entityIdName="billboardId" />
        </>
    )
}

