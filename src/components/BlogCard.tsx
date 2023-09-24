import Link from "next/link";
import { Post } from "@/lib/utils";

type ListProps = {
    post: Post
}

export default function BlogCard(props: ListProps) {

    return (
        <Link href={"blog/" + props.post.name} className="py-2 px-auto h-18 w-4/5 mx-auto">
            <div className="border-2 border-theme rounded-md mx-auto justify-center hover:bg-theme">
                <h4 className="text-center">{props.post.title}</h4>
                <p className="text-center">{props.post.date}</p>
            </div>
        </Link>
    )
}
