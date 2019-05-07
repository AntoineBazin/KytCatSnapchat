// -----JS CODE-----
// @input Component.FaceStretchVisual faceStretch

var isStretched = false;
var stretch = 0;
var intensity = 0;

function MouthOpened(eventData)
{
	if (isStretched)
		stretch = -1;
	else
		stretch = 1;
}

function Update()
{
	if (stretch == 1)
		intensity += getDeltaTime();
	else if (stretch == -1)
		intensity -= getDeltaTime();
	if (intensity >= 1) {
		isStretched = true;
		stretch = 0;
	} else if (intensity <= 0) {
		isStretched = false;
		stretch = 0;
	}
	script.faceStretch.setFeatureWeight("Feature0", intensity);
}

var event = script.createEvent("MouthOpenedEvent");
event.bind(MouthOpened);

var update = script.createEvent("UpdateEvent");
update.bind(Update);
