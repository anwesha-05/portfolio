"use client";

import Image from "next/image";
import React, {useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Link from "next/link";

const SEQUENCE = [
  [true, true, true],   // All on
  [true, true, false],  // First two on
  [true, true, true],   // All on
  [true, false, true],  // First and third on
  [true, true, true],   // All on
  [false, true, true],  // Last two on
];

const INTERVALS = [500, 300, 500, 300, 500, 300]; // Adjusted timing: off time 1/10th

export default function Home() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const updateStep = () => {
      setStep(prev => (prev + 1) % SEQUENCE.length);
    };

    const interval = setTimeout(updateStep, INTERVALS[step]);
    return () => clearTimeout(interval);
  }, [step]);

  const Star = ({ 
    number,
    visible, 
    desktopX, 
    desktopY, 
  }: { 
    number: number;
    visible: boolean; desktopX: number; 
    desktopY: number; 
  }) => (
    <div className={`absolute ${visible ? 'opacity-100 duration-300' : 'opacity-0 duration-100'} transition-opacity`}
      style={{
        top: `${desktopY}px`,
        left: `${desktopX}%`,
      }}
    >
      <Image
        src={`/STAR${number}.svg`} 
        alt="Star"
        width={0}
        height={0}
        style={{ 
                width: 'auto', 
                height: 'auto' 
              }}
        unoptimized={true} 
      />
    </div>
  );

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20  bg-[#ff59bf] relative">
      <div className="relative w-full h-[300px] desktop:h-auto">
        <div className="flex flex-col desktop:block">
          <Star
            number={1}
            visible={SEQUENCE[step][0]}
            desktopX={10}
            desktopY={136}
          />
          <Star
            number={2}
            visible={SEQUENCE[step][1]}
            desktopX={14}
            desktopY={196}
          />
          <Star
            number={3}
            visible={SEQUENCE[step][2]}
            desktopX={9}
            desktopY={288}
          />
        </div>
      </div>

      <main className="w-1/2 mx-auto flex flex-col gap-8 row-start-2 items-center text-center relative z-10">
        <h1 style={{
          fontFamily: "'Press Start 2P', cursive",
          fontSize: '2rem',
          marginBottom: '1rem',
        }}>
          <TypeAnimation
              sequence={[
                "My Portfolio",
                1000,
                "Anwesha Satpathy",
                1000,
              ]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            /></h1>
        <p
        style={{
          fontFamily: "'Roboto Mono', monospace",
          fontSize: '16px',
          lineHeight: '2rem',
          margin: '1rem 0 2rem',
        }}
      >
        Hello! I am a B.Tech Computer Science student who loves to build cool things with code.
        I’m passionate about learning new technologies and sharing knowledge with others.
      </p>
      <div>
        <Link href="/projects">
        <button>
          Projects
        </button>
        </Link>

        <Link href="/contact">
          <button>
            Contact
          </button>
        </Link>
      </div>
      </main>
    </div>
  );
}
