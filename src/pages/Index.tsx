
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import QuestLog from '@/components/QuestLog';
import SkillTree from '@/components/SkillTree';
import BattleRecords from '@/components/BattleRecords';
import Inventory from '@/components/Inventory';
import ContactScroll from '@/components/ContactScroll';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <QuestLog />
        <SkillTree />
        <BattleRecords />
        <Inventory />
        <ContactScroll />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
