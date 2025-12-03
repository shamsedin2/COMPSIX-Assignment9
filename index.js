// COMPSIX Assignment 9
// Main JavaScript file

// Check if running in browser or Node.js
const isBrowser = typeof window !== 'undefined';

// Main function
function main() {
    console.log('COMPSIX Assignment 9 - JavaScript Project');
    console.log('Starting application...');
    
    // Add your code here
    
    if (isBrowser) {
        // Browser-specific code
        const output = document.getElementById('output');
        if (output) {
            output.innerHTML = '<p><strong>JavaScript is running!</strong></p><p>Ready to start Assignment 9.</p>';
        }
    } else {
        // Node.js-specific code
        console.log('Running in Node.js environment');
    }
}

// Run main function when DOM is ready (browser) or immediately (Node.js)
if (isBrowser) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', main);
    } else {
        main();
    }
} else {
    main();
}

// Export for Node.js modules (optional)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { main };
}
