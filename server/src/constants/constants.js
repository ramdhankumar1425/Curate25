MIN_PROMPT_LENGTH = 50;
MAX_PROMPT_LENGTH = 1000;
MAX_REFINED_PROMPT_LENGTH = 800;

MAX_TOKENS_ALLOWED = 8000;

AVAILABLE_PACKAGES = ["react", "react-dom", "react-router-dom"];

AVAILABLE_IMAGE_SOURCES = [
    "https://www.pexels.com/",
    "https://unsplash.com/",
    "https://pixabay.com/",
];

EDIT_IDENTIFIER = "curate-edit-id";

module.exports = {
    MIN_PROMPT_LENGTH,
    MAX_PROMPT_LENGTH,
    MAX_REFINED_PROMPT_LENGTH,
    MAX_TOKENS_ALLOWED,
    AVAILABLE_PACKAGES,
    AVAILABLE_IMAGE_SOURCES,
    EDIT_IDENTIFIER,
};
