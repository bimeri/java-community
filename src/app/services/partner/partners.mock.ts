import {Partner} from "../../model/partner";

export const MOCK_PARTNERS: Partner[] = [
  {
    id: 'P001',
    partnerName: 'Christian DJampo',
    partnerType: 'Affiliate',
    conversions: 120,
    commissions: 4500,
    grosssales: 25000,
    contract: 'Active',
    role: ['Publisher']
  },
  {
    id: 'P002',
    partnerName: 'Ahmadou G',
    partnerType: 'Agency',
    conversions: 95,
    commissions: 3800,
    grosssales: 21000,
    contract: 'Active',
    role: ['Manager']
  },
  {
    id: 'P003',
    partnerName: 'Cosmin',
    partnerType: 'Affiliate',
    conversions: 140,
    commissions: 5200,
    grosssales: 30000,
    contract: 'Pending',
    role: ['Publisher', 'Editor']
  },
  {
    id: 'P004',
    partnerName: 'Catalin B',
    partnerType: 'Network',
    conversions: 80,
    commissions: 3100,
    grosssales: 18000,
    contract: 'Active'
  },
  {
    id: 'P005',
    partnerName: 'Brandol K',
    partnerType: 'Agency',
    conversions: 60,
    commissions: 2400,
    grosssales: 15000,
    contract: 'Inactive',
    role: ['Analyst']
  },
  {
    id: 'P006',
    partnerName: 'Diana C',
    partnerType: 'Affiliate',
    conversions: 170,
    commissions: 6100,
    grosssales: 34000,
    contract: 'Active',
    role: ['Publisher']
  },
  {
    id: 'P007',
    partnerName: 'Melania R',
    partnerType: 'Network',
    conversions: 110,
    commissions: 4700,
    grosssales: 27000,
    contract: 'Pending',
    role: ['Manager', 'Coordinator']
  }
];
