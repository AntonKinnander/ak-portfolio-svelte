import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Initialize with default colors
const colors = writable(['#0F0098', '#ffffff']);

// Function to update CSS variables
function updateCSSVariables([bg, fg]) {
    if (browser) {
        document.documentElement.style.setProperty('--activeBG', bg);
        document.documentElement.style.setProperty('--activeFG', fg);
    }
}

// Subscribe to changes and update CSS variables
colors.subscribe(updateCSSVariables);

// Export a function to update colors that can be used anywhere
export function updateActiveColors(bgColor, fgColor) {
    colors.set([bgColor, fgColor]);
}

export default colors; 