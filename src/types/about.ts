export interface AboutPageContent {
  Members: MembersT[];
  introContent: string[];
  introTitle: string;
  missionContent: string;
  missionFooterNote: string;
  missionTitle: string;
  missions: MissionsT[];
  teamContent: string;
  teamFooterNote: string;
  teamTitle: string;
}

export interface MembersT {
  _id: string;
  headshotUrl: string;
  name: string;
  role: string;
}

export interface MissionsT {
  _id: string;
  mission: string;
}

export interface TeamT {
  teamContent: string;
  teamFooterNote: string;
  teamTitle: string;
  Members: MembersT[];
}
