'use client'

import { toast } from "react-hot-toast"
import { useState } from "react"
import axios from "axios"
import { useParams, useRouter } from "next/navigation"

import { ProductColumns } from "./columns"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"
import { Copy, Edit, MoreHorizontal, Trash } from "lucide-react"
import AlertModal from "@/components/modals/alert-modal"

interface CellActionProps {
    data: ProductColumns
}

const CellAction = ({
    data
}: CellActionProps) => {

    const router = useRouter();
    const params = useParams();

    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)

    const onDelete = async () => {
        try {
            setLoading(true)
            await axios.delete(`/api/${params.storeId}/products/${data.id}`)
            router.refresh();
            toast.success('Product Deleted.')
        } catch (error) {
            toast.error('Make sure you removed all products and categories this products first.')
        } finally {
            setLoading(false)
            setOpen(false)
        }
    }

    const onCopy = (id: string) => {
        navigator.clipboard.writeText(id);
        toast.success("Product Id copied to clipboard")
    }

    return (
        <>
            <AlertModal
                isOpen={open}
                onClose={() => setOpen(false)}
                loading={loading}
                onConfirm={onDelete}
            />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant={'ghost'} className="h-8 w-8 p-0">
                        <span className="sr-only">Open Menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem
                        onClick={() => onCopy(data.id)}
                    >
                        <Copy className="mr-2 h-4 w-4" />
                        Copy Id
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => { router.push(`/${params.storeId}/products/${data.id}`) }}
                    >
                        <Edit className="mr-2 h-4 w-4" />
                        Update
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => setOpen(true)}
                    >
                        <Trash className="mr-2 h-4 w-4" />
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}

export default CellAction