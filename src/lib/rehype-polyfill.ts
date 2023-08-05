// NOTE: Polyfill might not be the right title here, but let's go with it.

export type classInjections = [string, string, string][];

export function addClasses(content: string, injections: classInjections ): string {
    let newContent = content;
    for (const injection of injections) {
        const tag = "<" + injection[0]
        const property = `${injection[1]}="${injection[2]}"`;
        const newTag = "<" + injection[0] + " " + property
        newContent = newContent.replace(RegExp(tag, "g"), newTag)
    }
    return newContent
}