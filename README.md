# VÉRTICE CONTABILIDADE — Landing Page Institucional

Landing page moderna, responsiva, acessível e orientada a conversão desenvolvida para escritório de assessoria contábil e estratégica (**Vértice Contabilidade**).

🔗 **Demonstração Online:** [https://victor1308code.github.io/vertice-contabilidade/](https://victor1308code.github.io/vertice-contabilidade/)

## 🎨 Identidade Visual e Design System

- **Cor Primária (Turquesa/Teal):** `#45B3A9` (hover: `#3CA096`, escuro: `#128D84`)
- **Fundo Grafite/Slate:** `#1E2028` / `#242733`
- **Superfície Clara:** `#F5F7FA` / `#FFFFFF`
- **Tipografia:** Manrope & Inter (Google Fonts)

---

## 🏗️ Tecnologias Utilizadas

- **Next.js 14 (App Router)** com exportação estática otimizada
- **React 18** & **TypeScript**
- **Tailwind CSS** com tokens customizados e animações fluidas
- **Lucide React** para ícones vetoriais

---

## 📂 Estrutura de Diretórios

```text
/src
  /app
    globals.css          # Tokens de design, classes de acessibilidade e animações
    layout.tsx           # SEO, Open Graph, Metadata, Fontes e Acessibilidade
    page.tsx             # Composição semântica das seções da landing page
  /components
    /Header              # Barra de navegação flutuante com blur e menu mobile
    /Hero                # Primeira dobra de alto impacto com SVG vetorial animado
    /Services            # 6 soluções contábeis modulares em cards elegantes
    /Comparison          # Matriz comparativa (Contabilidade Tradicional vs Vértice)
    /Benefits            # Diferenciais focados em transparência e gestão de dados
    /HowItWorks          # Jornada de migração/abertura em 4 etapas
    /Testimonials        # Carrossel interativo de depoimentos
    /About               # Seção institucional e pilares de atuação
    /FAQ                 # Accordion acessível com dúvidas frequentes
    /ContactCTA          # Seção de conversão e canais de atendimento
    /Footer              # Rodapé institucional
  /data
    company.ts           # Centralização de dados demonstrativos e configurações
```

---

## 🚀 Como Executar Localmente

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Gerar build de produção
npm run build
```
