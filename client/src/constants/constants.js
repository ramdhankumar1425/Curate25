const MIN_PROMPT_LENGTH = 50;
const MAX_PROMPT_LENGTH = 1000;

const ALLOWED_EDITS = {
    COLOR: "color",
    BACKGROUND_COLOR: "background-color",
    MARGIN: "margin",
    PADDING: "padding",
    BORDER: "border",
    BORDER_RADIUS: "border-radius",
    FONT_FAMILY: "font-family",
    FONT_SIZE: "font-size",
    FONT_WEIGHT: "font-weight",
    OPACITY: "opacity",
    WIDTH: "width",
    HEIGHT: "height",
    TEXT_ALIGN: "text-align",
};

const ALLOWED_FONTS = [
    "Poppins",
    "Roboto",
    "Inter",
    "Oswald",
    "Rubik",
    "Playfair Display",
];

export { MIN_PROMPT_LENGTH, MAX_PROMPT_LENGTH, ALLOWED_EDITS, ALLOWED_FONTS };
