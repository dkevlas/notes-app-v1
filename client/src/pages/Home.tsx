import React from 'react'
import { HeroComp } from '../components/HomeComp/HeroComp'
import { FeaturesComp } from '../components/HomeComp/FeaturesComp'
import { HowItWorksComp } from '../components/HomeComp/HowItWorksComp'
import { MockupNotes } from '../components/HomeComp/MockupNotes'

export const Home: React.FC = () => {
    return (
        <main className='pt-12 px-2 min-w-72'>
            <HeroComp />
            <div className='flex flex-col mt-6 m-auto max-w-max gap-8'>
                <FeaturesComp />
                <HowItWorksComp />
            </div>
            <MockupNotes />
        </main>
    )
}
