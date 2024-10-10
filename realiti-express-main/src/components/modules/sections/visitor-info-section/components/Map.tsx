'use client'

export function Map() {
  return (
    <div className="aspect-[4/3] w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2028.7508051535638!2d24.739938677839817!3d59.43723057466676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692937ee229f0e7%3A0x324e17f7b498cb0!2sHouse%2010!5e0!3m2!1sen!2see!4v1721302250829!5m2!1sen!2see"
        style={{
          border: 0,
        }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full shadow-realiti-blue1 shadow-md"></iframe>
    </div>
  )
}
