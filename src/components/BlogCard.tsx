import Link from "next/link";
import { Post } from "@/lib/utils";

type ListProps = {
    post: Post
}

export default function BlogCard(props: ListProps) {

    return (
        <Link href={"blog/" + props.post.name}>
            <div className="border border-lime-950 shadow-sm shadow-lime-950 rounded-md mx-auto my-4 p-2 h-1/5 w-4/5 m-auto justify-center hover:bg-yellow-950">
                <h4 className="text-center">{props.post.title}</h4>
                <p className="text-center">{props.post.date}</p>
            </div>
        </Link>
    )
}