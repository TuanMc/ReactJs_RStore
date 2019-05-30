export const LANG_CHANGE = "LANG_CHANGE";

export function languageChange(currLang) {
    return {
        type: LANG_CHANGE,
        payload: currLang
    }
}