// Configure your Ushahidi deployment
//
// Uncomment lines below to configure your deployment
// window.ushahidi = {
// 	backendUrl : "https://ushahidi-platform-api-release.herokuapp.com"
// };

// Cloud API routing
// Assuming we have a hostname like zombies.ushahidi.io
// The API will be api.zombies.ushahidi.io
window.ushahidi {
	backendUrl : location.protocol + "//api." + location.hostname + (location.port ? ":" + location.port : "");
};
