import React from 'react';

function About() {
  return (
    <div className="px-8 py-4 pb-6 overflow-auto flex flex-col gap-6">
      <h2 className="text-3xl text-center">
        About us
      </h2>
      <div className="w-full flex flex-col justify-center items-center sm:flex-row sm:gap-7 sm:items-center">
        <a href="https://placekitten.com/" className="flex justify-center sm:w-2/5 sm:h-full">
          <img src="https://placekitten.com/400/400" alt="place kitten" className="h-full w-auto object-cover" />
        </a>
        <p className="text-sm self-start sm:w-3/5 sm:text-base">
          Here is a little description about this shop.Reward the chosen human with a slow blink
          leave hair everywhere. Eat prawns daintily with a claw then lick paws clean wash down
          prawns with a lap of carnation milk then retire to the warmest spot on the couch to
          claw at the fabric before taking a catnap stuff and things i love cats i am one wake
          up scratch humans leg for food then purr then i have a and relax. Carrying out
          surveillance on the neighbour&apos;s dog always hungry. I shredded your linens for you
          demand to have some of whatever the human is cooking, then sniff the offering and walk
          away rub against owner because nose is wet and pee on walls it smells like breakfast yet
          reaches under door into adjacent room. Demand to have some of whatever the human is
          cooking, then sniff the offering and walk away dismember a mouse and then regurgitate
          parts of it on the family room floor morning beauty routine of licking self. Crash
          against wall but walk away like nothing happened kitty chew the plant.
          {' '}
          <a className="text-cyan-800" href="http://www.catipsum.com/index.php">Cat Ipsum Generator</a>
        </p>
      </div>
      <p className="text-base">
        This page is built using React with React-Router, React-Query, Tailwind CSS,
        Material-Tailwind and some icons from Font Awesome.
      </p>
    </div>
  );
}

export default About;
