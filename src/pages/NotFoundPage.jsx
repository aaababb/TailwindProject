import { Link } from "react-router-dom"

export default function NotFoundPage() {
    return <div className="flex flex-column gap-2 margin-auto">
        404 Not Found
        <Link to="/">
            <button>Home From Link</button>
        </Link>
    </div>
}