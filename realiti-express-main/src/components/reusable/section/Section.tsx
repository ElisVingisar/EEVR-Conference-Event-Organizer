import { cn } from '@/lib/utils'
import { VariantProps } from 'class-variance-authority'

export interface SectionProps extends React.HTMLAttributes<HTMLElement> { }

export function Section({ className, ...props }: SectionProps) {
  return (
    <section
      id={props.id}
      className={cn('max-w-7xl w-full mx-auto py-12 px-4 md:py-24 sm:px-6 lg:px-8', className)}
      {...props}
    >
      {props.children}
    </section>
  )
}

export function SectionTitle(props: SectionProps) {
  return (

    <h2
      className={cn(
        props.className,
        'text-4xl font-extrabold tracking-tight  sm:text-5xl lg:text-6xl text-realiti-blue2 mb-8',
      )}
    >
      {props.children}
    </h2>
  )
}

export function SectionContent(props: SectionProps) {
  return (
    <div className={cn(props.className, 'mt-6 text-lg text-gray-500 max-w-prose prose-lg')}>
      {props.children}
    </div>
  )
}
