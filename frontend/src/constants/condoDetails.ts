import type { Condo, CondoDetails } from '../types/condo';

const condominiumValues = [
  800,
  1000,
  3000,
  5000,
  7000,
];

const managers = [
  'Mariana Costa',
  'Rafael Mendes',
  'Camila Rocha',
  'Thiago Almeida',
  'Patricia Nogueira',
];

const contacts = [
  '(11) 4002-1100',
  '(21) 3200-8844',
  '(31) 3555-9012',
  '(41) 3090-7788',
  '(51) 3022-6400',
];

const addressTemplates = [
  'Rua das Palmeiras, 120 - Centro',
  'Avenida Jardim Europa, 455 - Bela Vista',
  'Alameda dos Ipês, 88 - Vila Verde',
  'Rua Horizonte, 730 - Parque Novo',
  'Avenida das Acácias, 210 - Jardim Sul',
];

const descriptions = [
  'Condomínio com operação consolidada, equipe de apoio ativa e rotina administrativa bem estruturada.',
  'Empreendimento com áreas comuns amplas, comunicação frequente com moradores e alta demanda de gestão.',
  'Condomínio residencial com perfil familiar, processos internos documentados e manutenção preventiva recorrente.',
  'Unidade com boa ocupação, fluxo constante de moradores e acompanhamento próximo da administração.',
  'Condomínio com infraestrutura completa, portaria organizada e indicadores operacionais acompanhados mensalmente.',
];

function getStableIndex(id: string, length: number) {
  const total = id
    .split('')
    .reduce((sum, character) => sum + character.charCodeAt(0), 0);

  return total % length;
}

export function getCondoDetails(condo: Condo): CondoDetails {
  const index = getStableIndex(condo.id, managers.length);

  return {
    manager: managers[index],
    contact: contacts[index],
    address: addressTemplates[index],
    description: descriptions[index],
    cost: condominiumValues[index],
  };
}
