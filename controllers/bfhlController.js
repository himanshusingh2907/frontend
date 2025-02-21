// controllers/bfhlController.js

const handlePostRequest = (req, res) => {
    try {
        const { data } = req.body;
        console.log("hello");
        if (!data || !Array.isArray(data)) {
            console.log("data:", data);
            return res.status(400).json({ is_success: false, message: "Invalid request format. 'data' must be an array." });
        }

        // Static values
        const name = "John Doe";
        const dob = "17091999";
        const email = "john@xyz.com";
        const roll_number = "ABCD123";

        const user_id = `${name.replace(/\s+/g, '_').toLowerCase()}_${dob}`;

        const numbers = data.filter(item => !isNaN(item));
        const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));

        // Get highest_alphabet (case-insensitive but original case preserved)
        const highest_alphabet = alphabets.length > 0
            ? [alphabets.reduce((a, b) => a.toLowerCase() > b.toLowerCase() ? a : b)]
            : [];

        return res.status(200).json({
            is_success: true,
            user_id,
            email,
            roll_number,
            numbers,
            alphabets,
            highest_alphabet
        });
    } catch (error) {
        return res.status(500).json({ is_success: false, message: "Server error" });
    }
};

const handleGetRequest = (req, res) => {
    return res.status(200).json({ operation_code: 1 });
};

module.exports = { handlePostRequest, handleGetRequest };
