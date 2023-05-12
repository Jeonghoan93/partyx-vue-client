export enum Roles {
  Any = 'edge.*',
  Admin = 'edge.admin',
  SalesAdmin = 'edge.sales_admin',
  Coach = 'edge.coach',
  Advisor = 'edge.advisor',
  Agent = 'edge.agent',
  AgentPlus = 'edge.agent_plus',
  PartnerAdmin = 'edge.partner_admin',
  PartnerAgent = 'edge.partner_agent',
  MeetingManager = 'meetings.manager',
  MeetingUser = 'meetings.user',
}

export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface RequestProps {
  pagination: {
    sortBy: string;
    descending: boolean;
    page: number;
    rowsPerPage: number;
  };
}
