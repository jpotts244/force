import { Events } from "../../novo/src/Backbone.Events"
const _mediator = Events
if (typeof window !== "undefined" && !window.__mediator) {
  window.__mediator = _mediator
}
export const mediator = _mediator
