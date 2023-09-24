import { Metadata } from "../lib/utils"

type MetaProps = {
  meta: Metadata,
}

export default function MetaHeader(props: MetaProps) {

    return (
        <div className="w-10/12 h-1/6 mx-auto justify-items-center">
            <h1 className="text-4xl font-bold text-center">{props.meta.title}</h1>
            <h3 className="text-xl text-center my-2">{props.meta.date}</h3>
        </div>
    )
}
