// const { Anthropic } = require("@anthropic-ai/sdk");
const { Anthropic } = require("@anthropic-ai/sdk");

const anthropic = new Anthropic({
    apiKey: process.env.CLAUDE_API_KEY,
});

module.exports = anthropic;
