import { CompanyInfo } from "@/types";

/**
 * ============================================================================
 * VÉRTICE CONTABILIDADE — DADOS E CONFIGURAÇÕES DA EMPRESA (PORTFÓLIO)
 * ============================================================================
 * Centralização completa das informações institucionais, de contato e links.
 * Dados configurados com placeholders demonstrativos para exibição em portfólio.
 */

// Link principal de conversão (Demonstrativo)
export const WHATSAPP_NUMBER = "(11) 99999-9999";
export const WHATSAPP_RAW = "5511999999999";
export const WHATSAPP_URL = "#contato";

export const CONTACT_LINK = WHATSAPP_URL;

export const company: CompanyInfo = {
  name: "Vértice Contabilidade",
  brandName: "VÉRTICE",
  tagline: "Contabilidade simples, estratégica e feita para o crescimento do seu negócio.",
  subtagline: "Organização • Segurança • Estratégia",
  headline: "Contabilidade que simplifica o seu negócio.",
  subheadline:
    "Tenha mais clareza para cuidar da sua empresa enquanto a Vértice cuida da sua contabilidade com organização, proximidade e segurança.",
  
  // Informações Cadastrais Demonstrativas
  cnpj: "00.000.000/0001-00",
  cnae: "6920-6/01 - Atividades de contabilidade",
  
  // Canais de Contato (Exemplo)
  phone: "(11) 99999-9999",
  phoneRaw: "5511999999999",
  whatsapp: WHATSAPP_NUMBER,
  whatsappRaw: WHATSAPP_RAW,
  whatsappUrl: WHATSAPP_URL,

  primaryEmail: "contato@verticecontabil.com.br",
  secondaryEmail: "atendimento@verticecontabil.com.br",
  
  // Endereço Demonstrativo
  address: {
    street: "Av. Paulista, 1000 - Bela Vista",
    neighborhood: "Bela Vista",
    city: "São Paulo",
    state: "SP",
    zip: "01310-100",
    full: "Av. Paulista, 1000, Bela Vista, São Paulo - SP, CEP 01310-100",
  },

  instagram: "",

  contactLink: CONTACT_LINK,
  copyrightYear: 2026,
};
