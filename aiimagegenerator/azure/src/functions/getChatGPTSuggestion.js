const { app } = require('@azure/functions');
const openai = require("../../lib/openai");

app.http('getChatGPTSuggestion', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        const response = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: 'Write a random prompt for an AI image generator',
            max_tokens: 100,
            temperature: 0.8,
        });
        
        context.log(`Heyssssscs ffHttp function processed request for url "${request.url}"`);

        const responseText = response.data.choices[0].text;

        return { body: responseText };
    }
});
