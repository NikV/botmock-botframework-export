export type CollectedResponses = { [assetName: string]: any };

export type IntentMap = Map<string, string[]>;

export type Message = Partial<{
  message_id: string;
  message_type: string;
  next_message_ids: any[];
  payload: {
    text?: string;
    quick_replies?: any[];
    buttons?: any[];
    selectedResult: any;
    image_url: string;
  };
}>;

export type Utterance = { text: string; variables?: Variable[] };

export type Intent = {
  id: string;
  name: string;
  utterances: Utterance[];
  created_at: {};
  updated_at: {};
  is_global: boolean;
};

export interface Project {
  project: {
    id: string;
    name: string;
    type: string;
    platform: string;
    created_at: {
      date: string;
      timezone_type: number;
      timezone: string
    };
    updated_at: {
      date: string;
      timezone_type: number;
      timezone: string;
    }
  };
  board: {
    board: { root_messages: any[], messages: Message[] };
    slots: {};
    variables: {}[];
    created_at: {};
    updated_at: {};
  };
  intents: Intent[];
  entities: any[];
  variables: any[];
}

type Variable = {
  id: string;
  name: string;
  type: string;
  entity: string;
  default_value: string;
  start_index: string;
};
