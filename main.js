
rot13 = function(text) {
    var selection = text.selectionText;
    selection = selection.replace(/[a-zA-Z]/g, function(c){
        return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    });
    console.log(selection);
    alert(selection);
};

chrome.contextMenus.create({
    title: "rot13",
    contexts: ["selection"],
    onclick: rot13
});