export namespace PreparedRegex {
  export interface Model {
    name: string;
    regex?: string;
    flags?: string[];
  }

  export const email: Model = {
    name: 'email',
    regex: '^(([^<>()\\[\\]\\.,;:\\s@\\"]+(\\.[^<>()\\[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$',
    flags: ['i']
  };

  export const phone: Model = {
    name: 'phone',
    regex: '^([0|\\+[0-9]{1,5})?([7-9][0-9]{9})$',
    flags: []
  };

  export const none: Model = {
    name: 'none',
    regex: '',
    flags: []
  };

  export const custom: Model = {
    name: 'custom',
    regex: '',
    flags: []
  };

  export interface Flag {
    value: string;
    description: string;
  }

  export const flags: Flag[] = [
    { value: 'g', description: 'global match'},
    { value: 'i', description: 'ignore case'},
    { value: 'm', description: 'multiline'},
    { value: 'u', description: 'Unicode'},
    { value: 'y', description: 'sticky'},
  ];

  export const Regexes: Model[] = [
    PreparedRegex.none,
    PreparedRegex.email,
    PreparedRegex.phone,
    PreparedRegex.custom
  ];
}

