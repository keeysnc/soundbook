module.exports = {
	// other webpack configurations...
	output: {
		chunkFilename: "[name].bundle.js", // Add this to ensure chunking works
	},
};
