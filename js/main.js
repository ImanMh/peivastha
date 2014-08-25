chrome.webRequest.onBeforeRequest.addListener(
	requestHandler,
	{urls: ["*://*/*"]},
	["blocking"]
);

function requestHandler (details) {
	if (/^http:\/\/10\.10\.34\.34\//.test(details.url))
		return { redirectUrl: "http://peivastha.ir/default" };
}