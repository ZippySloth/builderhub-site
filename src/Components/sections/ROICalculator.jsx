import React, { useState } from 'react';
import FadeIn from '../FadeIn';

const ROICalculator = () => {
  const [hours, setHours] = useState(15);
  const [rate, setRate] = useState(75);
  const monthly = Math.round(hours * rate * 4.33);

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl">
        <FadeIn>
          <div className="glass rounded-2xl p-8 md:p-12 glow-purple">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
              What is manual reporting <span className="gradient-text">costing you?</span>
            </h2>

            <div className="space-y-8 mb-10">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Hours per week on reports</span>
                  <span className="text-white font-medium">{hours}h</span>
                </div>
                <input
                  type="range" min={5} max={40} value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="w-full accent-violet-500 h-2 rounded-full appearance-none bg-white/10 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Average hourly cost</span>
                  <span className="text-white font-medium">${rate}</span>
                </div>
                <input
                  type="range" min={30} max={150} step={5} value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full accent-violet-500 h-2 rounded-full appearance-none bg-white/10 cursor-pointer"
                />
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-2">You spend</p>
              <p className="text-5xl md:text-6xl font-bold gradient-text mb-2">${monthly.toLocaleString()}<span className="text-2xl">/mo</span></p>
              <p className="text-lg text-muted-foreground">on manual reporting</p>
              <p className="text-sm text-muted-foreground mt-6">BuilderHub starts at $1,500/mo. Do the math.</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ROICalculator;
