import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from '../FadeIn';

const spreadsheetRows = [
  ['Region', 'Q4 Rev', 'Q3 Rev', 'Delta'],
  ['East', '$142,300', '$138,200', '???'],
  ['West', '$98,450', '#REF!', '-'],
  ['North', 'TBD', '$67,100', '-12%'],
];

const BeforeAfter = () => (
  <section className="py-24 md:py-32">
    <div className="container mx-auto px-4 md:px-6">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          From spreadsheet chaos to <span className="gradient-text">one source of truth</span>
        </h2>
      </FadeIn>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Before */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-6 border-red-500/20"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-red-500/10 text-red-400 border border-red-500/20 mb-4">Before</span>
          <p className="text-sm font-mono text-muted-foreground mb-3">Q4_Revenue_FINAL_v3.xlsx</p>
          <div className="grid grid-cols-4 gap-px bg-white/5 rounded-lg overflow-hidden text-xs">
            {spreadsheetRows.map((row, ri) => (
              row.map((cell, ci) => (
                <div
                  key={`${ri}-${ci}`}
                  className={`px-3 py-2 ${ri === 0 ? 'bg-white/10 font-medium text-white' : 'bg-white/[0.02] text-muted-foreground'} ${cell === '#REF!' ? 'text-red-400 bg-red-500/10' : ''} ${cell === '???' ? 'text-yellow-400 bg-yellow-500/10' : ''}`}
                >
                  {cell}
                </div>
              ))
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3">Last updated: 3 weeks ago</p>
        </motion.div>

        {/* After */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-6 border-emerald-500/20"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">After</span>
            <span className="flex items-center gap-1.5 text-xs text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live &middot; Auto-updating
            </span>
          </div>
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[{ l: 'Revenue', v: '$340k', c: '↑ 12%' }, { l: 'Margin', v: '34%', c: '↑ 2.1%' }, { l: 'Accounts', v: '847', c: '↑ 23' }].map((m) => (
              <div key={m.l} className="glass rounded-xl p-3">
                <p className="text-[10px] text-muted-foreground">{m.l}</p>
                <p className="text-lg font-bold text-white">{m.v}</p>
                <p className="text-[10px] text-emerald-400">{m.c}</p>
              </div>
            ))}
          </div>
          <div className="glass rounded-xl p-4">
            <div className="flex items-end gap-2 h-20">
              {[40, 55, 50, 70, 65, 85, 80, 90].map((h, i) => (
                <div key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-violet-600 to-purple-400" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default BeforeAfter;
