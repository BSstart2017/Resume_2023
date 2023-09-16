import Link from 'next/link'
import {route} from "@/common/definitions/app/route";

export default function NotFound() {
  return (
    <div className="absolute inset-52 flex items-center justify-center">
      <div className="bg-red-200 p-4 rounded-lg shadow-md text-red-800">
        <h2 className="text-3xl font-semibold mb-4 text-red-600">Not Found</h2>
        <p className="text-gray-600">Could not find the requested resource.</p>
        <Link className="mt-4 text-blue-600 hover:underline" href={route.HOME}>
          Return Home
        </Link>
      </div>
    </div>
  )
}