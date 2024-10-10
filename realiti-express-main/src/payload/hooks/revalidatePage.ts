
import { CollectionAfterChangeHook, Document } from "payload";

export const formatAppURL = ({ doc }: { doc: Document }): string => {
  const pathToUse = doc.slug === 'home' ? '' : doc.slug
  const { pathname } = new URL(`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/${pathToUse}`)
  return pathname
}

// Revalidate the page in the background, so the user doesn't have to wait
// Notice that the hook itself is not async and we are not awaiting `revalidate`
export const revalidatePage: CollectionAfterChangeHook = ({ doc, req }) => {
  const revalidate = async (): Promise<void> => {
    let url = process.env.NEXT_PUBLIC_SITE_URL
    const revalidationKey = "A"

    try {
      url = formatAppURL({ doc })
      const res = await fetch(
        `${url}/next/revalidate?secret=${revalidationKey}&revalidatePath=${url}`,
      )

      if (res.ok) {
        req.payload.logger.info(`Revalidated path ${url}`)
      } else {
        req.payload.logger.error(`Error revalidating path ${url}`)
      }
    } catch (err: unknown) {
      req.payload.logger.error(`Error hitting revalidate route for ${url}, ${JSON.stringify(err)}`)
    }
  }

  revalidate()

  return doc
}
