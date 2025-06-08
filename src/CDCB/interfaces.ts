export interface Login {
  username: string;
  token: string;
  error: null;
  status: 'success';
}
export enum QuerySeachOptions {
  /** Animal ID (12 bytes) */
  ANIM_KEY_12 = 'ANIM_KEY_12',
  /** Animal ID (15 bytes) */
  ANIM_KEY_15 = 'ANIM_KEY_15',
  /** Animal ID (17 bytes)/ Animal ID + Sex Code (18 bytes) */
  ANIM_KEY_17 = 'ANIM_KEY_17',
  /** Animal Interbull ID (19 bytes) */
  ITB_ID = 'ITB_ID',
  /** Sample ID (20 bytes max) */
  SAMPLE_ID_SEX = 'SAMPLE_ID_SEX',
  /** NAAB Code */
  NAAB_CODE = 'NAAB_CODE',
  /** Short Name */
  SHORT_NAME = 'SHORT_NAME',
  /** Partial Full Name */
  PARTIAL_FULL_NAME = 'PARTIAL_FULL_NAME',
  /** Herd + Cow Control Number */
  HERD_CTRL_NUM = 'HERD_CTRL_NUM',
  /** Herd ID */
  HERD_ID = 'HERD_ID',
};
export interface Animal {
  animalId: string;
  animalId1718: null | unknown;
  herdCode: null | unknown;
  typeName: null | unknown;
  type: null | unknown;
  index: null | unknown;
  animKey: number;
  speciesCode: string;
  sexCode: 'F' | 'M';
  hasError: '0' | '1';
  isLinkToAnimal: '0' | '1';
  order: number;
  group: string;
  isLowerCase: boolean;
}
export interface AnimalQuery {
  animalLists: Animal[];
  invalidAnimalIds: unknown[];
  notFoundList: unknown[];
  fieldId: string;
  groupId: string;
}
export interface AnimalLactation {
  rootAnimalId: string;
  lactNum: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';
  freshDate: string;
  calvPdate: number;
  /** Days in Milk */
  dim: string;
  herdCode: string;
  ctrlNo: string;
  procDate: string;
  modDate: string;
  /** Dairy Record Processing Centers */
  drpc: string;
  /** Laction Type */
  lt: string;
  /** Lactation Mask Code */
  mk: string;
  /** Lactation Initiation Code */
  li: string;
  /** Primary Termination Code */
  tc: string;
  /** Secondary Termination Code */
  tc2: string | null;
  /** Percentage of test days from Owner Sampler */
  osPct: string;
  /** Pregnancy Confirmation Code */
  pc: string;
  /** Days Open */
  opn: string;
  usable: 'Yes' | 'No';
  /** Number of progeny born from this birth */
  bth: string;
  /** Number of Test Days */
  ntd: string;
  leftHerd: null | unknown;
  isShowAdjusted: null | unknown;
  hasTestdate: number;
  hasReproductive: number;
  hasTestdateOrReproductive: number;
  rowId: number;
  dataKey: string; // e.g. '22024-03-212762025-01-312025-02-05'
}
export interface LactationStats {
  rootAnimalId: string;
  input: null;
  typeName: 'Standard' | 'DCR' | 'Actual';
  /** Milk */
  mlk: string;
  fat: string;
  /** Protein */
  pro: string;
  /** Somatic Cell Score */
  scs: string;
  rowId: number;
}
export interface LactationTest {
  rootAnimalId: string;
  input: null;
  testNo: number;
  /** Days in Milk */
  dim: string;
  /** Milk */
  milk: string;
  /** Fat Percentage */
  fatPct: string;
  /** Protein Percentage */
  proPct: string;
  /** Somatic Cell Score */
  scs: string;
  /** Frequency */
  req: string;
  testDate: string;
  adjustedMilk: null | unknown;
  isMilkChanged: null | unknown;
  adjustedFatPct: null | unknown;
  isFatPctChanged: null | unknown;
  adjustedProtPct: null | unknown;
  isProtPctChanged: null | unknown;
  rowId: null;
}
export interface LactationTestDate {
  lactationStds: LactationStats[];
  testDates: LactationTest[];
  isShowAdjusted: '0' | '1';
  reproductiveRecords: unknown[];
}