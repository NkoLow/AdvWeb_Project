const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Dynamic endpoint that takes an argument
app.get('/api/data/:arg', (req, res) => {
    const arg = req.params.arg;
    // Call a separate function to generate a JSON response
    const result = generateResponse(arg);
    res.json(result);
});

// Separate function for generating the JSON response
function generateResponse(arg) {
    // You can customize this function to generate a response based on 'arg'
    return { message: `You requested data with argument: ${arg}` };
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
