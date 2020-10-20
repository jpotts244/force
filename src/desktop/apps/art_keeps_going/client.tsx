import { buildClientApp } from "v2/Artsy/Router/client"
import { data as sd } from "sharify"
import { routes } from "v2/Apps/FeatureAKG/routes"
import React from "react"
import ReactDOM from "react-dom"
import { loadableReady } from "@loadable/component"

import { mediator } from "desktop/lib/mediator"

buildClientApp({
  routes: routes,
  context: {
    user: sd.CURRENT_USER,
    mediator,
    injectedData: sd.JSON_PAGE_DATA,
  } as any,
})
  .then(({ ClientApp }) => {
    loadableReady(() => {
      ReactDOM.hydrate(<ClientApp />, document.getElementById("react-root"))
    })
  })
  .catch(error => {
    console.error(error)
  })

if (module.hot) {
  module.hot.accept()
}
