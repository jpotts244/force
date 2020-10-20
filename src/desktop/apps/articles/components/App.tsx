import React, { Component } from "react"
import { ArticleData } from "@artsy/reaction/dist/Components/Publishing/Typings"
import { SystemContextProvider } from "@artsy/reaction/dist/Artsy"
import { InfiniteScrollNewsArticle } from "desktop/apps/article/components/InfiniteScrollNewsArticle"
import { data as sd } from "sharify"

import { mediator } from "desktop/lib/mediator"

export interface Props {
  articles: ArticleData[]
  isMobile: boolean
  marginTop: string
}

export default class App extends Component<Props, any> {
  render() {
    return (
      <SystemContextProvider user={sd.CURRENT_USER} mediator={mediator}>
        <InfiniteScrollNewsArticle {...this.props} />
      </SystemContextProvider>
    )
  }
}
