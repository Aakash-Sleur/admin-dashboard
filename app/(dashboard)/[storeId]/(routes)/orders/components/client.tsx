'use client'


import Heading from "@/components/ui/Heading"
import { Separator } from "@radix-ui/react-separator"
import { DataTable } from "@/components/ui/data-table"

import { OrderColumns, columns } from "./columns"

interface OrderClientProps {
    data: OrderColumns[]
}

export const OrderClient = ({
    data
}: OrderClientProps) => {

    return (
        <>
            <Heading
                title={`Orders (${data.length})`}
                description="Manage orders for your store"
            />
            <Separator />
            <DataTable filterKey="products" columns={columns} data={data} />
        </>
    )
}

