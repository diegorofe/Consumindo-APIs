import "core-js";
import "regenerator-runtime/runtime"

import SentryObject from "./sentry_object";
import { getSentryObject } from "./sentry_service";

async function loadSentryObject(){
    let sentryObjects = []
    let sentryObjectsJSON = await getSentryObject()
    sentryObjectsJSON.forEach(sentry => {
        const newSentry = new SentryObject(sentry["sentreyId"], sentry["fullname"], sentry["year_range_min"], sentry["year_range_max"])
        sentryObjects.push(newSentry)
    })

    renderSentryObject(SentryObjects)
}

function renderSentryObject(sentryObjects){
    const olElement = document.getElementById("sentry-objects")
    const liElement = document.createElement("li")
    const text = `(${sentry.id}) | ${sentrey.name}: risco de colisão entre ${sentry.yearMin} e ${sentry.yearMax} `
    liElement.innerText(text)
    olElement.appendChild(liElement)
}

loadSentryObject()