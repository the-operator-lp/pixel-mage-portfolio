import React from 'react';
import Header from '@/components/Header';
import SummoningScroll from '@/components/main/SummoningScroll';
import QuestTome from '@/components/main/QuestTome';
import Codex from '@/components/main/Codex';
import Arena from '@/components/main/Arena';
import Grimoire from '@/components/main/Grimoire';
import VoidGate from '@/components/main/VoidGate';
import Footer from '@/components/Footer';
import RealmMap from '@/components/main/RealmMap';

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
      
      <RealmMap />
      
      <Footer />
    </div>
  );
};

export default Index;
