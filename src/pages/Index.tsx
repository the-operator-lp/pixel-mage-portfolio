
import React, { useState } from 'react';
import Header from '@/components/Header';
import SummoningScroll from '@/components/main/SummoningScroll';
import QuestTome from '@/components/main/QuestTome';
import Codex from '@/components/main/Codex';
import Arena from '@/components/main/Arena';
import Grimoire from '@/components/main/Grimoire';
import VoidGate from '@/components/main/VoidGate';
import Footer from '@/components/Footer';
import WidgetPanel from '@/components/WidgetPanel';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Map, Clock, Mail } from 'lucide-react';

const Index = () => {
  const [isWidgetPanelOpen, setIsWidgetPanelOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="fixed bottom-4 right-4 z-50 flex flex-col space-y-2">
        <Dialog open={isWidgetPanelOpen} onOpenChange={setIsWidgetPanelOpen}>
          <DialogTrigger asChild>
            <Button 
              variant="outline" 
              className="bg-gray-800 border border-gray-700 hover:bg-gray-700 text-gray-300 rounded-full h-12 w-12 p-0 flex items-center justify-center"
            >
              {isWidgetPanelOpen ? "×" : "✧"}
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-[#0a0a0a] border border-gray-800 text-gray-300 max-w-3xl max-h-[80vh] overflow-y-auto">
            <div className="p-2">
              <h2 className="text-xl font-bold text-gray-300 mb-4">Arcane Widgets</h2>
              <WidgetPanel />
            </div>
          </DialogContent>
        </Dialog>

        <div className="flex flex-col space-y-2">
          <Button 
            variant="outline" 
            size="icon"
            className="bg-gray-800 border border-gray-700 hover:bg-gray-700 text-gray-300 rounded-full h-10 w-10 p-0"
            onClick={() => setIsWidgetPanelOpen(true)}
            title="Clock"
          >
            <Clock className="h-4 w-4" />
          </Button>
          
          <Button 
            variant="outline" 
            size="icon"
            className="bg-gray-800 border border-gray-700 hover:bg-gray-700 text-gray-300 rounded-full h-10 w-10 p-0"
            onClick={() => setIsWidgetPanelOpen(true)}
            title="Map"
          >
            <Map className="h-4 w-4" />
          </Button>
          
          <Button 
            variant="outline" 
            size="icon"
            className="bg-gray-800 border border-gray-700 hover:bg-gray-700 text-gray-300 rounded-full h-10 w-10 p-0"
            onClick={() => setIsWidgetPanelOpen(true)}
            title="Contact"
          >
            <Mail className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
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
