export interface Login {
  username: string;
  token: string;
  error: null;
  status: 'success';
}
export enum QuerySeachOptions {
  /** Animal ID - Last 6 Characters */
  ANIM_KEY_6 = 'ANIM_KEY_6',
  /** Animal ID (17 bytes)/ Animal ID + Sex Code (18 bytes) */
  ANIM_KEY_17_ANIM_KEY_17_SEX = 'ANIM_KEY_17_ANIM_KEY_17_SEX',
  /** Short Name */
  SHORT_NAME = 'SHORT_NAME',
  /** Partial Full Name */
  PARTIAL_FULL_NAME = 'PARTIAL_FULL_NAME',
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
export enum DairyRecordProcessingCenter {
  /** Agritech Analytics (CA) */
  AGRITECH_ANALYTICS = '01',
  /** Dairy Records Management Systems (Raleigh, NC, and Ames, IA) */
  DAIRY_RECORDS_MANAGEMENT_SYSTEMS = '07',
  /** Amelicor (ex DHI-PROVO) (UT) */
  AMELICOR = '10',
  /** AgSource Cooperative Services (WI) */
  AGSOURCE_COOPERATIVE_SERVICES = '12',
  /** USDA special input data */
  USDA_SPECIAL_INPUT_DATA = '13',
  /** North Carolina Dart System (Dairy Management Systems (DMS)) */
  NORTH_CAROLINA_DART_SYSTEM = '51',
  /** @deprecated Pennsylvania DHIA (PA) - DISCONTINUED */
  PENNSYLVANIA_DHIA = '09',
  /** @deprecated Mexico - DISCONTINUED */
  MEXICO = '14',
  /** @deprecated Texas DHIA (TX) - DISCONTINUED */
  TEXAS_DHIA = '15',
}
export enum LactationType {
  /** Record that has been completed (cow dried off) or terminated due to cow
leaving the herd or having an abortion at >= 152 days from last breeding
or at >= 200 days in milk if no breeding date. */
  COMPLETED = '0',
  /** Record in progress (including > 305 days in milk) */
  IN_PROGRESS = '1',
  /** Record truncated at 305 or 365 days in milk */
  TRUNCATED = '2',
  /** Donor dam (milk yield not required) */
  DONOR_DAM = '4',
  /** Delete all records for a cow */
  DELETE_ALL_RECORDS_FOR_COW = '5',
  /** Delete all records with matching herd information */
  DELETE_ALL_RECORDS_WITH_MATCHING_HERD_INFO = '6',
  /** Delete all records with matching calving information */
  DELETE_ALL_RECORDS_WITH_MATCHING_CALVING_INFO = '7',
  /** Delete one test day record with matching calving, herd, and DIM. */
  DELETE_ONE_TEST_DAY_RECORD = '8',
  /** Delete all records with matching calving and herd information */
  DELETE_ALL_RECORDS_WITH_MATCHING_CALVING_AND_HERD_INFO = '9',
  /** Change the lactation DIM for matching cow, calving, and herd and delete all test days
and reproductive events with DIM greater than the input DIM (@136-138).
When used in a format 5 record, only reproductive events with dates greater than the
input date (@139-146), in the one required segment, will be deleted. */
  CHANGE_LACTATION_DIM = 'A',
  /** No production data provided */
  NO_PRODUCTION_DATA = 'P',
  /** Allows for submission of termination code, left herd date, or barn name for heifers */
  ALLOWS_SUBMISSION_OF_TERMINATION_CODE = 'T',
}
/**
 * Mask shown may be any combination of these values
 * 
 * Mask codes are interpreted by reading each digit segment individually.
 * The number or letter in the first digit of the code refers to a possible combination of codes 10 through 80. The number or letter in the second digit of the code refers to a possible combination of codes 01 through 08. When there is a combination of codes, the code numbers are added together (i.e. codes 04 and 02 would be written as 06). When the code combination added together is greater than 9, alphabetic letters are used (i.e. a = 10, b = 11, ..., f = 15).
 * Possible combinations of codes:
 * ```
 * 1 = code 1
 * 2 = code 2
 * 3 = code 2 and 1
 * 4 = code 4
 * 5 = code 4 and 1
 * 6 = code 4 and 2
 * 7 = code 4 and 2 and 1
 * 8 = code 8
 * 9 = code 8 and 1
 * a = code 8 and 2
 * b = code 8 and 2 and 1
 * c = code 8 and 4
 * d = code 8 and 4 and 1
 * e = code 8 and 4 and 2
 * f = code 8 and 4 and 2 and 1
 * ```
 * Examples: 
 * @example ```
 * 40 = code 40
 * 82 = codes 80, 02
 * 47 = codes 40, 04, 02, 01
 * 6b = codes 40, 20, 08, 02, 01
 * a1 = codes 80, 20, 01
 * d4 = codes 80, 40, 10, 04
 * 5c = codes 40, 10, 08, 04
 * ba = codes 80, 20, 10, 08, 02
 * ff = codes 80, 40, 20, 10, 08, 04, 02, 01
 * ```
 */
export enum LactationMask {
  /** Record coded incomplete */
  INCOMPLETE = '80',
  /** Record is coded with previous days dry */
  PREVIOUS_DAYS_DRY = '40',
  /** Protein lactation information not useable */
  PROTEIN_LACTATION_NOT_USEABLE = '20',
  /** Crossbred animal */
  CROSSBRED_ANIMAL = '10',
  /** Lactation not useable */
  LACTATION_NOT_USEABLE = '08',
  /** Somatic cell available */
  SOMATIC_CELL_AVAILABLE = '04',
  /** Milk-only record (for calvings after 1997-01-01) 
No management group mates (for calvings before 1997-01-01) */
  MILK_ONLY_RECORD = '02',
  /** Internal use by CDCB */
  INTERNAL_USE_BY_CDCB = '01',
}
export enum LactationInitiationCode {
  /** Lactation started with a normal calving */
  NORMAL_CALVING = '0',
  /** Lactation started with an abortion (including induced abortions) */
  ABORTION = '1',
  /** Fresh date field does not contain actual calving date (e.g. date entered herd, or date of hormonal induction of lactation) */
  FRESH_DATE_NOT_ACTUAL_CALVING = '2',
  /** Birth date is stored in calving date column to store events before first calving. The lactation number is set to 0. */
  BIRTH_DATE_STORED = '8',
  /** No lactation information has been received for this cow/calving date/herd code combination */
  NO_LACTATION_INFO = '9',
}
/**
 * The primary termination code stored in CDCB database will be the one reported with the date left herd if the cow is dry. In this case, the primary termination code associated with the high DIM will not be stored.
 * Primary termination code is more important than the secondary code described below
 */
export enum PrimaryTerminationCode {
  /** Lactation in progress or ended normally without an abortion */
  NORMAL = '0',
  /** Lactation ended with an abortion at >=152 days and < 251 days (261 days for Brown Swiss) after conception, or aborted at >= 200 days in milk if no breeding date */
  ABORTION = '8',
  /** Cow sold/transferred to another dairy alive to provide income from milk, calves, or embryos */
  SOLD_ALIVE = '2',
  /** Cow sold for locomotion problems (feet, legs, lameness) */
  SOLD_LOCOMOTION = '1',
  /** Cow sold for poor production (low production not caused by other reasons) */
  SOLD_POOR_PRODUCTION = '3',
  /** Cow sold because of reproductive problems */
  SOLD_REPRODUCTIVE = '4',
  /** Cow sold due to mastitis or high somatic cells */
  SOLD_MASTITIS = '7',
  /** Cow sold due to udder problems (conformation or injury) */
  SOLD_UDDER = '9',
  /** Cow sold due to undesirable conformation (other than udder) */
  SOLD_UNDESIRABLE = 'A',
  /** Cow sold due to aggressive behavior (undesirable temperament) */
  SOLD_AGGRESSIVE = 'B',
  /** Cow sold for any other reason, or reason not specified */
  SOLD_OTHER = '5',
  /** Cow died on the dairy; downer cows that were euthanized should be included here */
  DIED = '6',
}
export enum SecondaryTerminationCode {
  /** No secondary reason given */
  NO_SECONDARY_REASON = '',
  /** Locomotion problems (feet, legs, lameness) */
  LOCOMOTION_PROBLEMS = '1',
  /** Poor production (low production not caused by other reasons) */
  POOR_PRODUCTION = '3',
  /** Reproductive problems */
  REPRODUCTIVE_PROBLEMS = '4',
  /** Mastitis or high somatic cells */
  MASTITIS_OR_HIGH_SOMATIC_CELLS = '7',
  /** Udder problems (conformation or injury) */
  UDDER_PROBLEMS = '9',
  /** Undesirable conformation (other than udder) */
  UNDESIRABLE_CONFORMATION = 'A',
  /** Aggressive behavior (undesirable temperament) */
  AGGRESSIVE_BEHAVIOR = 'B',
  /** Other reason, or reason not specified */
  OTHER_REASON = '5',
}
export enum PregnancyConfirmationCode {
  /** Not checked or uncertain */
  NOT_CHECKED_OR_UNCERTAIN = '0',
  /** Confirmed pregnant */
  CONFIRMED_PREGNANT = '1',
  /** Confirmed not pregnant */
  CONFIRMED_NOT_PREGNANT = '2',
  /** Delete conception date */
  DELETE_CONCEPTION_DATE = '3',
}
export interface AnimalLactation {
  rootAnimalId: string;
  lactNum: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';
  freshDate: string;
  /** Processing Date */
  calvPdate: number;
  /** Days in Milk */
  dim: string;
  herdCode: string;
  ctrlNo: string;
  procDate: string;
  modDate: string;
  /** Dairy Record Processing Centers */
  drpc: DairyRecordProcessingCenter;
  /** Laction Type */
  lt: LactationType;
  /** Lactation Mask Code */
  mk: LactationMask;
  /** Lactation Initiation Code */
  li: LactationInitiationCode;
  /** Primary Termination Code */
  tc: PrimaryTerminationCode;
  /** Secondary Termination Code */
  tc2: SecondaryTerminationCode | null;
  /** Percentage of test days from Owner Sampler */
  osPct: string;
  /** Pregnancy Confirmation Code */
  pc: PregnancyConfirmationCode;
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