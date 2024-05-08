type PrimaryColors = {
  primary100: string;
  primary80: string;
  primary60: string;
  primary40: string;
  primary20: string;
};

type SecondaryColors = {
  secondary100: string;
  secondary80: string;
  secondary60: string;
  secondary40: string;
  secondary20: string;
};

type NeutralColors = {
  black1: string;
  black2: string;
  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  white: string;
};

type HelperColors = {
  rating1: string;
  rating2: string;
  warning1: string;
  warning2: string;
  success: string;
};

export type AppColors = {
  primary: PrimaryColors;
  secondary: SecondaryColors;
  neutrals: NeutralColors;
  helpers: HelperColors;
};

export const themeColors: AppColors = {
  primary: {
    primary100: '#129575',
    primary80: '#71B1A1',
    primary60: '#AFD3CA',
    primary40: '#DBEBE7',
    primary20: '#F6FAF9',
  },

  secondary: {
    secondary100: '#FF9C00',
    secondary80: '#FFA61A',
    secondary60: '#FFBA4D',
    secondary40: '#FFCE80',
    secondary20: '#FFE1B3',
  },
  neutrals: {
    black1: '#000000',
    black2: '#000000',
    gray1: '#484848',
    gray2: '#797979',
    gray3: '#A9A9A9',
    gray4: '#D9D9D9',
    white: '#FFFFFF',
  },
  helpers: {
    rating1: '#FFAD30',
    rating2: '#FF9C00',
    warning1: '#FFAD30',
    warning2: '#995E00',
    success: '#31B057',
  },
};
