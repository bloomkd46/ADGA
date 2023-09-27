
export interface Response {
  result;
  targetUrl: null;
  success: boolean;
  error: null;
  unAuthorizedRequest: boolean;
  __adga: boolean;
}
export interface Login extends Response {
  result: {
    accessToken: string;
    encryptedAccessToken: string;
    expireInSeconds: number;
    userId: number;
  };
}
type Addresses = {
  id: number;
  addressTypeId: 1;
  addressLine1: string;
  addressLine2: string;
  isActive: boolean;
  postalCodeId: number;
  postalCode: {
    /** Zip Code */
    code: string;
    isActive: boolean;
    city: string;
    stateId: number;
    countryId: number;
    state: {
      code: 'WA' | string;
      name: 'Washington' | string;
      isActive: boolean;
      taxRate: null;
      countryId: number;
      country: null;
      id: number;
    };
    country: {
      code: 'US' | string;
      name: 'United States' | string;
      isActive: boolean;
      id: number;
    };
    id: number;
  };
  addressType: {
    tenantId: 1;
    code: 'mail';
    name: 'Mailing';
    isDefault: boolean;
    isPhysical: boolean;
    isActive: boolean;
    isDeleted: boolean;
    deleterUserId: 2;
    deletionTime: null;
    lastModificationTime: string;
    lastModifierUserId: 2;
    creationTime: string;
    creatorUserId: null;
    id: 1;
  };
}[];
export interface CurrentLoginInfo extends Response {
  result: {
    application: {
      version: string;
      releaseDate: string;
      features: Record<string, never>;
    };
    user: {
      /** FIRST NAME */
      name: string;
      /** LAST NAME */
      surname: string;
      userName: string;
      emailAddress: string;
      id: number;
    };
    tenant: { tenancyName: 'Default' | string; name: 'Default' | string; id: 1 | number; };
    accountProfile: {
      account: {
        tenantId: 1;
        associatedUserId: number;
        /** LAST NAME */
        lastName: 'BLOOM';
        /** FIRST NAME */
        firstName: 'KOLTON';
        organizationName: null;
        code: null;
        isActive: boolean;
        isPrimary: boolean;
        membershipStatus: 'Active' | 'Inactive' | string;
        id: number;
      };
      addresses: Addresses;
      contacts: {
        id: number;
        accountId: number;
        phoneNumber: string;
        isActive: boolean;
        phoneTypeId: number;
        phoneType: {
          tenantId: 1;
          code: 'MP' | string;
          name: 'Mobile Phone' | string;
          isActive: boolean;
          isDeleted: boolean;
          deleterUserId: null;
          deletionTime: null;
          lastModificationTime: null;
          lastModifierUserId: null;
          creationTime: string;
          creatorUserId: 2;
          id: 1;
        };
      }[];
      accountMembership: null;
      sponseeAccount: [];
      sponsorAccount: null;
      herdNameAuthorizedByAccount: null;
      herdNameAuthorizedAccounts: [];
      tattooAuthorizedByAccount: null;
      tattooAuthorizedAccounts: [];
      memberTattoo: string;
      herdName: null | string;
    };
  };
}
export interface YearTattoo extends Response {
  result: {
    id: number;
    code: string;
    year: number;
  };
}
export interface AccountBalance extends Response {
  /** Negative Representation of Account Balance */
  result: number;
}
export interface LinkedAccounts extends Response {
  result: {
    totalCount: number;
    items: {
      /** LAST NAME */
      lastName: string;
      /** FIRST NAME */
      firstName: string;
      organizationName: null;
      isActive: boolean;
      isOrg: false;
      userName: null;
      emailAddress: null;
      /** FIRST & LAST NAME */
      displayName: string;
      associatedUserId: number;
      isPrimary: boolean;
      addresses: Addresses;
      creditLimit: 20 | number;
      lifeTimeCredit: null;
      membershipStatus: 'Active' | 'Inactive' | string;
      memebrshipType: 'Youth (Must be under 21 years old)' | string;
      isSponsor: boolean;
      isSponsee: boolean;
      isRenewApplicable: boolean;
      isNewApplicable: boolean;
      isServingGracePeriod: boolean;
      isPaymentPending: boolean;
      isUnderReview: boolean;
      membershipRenewalLastDate: string;
      membershipDetails: {
        accountId: number;
        herdNameOwnerAccountName: null;
        tattooOwnerAccountName: 'Owner' | string;
        tattoo: string;
        isActive: boolean;
        membershipType: 'Youth (Must be under 21 years old)' | string;
        membershipTypeRef: 6 | number;
        herdName: null;
        isHerdNamePermanent: boolean;
        memberSince: string;
        membershipDate: string;
        membershipDuration: 4 | number;
        membershipTypeString: 'Individual Youth (Must be under 21 years old)' | string;
        id: number;
      };
      firstMembershipDetails: {
        accountId: number;
        herdNameOwnerAccountName: null;
        tattooOwnerAccountName: null;
        tattoo: string;
        isActive: boolean;
        membershipType: null;
        membershipTypeRef: null;
        herdName: null;
        isHerdNamePermanent: boolean;
        memberSince: string;
        membershipDate: string;
        membershipDuration: null;
        membershipTypeString: null;
        id: number;
      };
      id: number;
    }[];
  };
}
export declare enum BreedID {
  NIGERIAN_DWARF = 8
}
export enum HornID {
  DISBUDDED = 2
}
export enum EarID {
  ERECT = 3
}
export type Breed = ({
  code: 'D';
  description: 'NIGERIAN DWARF';
  usdaCode: 'ND';
  avgFatPercentage: 6.4;
  gestationDays: 140;
  pureBred: true;
  american: false;
  grade: false;
  stud: false;
  isActive: true;
  breedingMinAgeMale: 2;
  breedingMinAgeFeMale: 5;
  maxNumberOfOffSpring: 6;
  herdBookType: 'Closed';
  breedMarking: [];
  breedColor: [];
  ear: null;
  id: 8;
} | {
  code: 'N';
  description: 'NUBIAN';
  usdaCode: 'NU';
  avgFatPercentage: 5;
  gestationDays: 141;
  pureBred: true;
  american: true;
  grade: true;
  stud: false;
  isActive: true;
  breedingMinAgeMale: 2;
  breedingMinAgeFeMale: 5;
  maxNumberOfOffSpring: 6;
  herdBookType: 'Closed';
  breedMarking: [];
  breedColor: [];
  ear: null;
  id: 5;
} | {
  code: string;
  description: string;
  usdaCode: string;
  avgFatPercentage: number;
  gestationDays: number;
  pureBred: boolean;
  american: boolean;
  grade: boolean;
  stud: boolean;
  isActive: boolean;
  breedingMinAgeMale: number;
  breedingMinAgeFeMale: number;
  maxNumberOfOffSpring: number;
  herdBookType: string;
  breedMarking: [];
  breedColor: [];
  ear: null;
  id: number;
});
export type Tattoo = [
  {
    tenantId: 1;
    tattooLocationId: 1;
    tattoo: string;
    comment: null;
    tattooLocation: {
      tenantId: 1;
      code: 'RE';
      name: 'RE';
      isActive: true;
      isDeleted: false;
      deleterUserId: null;
      deletionTime: null;
      lastModificationTime: null;
      lastModifierUserId: null;
      creationTime: string;
      creatorUserId: null;
      id: 1;
    };
    isMemberTattoo: boolean;
    isActive: true;
    id: string;
  },
  {
    tenantId: 1;
    tattooLocationId: 2;
    tattoo: string;
    comment: null;
    tattooLocation: {
      tenantId: 1;
      code: 'LE';
      name: 'LE';
      isActive: true;
      isDeleted: false;
      deleterUserId: null;
      deletionTime: null;
      lastModificationTime: null;
      lastModifierUserId: null;
      creationTime: string;
      creatorUserId: null;
      id: 2;
    };
    isMemberTattoo: boolean;
    isActive: true;
    id: string;
  }
];
export interface OwnedGoats extends Response {
  result: {
    totalCount: number;
    items: {
      name: string;
      normalizeId: string;
      /** Nigerian Dwarfs: 8 */
      breedId: BreedID;
      breederAccountId: number;
      ownerAccountId: number;
      sireId: number;
      damId: number;
      sex: 'Female' | 'Male';
      herdBook: 'Purebred' | string;
      dateOfBirth: string;
      dateOfDeath: null | string;
      isActive: boolean;
      hornId: HornID;
      earId: EarID;
      colorComment: null | string;
      numberBucks: number;
      numberDoes: number;
      isAlive: boolean;
      isLeased: boolean;

      radioFrequencyLocationId: null;
      isRadioFrequencyIdAvailable: false;
      radioFrequencyNumber: null;
      radioFrequencyLocation: null;
      aiMating: null;
      embryoTransfer: null;
      isAdgaRegistered: boolean;
      isTransferInProcess: boolean;
      horn: null;
      ear: null;
      breederAccount: null;
      ownerAccount: null;
      animalTattoo: Tattoo;
      breed: Breed;
      conformsToBreed: null;
      memberTattoo: string;
      memberTattooLocation: 'RE' | 'LE';
      birthTattoo: string;
      birthTattooLocation: 'LE' | 'RE';
      rfidLocation: null;
      animalLAScore: null;
      freshenDate: null;
      lastAppraisalYear: null;
      lactationNumber: null;
      removalReasonId: null;
      laTripAnimalId: null;
      laAnimalStatus: 0;
      removalReason: null;
      id: number;
    }[];
  };
}

export interface MembershipDetails extends Response {
  result: {
    accountId: number;
    tattoo: string;
    isActive: boolean;
    herdName: null;
    isHerdNamePermanent: boolean;
    herdActionGroupActionId: null;
    herdActionId: null;
    dateOfBirth: string;
    memberSince: string;
    membershipDate: string;
    membershipAction: {
      description: 'Youth (Must be under 21 years old)' | string;
      transactionDate: string;
      amount: number;
      amountPaid: null;
      isActive: boolean;
      action: {
        code: 'YMMB' | string;
        description: 'Youth (Must be under 21 years old)' | string;
        ageRestriction: 21 | number;
        lifetimeCredit: 0.5 | 1 | null;
        year: null;
        defaultImage: null;
        isActive: boolean;
        initialStatusId: 3 | number;
        inProgressStatusId: 2 | number;
        completionStatusId: 4 | number;
        isApplicableForLifeTimeMembership: boolean;
        isAnimalRegistrationAllowed: boolean;
        isSponsoringAllowed: boolean;
        memberGeneralLedgerAccountId: number;
        nonMemberGeneralLedgerAccountId: number;
        memberGeneralLedgerAccount: null;
        nonMemberGeneralLedgerAccount: null;
        initialStatus: null;
        inProgressStatus: null;
        completionStatus: null;
        id: number;
      };
      statusId: number;
      status: {
        code: 'PND' | string;
        description: 'Pending' | string;
        isActive: boolean;
        type: 'Pending' | string;
        id: number;
      };
      units: null;
      unitCost: null;
      actionGroupAction: {
        isActive: boolean;
        actionId: number;
        actionGroupId: number;
        feeCode: 'FIYRM' | string;
        feeId: null;
        membershipTypeId: number;
        amount: null;
        membershipType: {
          code: 'IND' | string;
          description: 'Individual Membership' | string;
          name: 'Individual' | string;
          isActive: boolean;
          maxPeopleCount: 1 | number;
          id: 1 | number;
        };
        id: number;
      };
      targetEntityId: number;
      targetEntityFullName: 'ADGA.NextGen.Member.AccountMembership';
      formSubmissionId: string;
      runningBalance: null;
      id: number;
    };
    account: {
      /** LAST NAME */
      lastName: 'BLOOM';
      /** FIRST NAME */
      firstName: 'KOLTON';
      organizationName: null;
      isActive: boolean;
      isOrg: boolean;
      userName: null;
      emailAddress: null;
      /** FIRST & LAST NAME */
      displayName: 'KOLTON BLOOM';
      associatedUserId: number;
      isPrimary: boolean;
      testerId: null;
      code: null;
      addresses: [];
      accountMembership: { tattoo: string; herdName: null; }[];
      isSubscribedForEmail: boolean;
      isSubscribedForNewsEvents: boolean;
      isListedInDirectory: boolean;
      isListedInWebPortal: boolean;
      isAddressVisibleInDirectory: boolean;
      isAddressVisibleInWebPortal: boolean;
      isEmailListed: boolean;
      isContactPrivate: boolean;
      isEmailConfirmed: boolean;
      creditLimit: 20;
      lifeTimeCredit: null;
      membershipStatus: 'Active' | 'Inactive' | string;
      memebrshipType: null;
      isServingGracePeriod: boolean;
      membershipRenewalLastDate: null;
      contacts: [];
      id: number;
    };
    breeds: [];
    programs: [];
    peopleRecords: [];
    peopleAttachment: [];
    id: number;
  };
}
export interface DirectlyLinkedAccount extends Response {
  result: {
    /** LAST NAME */
    lastName: string;
    /** FIRST NAME */
    firstName: string;
    organizationName: null;
    isOrg: boolean;
    /** FIRST & LAST NAME */
    displayName: string;
    id: number;
  };
}
export interface Goat extends Response {
  result: {
    tenantId: 1;
    normalizeId: string;
    registrationDate: string;
    creationTime: string;
    name: string;
    breedId: BreedID;
    conformsToBreedIDId: BreedID;
    breederAccountId: number;
    ownerAccountId: number;
    herdId: string;
    aiMating: null | any;
    embryoTransfer: null | any;
    priorDNA: null | any;
    sireId: number;
    sireName: null;
    sireLeased: null;
    damId: number;
    damName: null;
    damLeased: null;
    breedIDOrCode: boolean;
    sex: 'Female' | 'Male';
    sexName: 'Female' | 'Male';
    markedSold: null;
    markedSoldDate: null;
    dateOfBirth: string;
    dateOfDeath: null;
    numberBucks: number;
    numberDoes: number;
    isActive: boolean;
    isAlive: boolean;
    isLeased: boolean;
    hornId: HornID;
    earId: EarID;
    radioFrequencyLocationId: null;
    isRadioFrequencyIdAvailable: boolean;
    radioFrequencyNumber: null;
    radioFrequencyLocation: null;
    isDOE4GenerationPedigreeOpted: boolean;
    colorComment: null;
    hornName: 'DISBUDDED' | 'POLLED';
    earName: 'ERECT' | string;
    conformsToBreedIDName: Breed['description'];
    memberTattoo: string;
    birthTattoo: string;
    isReTattoo: boolean;
    externalAnimalRegistrationId: null;
    /** FIRST & LAST NAME */
    ownerAccountName: 'KOLTON BLOOM';
    /** FIRST & LAST NAME */
    breederAccountName: 'MIKE & CARISSA GILLIS';
    breedName: 'NIGERIAN DWARF' | string;
    format1Identification: string;
    animalPurityData: { D: '100.000000000' | string; };
    horn: { code: 'D'; name: 'DISBUDDED'; isActive: true; id: 2; } | { code: string; name: string; isActive: boolean; id: number; };
    ear: { code: 'R'; name: 'ERECT'; isActive: true; id: 3; } | { code: string; name: string; isActive: boolean; id: number; };
    breederAccount: {
      /** LAST NAME */
      lastName: string;
      /** FIRST NAME */
      firstName: string;
      organizationName: null;
      isActive: boolean;
      isOrg: boolean;
      emailAddress: null;
      /** FIRST & LAST NAME */
      displayName: string;
      associatedUserId: number;
      isPrimary: boolean;
      creditLimit: 20;
      lifeTimeCredit: null;
      membershipStatus: 'Active' | 'Inactive' | string;
      defaultAddress: null;
      id: number;
    };
    ownerAccount: {
      /** LAST NAME */
      lastName: string;
      /** FIRST NAME */
      firstName: string;
      organizationName: null;
      isActive: boolean;
      isOrg: boolean;
      emailAddress: null;
      /** FIRST & LAST NAME */
      displayName: string;
      associatedUserId: number;
      isPrimary: boolean;
      creditLimit: 20;
      lifeTimeCredit: null;
      membershipStatus: 'Active' | 'Inactive' | string;
      defaultAddress: null;
      id: number;
    };
    transferToAccount: null;
    transferDate: null;
    animalTattoo: Tattoo;
    breed: Breed;
    conformsToBreedID: Breed;
    colorAndMarking: string;
    aiMemoId: null | any;
    serviceMemoId: null | any;
    sire: null;
    dam: null;
    herdBook: 'Purebred' | string;
    isRegistrationPaperless: boolean;
    showOwnerDetails: boolean;
    showBreedIDerDetails: boolean;
    rfidLocation: null;
    adgaAssociation: { isAdga: boolean; };
    id: number;
  };
}
export interface Goats extends Response {
  result: {
    totalCount: number;
    items: {
      name: string;
      normalizeId: string;
      breedId: BreedID;
      breederAccountId: number;
      ownerAccountId: number;
      sireId: number;
      damId: number;
      sex: 'Female' | 'Male';
      dateOfBirth: string;
      dateOfDeath: null;
      isActive: boolean;
      hornId: HornID;
      earId: EarID;
      colorComment: null;
      numberBucks: number;
      numberDoes: number;
      isAlive: boolean;
      isLeased: boolean;
      isAdgaRegistered: boolean;
      horn: null;
      ear: null;
      breederAccount: {
        /** LAST NAME */
        lastName: string;
        /** FIRST NAME */
        firstName: string;
        organizationName: null;
        isActive: boolean;
        isOrg: boolean;
        emailAddress: null;
        /** FIRST & LAST NAME */
        displayName: string;
        associatedUserId: number;
        isPrimary: boolean;
        creditLimit: 20;
        lifeTimeCredit: null;
        membershipStatus: 'Active' | 'Inactive' | string;
        defaultAddress: null;
        id: number;
      };
      ownerAccount: {
        /** LAST NAME */
        lastName: string;
        /** FIRST NAME */
        firstName: string;
        organizationName: null;
        isActive: boolean;
        isOrg: boolean;
        emailAddress: null;
        /** FIRST & LAST NAME */
        displayName: string;
        associatedUserId: number;
        isPrimary: boolean;
        creditLimit: 20;
        lifeTimeCredit: null;
        membershipStatus: 'Active' | 'Inactive' | string;
        defaultAddress: null;
        id: number;
      };
      animalTattoo: [];
      breed: null;
      conformsToBreed: null;
      aiMemoId: null;
      aiMating: null;
      embryoTransfer: null;
      serviceMemoId: null;
      memberTattoo: '';
      memberTattooLocation: '';
      birthTattoo: '';
      birthTattooLocation: '';
      id: number;
    }[];
  };
}
export interface People extends Response {
  result: {
    totalCount: number;
    items: {
      /** Last Name */
      lastName: string;
      /** First Name */
      firstName: string;
      organizationName: '' | string;
      isActive: boolean;
      isOrg: boolean;
      userName: string;
      emailAddress: string;
      /** First & Last Name */
      displayName: string;
      associatedUserId: number;
      isPrimary: boolean;
      testerId: null;
      code: null;
      addresses: {
        id: number;
        accountId: number;
        addressTypeId: 1;
        addressLine1: string;
        addressLine2: ' ';
        zip4: null;
        isActive: boolean;
        isValid: boolean;
        postalCode: {
          code: string;
          isActive: boolean;
          city: string;
          stateId: number;
          countryId: number;
          state: {
            code: 'US';
            name: 'United States';
            isActive: boolean;
            id: number;
          }[];
          country: {
            code: 'US';
            name: 'United States';
            isActive: boolean;
            id: number;
          }[];
          id: number;
        };
        addressType: null;
        normalizedAddress: '23943 BULSON RD,  , MOUNT VERNON, WA, 98274, US';
      }[];
      accountMembership: { tattoo: 'GFF5'; herdName: 'GILLIS FAMILY FARM'; }[];
      isSubscribedForEmail: boolean;
      isSubscribedForNewsEvents: boolean;
      isListedInDirectory: boolean;
      isListedInWebPortal: boolean;
      isAddressVisibleInDirectory: boolean;
      isAddressVisibleInWebPortal: boolean;
      isEmailListed: boolean;
      isContactPrivate: boolean;
      isEmailConfirmed: boolean;
      creditLimit: null;
      lifeTimeCredit: null;
      membershipStatus: 'Active' | 'Inactive' | string;
      memebrshipType: null;
      isServingGracePeriod: boolean;
      membershipRenewalLastDate: null;
      contacts: [];
      id: number;

    }[];
  };
}
export interface Awards extends Response {
  result: {
    totalCount: number;
    items: ({
      animalId: number;
      awardId: 12;
      awardCode: '*B';
      awardDescription: '*BUCK';
      awardYear: number;
      creationTime: string;
      processedDate: string;
      staffUserId: null;
      isActive: boolean;
      awardCount: 1;
      id: 523997;
    } | {
      animalId: number;
      awardId: number;
      awardCode: string;
      awardDescription: string;
      awardYear: number;
      creationTime: string;
      processedDate: string;
      staffUserId: null;
      isActive: boolean;
      awardCount: number;
      id: number;
    })[];
  };
}
export interface Shows extends Response {
  result: {
    totalCount: number;
    items: {
      roaBreedId: number;
      animalId: number;
      winnerType: 'GrandChampion' | 'ReserveGrandChampion' | 'ChallengeWinner';
      animalOwnerId: number;
      isOwnerAuthorised: boolean;
      isTattooProblem: boolean;
      tattooProblem: number;
      tattooProblemDescription: null;
      legProcessAward: 'ULEG' | 'RLEG' | 'CHRL' | null;
      tenantId: number;
      legType: 'U' | 'R' | null;
      legNumber: number;
      breedName: 'NIGERIAN DWARF' | string;
      showSanctionId: number;
      showName: string;
      sanctionShowTime: string;
      judgeId: null;
      isAbsent: boolean;
      id: number;
    }[];
  };
}
export type LAClassifications = 'P' | 'A' | 'P' | 'G' | '+' | 'V' | 'E';
export interface LinearAppraisalYoungStock extends Response {
  result: {
    totalCount: number;
    items: {
      animalId: number;
      lactationNumber: null;
      lactationStart: null;
      linearAppraisalRequestId: number;
      appraisalDate: string;
      stature: number;
      rearLegs: number;
      udderDepth: null;
      strength: number;
      foreUdder: number;
      teatPlacement: null;
      dairyness: number;
      rearUderHeight: number;
      teatDiameter: null;
      rumpAngle: number;
      rearUdderArch: null;
      rearUdderSideView: null;
      rumpWidth: number;
      medialSuspensoryLigament: null;
      teatLength: null;
      head: LAClassifications;
      back: LAClassifications;
      shoulders: LAClassifications;
      rump: LAClassifications;
      legsFront: LAClassifications;
      texture: null;
      legsRear: LAClassifications;
      feet: LAClassifications;
      miscellaneous1: null | number;
      miscellaneous2: null | number;
      miscellaneous3: null | number;
      generalAppearance: LAClassifications;
      dairyStrength: LAClassifications;
      bodyCapacity: LAClassifications;
      mammarySystem: null;
      finalScore: null;
      notes: null;
      isChecked: boolean;
      isPermanent: boolean;
      isScored: boolean;
      isYoungStock: true;
      youngStockTotalScore: LAClassifications;
      isActive: boolean;
      id: number;
    }[];
  };
}
export interface LinearAppraisal extends Response {
  result: {
    totalCount: number;
    items: {
      animalId: number;
      lactationNumber: number;
      lactationStart: '2' | string;
      linearAppraisalRequestId: number;
      appraisalDate: string;
      stature: number;
      rearLegs: number;
      udderDepth: number;
      strength: number;
      foreUdder: number;
      teatPlacement: number;
      dairyness: number;
      rearUderHeight: number;
      teatDiameter: number;
      rumpAngle: number;
      rearUdderArch: number;
      rearUdderSideView: number;
      rumpWidth: number;
      medialSuspensoryLigament: number;
      teatLength: null | number;
      head: LAClassifications;
      back: LAClassifications;
      shoulders: LAClassifications;
      rump: LAClassifications;
      legsFront: LAClassifications;
      texture: LAClassifications;
      legsRear: LAClassifications;
      feet: LAClassifications;
      miscellaneous1: null | number;
      miscellaneous2: null | number;
      miscellaneous3: null | number;
      generalAppearance: LAClassifications;
      dairyStrength: LAClassifications;
      bodyCapacity: LAClassifications;
      mammarySystem: LAClassifications;
      finalScore: number;
      notes: null;
      isChecked: boolean;
      isPermanent: boolean;
      isScored: boolean;
      isYoungStock: false;
      youngStockTotalScore: null;
      isActive: boolean;
      id: number;
    }[];
  };
}
export interface TransferHistory extends Response {
  result: {
    totalCount: number;
    items: Transfer[];
  };
}
export interface Transfer {
  ownerAccountId: number;
  normalizeId: string;
  animalId: number;
  effectiveFrom: string;
  effectiveFromLongDate: string;
  effectiveTo: null | string;
  isActive: boolean;
  ownerAccount: {
    /** LAST NAME */
    lastName: string;
    /** FIRST NAME */
    firstName: string;
    organizationName: null;
    isActive: boolean;
    isOrg: boolean;
    emailAddress: null;
    /** FIRST & LAST NAME */
    displayName: string;
    associatedUserId: number;
    isPrimary: boolean;
    creditLimit: 20;
    lifeTimeCredit: null;
    membershipStatus: 'Active' | 'Inactive' | string;
    defaultAddress: {
      addressLine1: string;
      addressLine2: string;
      postalCode: {
        code: string;
        isActive: boolean;
        city: string;
        stateId: number;
        countryId: number;
        state: {
          code: string;
          name: string;
          isActive: boolean;
          taxRate: null;
          countryId: number;
          country: null;
          id: number;
        };
        country: null;
        id: number;
      };
    };
    id: number;
  };
}