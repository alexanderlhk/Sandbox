// https://www.perplexity.ai/search/37863cb8-19ba-4d00-b49f-3da361f7fc4c
// MutationObserver is an API that allows you to observe changes to the DOM. It provides a way to react to modifications such as node additions, removals, attribute changes, or text content changes.
// Use Cases: Useful for implementing features like lazy loading, auto-updating UI elements, or real-time data synchronization.

let observer1 = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === "childlist") {
            console.log("a child node has been added or removed");
        }
    });
});

observer1.observe(document.getElementById("myElement"), {
    childList: true,
    subtree: true
});