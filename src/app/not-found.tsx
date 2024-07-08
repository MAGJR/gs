import { Button } from "@/components/ui/button"
import Link from "next/link"

export const dynamic = 'force-dynamic'


export default function NotFound() {
    return (
        <>
        <div className='h-screen flex items-center justify-center gap-x-7'>
        <h1 className="text-3xl font-bold ">Not Found</h1>
        <Link href={`/product`}>
        <Button>Back to products</Button>
        </Link>
        </div>
        </>
    )
}