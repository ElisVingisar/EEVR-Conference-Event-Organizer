
import { CollectionAfterChangeHook, Document, GlobalAfterChangeHook } from "payload";

export const formatAppURL = ({ doc }: { doc: Document }): string => {
    const pathToUse = doc.slug === 'home' ? '' : doc.slug
    const { pathname } = new URL(`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/${pathToUse}`)
    return pathname
}


// Revalidate the page in the background, so the user doesn't have to wait
// Notice that the hook itself is not async and we are not awaiting `revalidate`
export const revalidateTag: GlobalAfterChangeHook = async ({ global, req, doc }) => {

    const url = process.env.NEXT_PUBLIC_SITE_URL

    const revalidate = async (): Promise<void> => {

        console.log('Revalidating: ', global)

        //const revalidationKey = process.env.REVALIDATION_KEY
        const revalidationKey = 'A'

        try {
            // url = formatAppURL({ doc: global })

            console.log(`Requesting revalidation for ${url}/next/revalidate?secret=${revalidationKey ?? '_'}&tag=payload-${global.slug}`)
            const res = await fetch(
                `${url}/next/revalidate?secret=${revalidationKey ?? '_'}&tag=payload-${global.slug}`,
            )

            const json = await res.json()

            console.log(`Res: ${JSON.stringify(json, null, 2)}`)



            if (res.ok) {
                req.payload.logger.info(`Revalidated path ${global.slug}`)
            } else {
                req.payload.logger.error(`Error revalidating path ${global.slug}`)
            }
        } catch (err: unknown) {
            console.error(`Error hitting revalidate route for ${global.slug}`, JSON.stringify(err))
        }
    }

    await revalidate()

    return doc
}
