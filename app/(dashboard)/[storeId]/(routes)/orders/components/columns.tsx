"use client"

import { ColumnDef } from "@tanstack/react-table"

export type OrderColumns = {
    id: string
    phone: string
    address: string
    isPaid: Boolean
    totalPrice: string
    products: string
    createdAt: string
}

export const columns: ColumnDef<OrderColumns>[] = [
    {
        accessorKey: "products",
        header: "Products"

    },
    {
        accessorKey: "phone",
        header: "Phone"
    },
    {
        accessorKey: "address",
        header: "Address"
    },
    {
        accessorKey: "totalPrice",
        header: "Total price"
    },
    {
        accessorKey: "isPaid",
        header: "Paid"
    },

]
