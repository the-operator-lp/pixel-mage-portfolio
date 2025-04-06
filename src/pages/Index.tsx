
import React from 'react';
import Header from '@/components/Header';
import SummoningScroll from '@/components/SummoningScroll';
import QuestTome from '@/components/QuestTome';
import Codex from '@/components/Codex';
import Arena from '@/components/Arena';
import Grimoire from '@/components/Grimoire';
import VoidGate from '@/components/VoidGate';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <SummoningScroll />
        <QuestTome />
        <Codex />
        <Arena />
        <Grimoire />
        <VoidGate />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
