import React from 'react';
import Descricao from '../componentes/descricao/index.js';
import { BrowserRouter } from 'react-router-dom';

export default function Home() {
    return (
        
      <main className="p-6">
        <Descricao
        titulo="Bem-vindo à Nossa Empresa de IA"
        texto="Somos líderes em soluções de inteligência artificial, oferecendo serviços inovadores para transformar seu negócio."
        />
            
      </main>
    );
  }