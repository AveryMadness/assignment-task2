export const BLUE = '#00A3FF';
export const ORANGE = '#FF8700';
export const GREY = '#8FA7B3';
export const SLATE = '#4D6F80';
export const TEXT = '#4D6F80';
export const TEXT_LIGHT = '#5C8599';

export interface BoxTheme {
    color: string;
    background: string;
    border: string;
}

export const BOX_THEMES: Record<'blue' | 'orange' | 'grey', BoxTheme> = {
    blue: { color: BLUE, background: '#E6F7FB', border: '#B3DAE2' },
    orange: { color: ORANGE, background: '#FCF0E4', border: '#F1BB87' },
    grey: { color: GREY, background: '#E6ECEF', border: '#C4D2D9' },
};
