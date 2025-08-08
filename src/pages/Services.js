import { BrowserRouter } from "react-router-dom";
import Listona from "../componentes/ListaItens";
import Descricao from "../componentes/descricao";
export default function Services() {
  return (
    <main className="p-6">
      <Descricao titulo="Nossos Serviços de IA" />
      <Listona item="Consultoria em Inteligência Artificial" />
      <Listona item="Desenvolvimento de Modelos de Machine Learning" />
      <Listona item="Implementação de Soluções de IA Personalizadas" />
    </main>
  );
}
