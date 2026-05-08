export function SectionHeader({ kicker, title }: { kicker: string; title: string }) {
  return <div className='mb-10'><p className='text-xs tracking-[0.2em] text-accent'>{kicker}</p><h2 className='mt-3 text-4xl font-black italic uppercase md:text-6xl'>{title}</h2></div>;
}
