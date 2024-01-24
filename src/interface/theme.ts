export type TTheme = "dark" | "light"

export function isTTheme(value: any): value is TTheme {
    return value === "dark" || value === "light";
}