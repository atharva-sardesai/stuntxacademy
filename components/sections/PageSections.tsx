'use client';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Star, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { INSTRUCTORS, NAV_LINKS, PROGRAMS, TESTIMONIALS } from '@/lib/constants';
import { GrainOverlay } from '@/components/shared/GrainOverlay';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { StatPill } from '@/components/shared/StatPill';

export function PageSections() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const hero = 'https://images.unsplash.com/photo-1515777315835-281b94c9589f?auto=format&fit=crop&w=1800&q=80';

  return (
    <>
      <GrainOverlay />
      <header className='sticky top-0 z-50 border-b border-transparent bg-bg/70 backdrop-blur'>
        <nav className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4'>
          <a href='#' className='text-2xl font-black italic'>STUNTX</a>
          <div className='hidden gap-6 md:flex'>{NAV_LINKS.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}</div>
          <Button className='hidden md:inline-flex rounded-xl' onClick={() => setContactModalOpen(true)}>ENROLL NOW</Button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className='md:hidden' aria-label='Open menu'><Menu /></button>
        </nav>
        {mobileMenuOpen && <div className='md:hidden bg-surface p-6'>{NAV_LINKS.map((l) => <a className='block py-2' key={l.href} href={l.href}>{l.label}</a>)}</div>}
      </header>

      <main>
        <section className='relative min-h-screen'>
          {/* TODO: replace with actual StuntX photo */}
          <Image src={hero} alt='Bike stunt' fill className='object-cover opacity-30' />
          <div className='relative mx-auto max-w-7xl px-4 pt-24 sm:px-6 md:pt-32 lg:px-8'>
            <motion.h1 initial='hidden' animate='show' variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }} className='text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black italic uppercase leading-[0.95]'>
              {['MASTER', 'THE', 'MACHINE.'].map((w, i) => <motion.span key={i} variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className={w === 'MASTER' ? 'text-accent mr-4' : 'mr-4'}>{w}</motion.span>)}
            </motion.h1>
            <p className='mt-6 max-w-2xl text-muted'>Pune&apos;s premier bike stunt training academy. Learn wheelies, stoppies, and full-control riding from certified pros — on a closed, safe track.</p>
            <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
              <Button className='rounded-xl' onClick={() => setContactModalOpen(true)}>BOOK A TRIAL SESSION</Button>
              <Button variant='ghost' className='rounded-xl'>WATCH SHOWREEL</Button>
            </div>
            <div className='mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4'>{['500+ RIDERS TRAINED', '8 YEARS', '100% SAFETY RECORD', 'CERTIFIED INSTRUCTORS'].map((s) => <StatPill key={s} label={s} />)}</div>
          </div>
        </section>

        <section className='mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-20 lg:px-8'><div className='relative h-96'>{/* TODO: replace with actual StuntX photo */}<Image src='https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=80' alt='training' fill className='object-cover' /></div><div><SectionHeader kicker='01 / ABOUT' title="WE DON'T DO RECKLESS. WE DO RELENTLESS." /><p className='text-muted'>We train riders to command the bike, not gamble with it. Every drill happens inside a controlled, closed facility.</p></div></section>
        <section id='programs' className='bg-surface py-16 md:py-20'><div className='mx-auto max-w-7xl px-6'><SectionHeader kicker='02 / TRAINING' title='PROGRAMS BUILT FOR PROGRESSION' /><div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-2'>{PROGRAMS.map((p) => <motion.article whileHover={{ scale: 1.02 }} key={p.title} className='border border-borderline p-6 hover:border-accent hover:shadow-glow'><p className='text-accent'>{p.number}</p><h3 className='text-2xl font-bold italic'>{p.title}</h3><p>{p.duration}</p><ul className='my-4 list-disc pl-5 text-muted'>{p.skills.map((s) => <li key={s}>{s}</li>)}</ul><p>{p.price} <span className='text-xs text-muted'>(TODO: update with real value)</span></p></motion.article>)}</div></div></section>
        <section className='bg-accent px-4 py-10 text-center text-black sm:px-6'><h3 className='text-4xl font-black italic'>READY TO RIDE?</h3><Button className='mt-4 rounded-xl bg-black text-white' onClick={() => setContactModalOpen(true)}>BOOK A FREE TRIAL</Button></section>
        <section id='contact' className='py-16 md:py-20'><div className='mx-auto max-w-4xl px-4 text-center sm:px-6'><SectionHeader kicker='CONTACT' title='TAP ANY BOOK BUTTON TO OPEN ENROLLMENT POPUP' /><p className='text-muted'>Modern quick-enroll modal replaces the old static contact block.</p></div></section>
      </main>

      <AnimatePresence>
        {contactModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='fixed inset-0 z-[100] grid place-items-end bg-black/70 p-2 sm:place-items-center sm:p-4'>
            <motion.div initial={{ y: 30, scale: 0.98 }} animate={{ y: 0, scale: 1 }} exit={{ y: 20, opacity: 0 }} className='w-full max-w-2xl rounded-2xl border border-borderline bg-surface p-4 shadow-glow sm:p-6'>
              <div className='mb-4 flex items-center justify-between gap-3'><h3 className='text-2xl font-black italic sm:text-3xl'>BOOK NOW</h3><button aria-label='Close popup' onClick={() => setContactModalOpen(false)}><X /></button></div>
              <form className='space-y-3'>
                {['Name', 'Phone', 'Email', 'Age'].map((f) => <input key={f} placeholder={f} className='w-full rounded-lg border border-borderline bg-bg p-3' />)}
                <select className='w-full rounded-lg border border-borderline bg-bg p-3'><option>None</option><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select>
                <textarea className='w-full rounded-lg border border-borderline bg-bg p-3' placeholder='Message' />
                <Button type='button' className='w-full rounded-xl py-3 text-sm sm:text-base' onClick={() => { console.log('TODO: wire enrollment backend'); setContactModalOpen(false); }}>SUBMIT ENROLLMENT</Button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className='border-t py-10 text-center text-sm text-muted'>© 2026 StuntX Academy. All rights reserved. Stunt riding is dangerous. Closed tracks only.</footer>
    </>
  );
}
